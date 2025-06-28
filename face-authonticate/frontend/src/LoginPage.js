import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [image, setImage] = useState(null);

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Face Login</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}

export default LoginPage;
