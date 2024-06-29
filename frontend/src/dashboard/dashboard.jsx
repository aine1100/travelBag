import Sidebar from "../Sidebar/sidebar";
import "./dashboard.css";
import Navbar from "../navbar/navbar";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <p>This is a quick review of your account information</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
            <div
              style={{
                backgroundColor: " #007bff",
                height: "200px",
                width: "250px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: " #007bff",
                height: "200px",
                width: "250px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: " #007bff",
                height: "200px",
                width: "250px",
                borderRadius: "5px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
