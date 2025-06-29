import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (adminName === "admin" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Admin Login</h2>
      <input type="text" placeholder="Admin Name" onChange={(e) => setAdminName(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLoginPage;
