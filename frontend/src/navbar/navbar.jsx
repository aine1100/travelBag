import './navbar.css';

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
      </div>
      </div>
    </div>
  );
}

export default Navbar;
