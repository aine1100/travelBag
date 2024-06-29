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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" ,color:"white"}}>
            <div
              style={{
                backgroundColor: " #007bff",
                height: "200px",
                width: "250px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Booking</p>
            </div>
            <div
              style={{
                backgroundColor: " #007bff",
                height: "200px",
                width: "250px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Places</p>
            </div>
            <div
              style={{
                backgroundColor: " #007bff",
                height: "200px",
                width: "250px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Approvals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
