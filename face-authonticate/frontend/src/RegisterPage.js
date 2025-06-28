import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
}

export default RegisterPage;
