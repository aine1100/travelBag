import { useState, useEffect } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const [user, setUser] = useState({});
  const location = useLocation();

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
    <div className="sidebar">
      <div className="profile-section">
        <h3>{user.username}</h3>
        <p>Welcome to your dashboard</p>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={location.pathname === "/booking" ? "active" : ""}>
            <Link to="/booking">Bookings</Link>
          </li>
          <li className={location.pathname === "/place" ? "active" : ""}>
            <Link to="/place">Places</Link>
          </li>
          <li className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <button>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Log out</Link>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
