import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminName === "admin" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials");
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
      maxWidth: "400px",
      textAlign: "center",
      overflow: "hidden",
      wordWrap: "break-word",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "28px",
      marginBottom: "25px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "16px",
      outline: "none",
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
      boxSizing: "border-box",
    },
  };

  return (
    <div style={styles.body}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2 style={styles.title}>Admin Login</h2>
        <input
          type="text"
          placeholder="Admin Name"
          required
          maxLength={30}
          style={styles.input}
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          maxLength={30}
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
  