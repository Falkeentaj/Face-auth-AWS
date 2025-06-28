from flask import Flask, request, jsonify
import boto3
import os
from datetime import datetime
import socket
from flask_cors import CORS
from time import time

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'static/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


rekognition = boto3.client('rekognition', region_name='us-east-1')
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
collection_id = 'my-rekognition-collection'
users_table = dynamodb.Table('Users')
login_logs_table = dynamodb.Table('LoginLogs')

@app.route('/api/register', methods=['POST'])
def api_register():
    username = request.form['username']
    file = request.files['image']
    filename = f"{username}_register.jpg"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    s3 = boto3.client('s3')
    bucket_name = 'my-face-image-recognition'
    s3.upload_file(filepath, bucket_name, filename)

    rekognition.index_faces(
        CollectionId=collection_id,
        Image={"S3Object": {"Bucket": bucket_name, "Name": filename}},
        ExternalImageId=username,
        DetectionAttributes=['DEFAULT']
    )

    users_table.put_item(Item={
        'username': username,
        'registration_time': datetime.utcnow().isoformat(),
        'role': 'user',
        'image_path': f"s3://{bucket_name}/{filename}"
    })

    return jsonify({'message': f'User {username} registered successfully'})


@app.route('/api/analyze-stream', methods=['POST'])
def analyze_stream():
    try:
        # Simply start the pre-created stream processor
        response = rekognition.start_stream_processor(Name="face-auth-stream-proc")

        return jsonify({
            'message': 'Stream processor started successfully',
            'SessionId': response.get('SessionId')
        })

    except Exception as e:
        print(f"Error in /api/analyze-stream: {e}")
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/login', methods=['POST'])
def api_login():
    file = request.files.get('image')
    if not file:
        return jsonify({'error': 'No image uploaded'}), 400

    # Save the uploaded image
    filename = f"login_{int(time())}.jpg"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    # Upload to S3
    s3 = boto3.client('s3')
    bucket_name = 'my-face-image-recognition'
    s3.upload_file(filepath, bucket_name, filename)

    # Search face in the collection
    response = rekognition.search_faces_by_image(
        CollectionId=collection_id,
        Image={'S3Object': {'Bucket': bucket_name, 'Name': filename}},
        FaceMatchThreshold=90,
        MaxFaces=1
    )

    matches = response.get('FaceMatches', [])
    if matches:
        matched_user_id = matches[0]['Face']['ExternalImageId']

        # Log the login event
        login_logs_table.put_item(Item={
            'username': matched_user_id,
            'timestamp': int(time()),
            'ip': request.remote_addr,
            'device': request.user_agent.string
        })

        return jsonify({'message': f'Welcome, {matched_user_id}!'})
    else:
        return jsonify({'error': 'Face not recognized'}), 401




@app.route('/api/logs')
def api_logs():
    response = login_logs_table.scan()
    logs = response.get('Items', [])
    logs.sort(key=lambda x: x['timestamp'], reverse=True)
    return jsonify(logs)

if __name__ == '__main__':
    app.run(debug=True)