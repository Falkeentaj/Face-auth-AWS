import React from "react";
import { Link } from "react-router-dom";

function AuthPage() {
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
      boxSizing: "border-box",
    },
    title: {
      fontSize: "28px",
      marginBottom: "15px",
      color: "#333",
    },
    paragraph: {
      fontSize: "16px",
      marginBottom: "30px",
      color: "#555",
    },
    button: {
      padding: "12px 24px",
      margin: "10px",
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
        <h2 style={styles.title}>Authenticate</h2>
        <p style={styles.paragraph}>Welcome! Please register or login below.</p>
        <Link to="/login">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AuthPage;
