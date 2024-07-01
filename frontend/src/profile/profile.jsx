import Sidebar from "../Sidebar/sidebar";
import Navbar from "../navbar/navbar";
import imageOne from "../images/dubai.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Profile() {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      async function fetchUser() {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.log("No token found");
            return;
          }
          const response = await axios.get("http://localhost:5000/me", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
        } catch (err) {
          console.log(err);
          console.log("Failed to get user");
        }
      }
  
      fetchUser();
    }, []);
  
    
  return (
    <div>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="dashboard-content">
            <h2>Profile</h2>
            <h3 style={{textAlign:"center"}}>This is a quick info about your account</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: "300px",
                  width: "300px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={imageOne} alt=""  style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                <p>Welcome to travel bag</p>
                <div>
                <h3>Contact information</h3>
                <p>Name:{user.username}</p>
                <p>Email:{user.email}</p>
              
                </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
