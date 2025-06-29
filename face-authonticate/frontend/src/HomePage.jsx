import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
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
      boxSizing: "border-box",
    },
    title: {
      fontSize: "30px",
      marginBottom: "30px",
      color: "#333",
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
        <h1 style={styles.title}>Face Authentication System</h1>
        <Link to="/auth">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            User
          </button>
        </Link>
        <Link to="/admin-login">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            Admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
