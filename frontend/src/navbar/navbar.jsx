import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search for place" />
      <div className="navbar-actions">
        <div className="greeting">
          <p>Good Morning</p>
          <p>VD2020 - 11:00</p>
        </div>
        <div className="logout">
        <button>Log out</button>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
