import React from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Authenticate</h2>
      <p>Welcome! Please register or login below.</p>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register" style={{ marginLeft: "20px" }}><button>Register</button></Link>
    </div>
  );
}

export default AuthPage;
