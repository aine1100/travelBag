import './booking.css';

function Bookings() {
  return (
    <div className="bookings">
      <h2>Booking</h2>
      <p>This is a quick review of your account information</p>
      <div className="booking-summary">
        <span>Total Number of bookings: 30</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name of the client</th>
            <th>Vehicle model</th>
            <th>Booking Date</th>
            <th>Return Date</th>
            <th>Location</th>
            <th>Plan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data, replace with dynamic data as needed */}
          {Array.from({ length: 10 }).map((_, idx) => (
            <tr key={idx}>
              <td>Dush aine</td>
              <td>car</td>
              <td>1/1/2020</td>
              <td>1/1/2020</td>
              <td>Kigali</td>
              <td>Vip</td>
              <td>
                <button className="view">View</button>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {/* Implement pagination as needed */}
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Bookings;
