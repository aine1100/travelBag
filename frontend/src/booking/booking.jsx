import Navbar from "../navbar/navbar";
import Sidebar from "../Sidebar/sidebar";

function Bookings() {
  return (
  <>
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <h2>Bookings</h2>
          </div>
      </div>
    </div>
  </>
  );
}

export default Bookings;
