import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search for place" />
      <button style={{marginLeft:"-200px"}}>Search</button>

      <div className="navbar-actions">
        <div className="greeting">
          <p>Good Morning</p>
          <p>VD2020 - 11:00</p>
        </div>
        <div className="logout">
        <button> <Link style={{textDecoration:"none",color:"white"}}>Log out</Link></button>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
