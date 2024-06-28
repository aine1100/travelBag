import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <h3>James Atann</h3>
        <p>Super Admin</p>
      </div>
      <nav>
        <ul>
          <li className="active">Dashboard</li>
           
        </ul>
      </nav>
    
    </div>
  );
}

export default Sidebar;
