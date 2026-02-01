const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="card">
      <h2>Welcome, {user} 🎉</h2>

      <p style={{ marginBottom: "20px", color: "#444" }}>
        You have successfully accessed the SkyLine Analytics Platform.
      </p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
