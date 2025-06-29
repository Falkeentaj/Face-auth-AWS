import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [image, setImage] = useState(null);

  const handleLogin = async () => {
    if (!image) {
      alert("Please upload an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Login failed");
    }
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #4a90e2, #0052cc)",
      fontFamily: "'Segoe UI', sans-serif",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px 30px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      width: "90%",
      maxWidth: "450px",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      marginBottom: "25px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "16px",
      backgroundColor: "#f9f9f9",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#4a90e2",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <h2 style={styles.title}>Face Login</h2>
        <input
          type="file"
          accept="image/*"
          style={styles.input}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          style={styles.button}
          onClick={handleLogin}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
