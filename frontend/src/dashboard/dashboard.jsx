import Sidebar from '../Sidebar/sidebar';
import './dashboard.css';
import Navbar from '../navbar/navbar';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <p>This is a quick review of your account information</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
