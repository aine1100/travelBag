import  { useState } from 'react';
import './navbar.css';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search for place"
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
