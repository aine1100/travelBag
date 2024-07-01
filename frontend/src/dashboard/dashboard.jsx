import Sidebar from "../Sidebar/sidebar";
import "./dashboard.css";
import Navbar from "../navbar/navbar";
import { useState,useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
   

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/bookings', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

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
              <h1>{bookings.length}</h1>
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
              <h1>{bookings.length}</h1>
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
              <h1>{bookings.length}</h1>
              <p>Approvals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
