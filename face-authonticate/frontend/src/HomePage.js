import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Face Authentication System</h1>
      <div style={{ marginTop: "30px" }}>
        <Link to="/auth"><button>User</button></Link>
        <Link to="/admin-login" style={{ marginLeft: "20px" }}><button>Admin</button></Link>
      </div>
    </div>
  );
}

export default HomePage;
