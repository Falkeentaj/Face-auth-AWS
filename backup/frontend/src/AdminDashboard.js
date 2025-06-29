import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/logs").then(res => {
      setLogs(res.data);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <table border="1" style={{ margin: "0 auto", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Timestamp</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.username}</td>
              <td>{new Date(log.timestamp * 1000).toLocaleString()}</td>
              <td>{log.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
