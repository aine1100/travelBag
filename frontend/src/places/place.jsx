import Navbar from "../navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import imageOne from "../images/kgl.jpg";
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Places() {
  const places = [
    {
      name: 'Kigali Rwanda',
      image: imageOne,
      rating: 5,
    },
    {
      name: 'England',
      image: imageOne,
      rating: 4,
    },
    {
      name: 'Spain',
      image: imageOne,
      rating: 5,
    },
  ];

  const handleBook = async (place) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('You need to be logged in to book a place.');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/book', place, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        toast.success('Place booked successfully!');
      }
    } catch (error) {
      console.error('Error booking place:', error);
      toast.error('Failed to book place.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="dashboard-content">
            <h2>Bookings</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "50px", gap: "50px" }}>
            {places.map((place, index) => (
              <div
                key={index}
                style={{
                  width: "250px",
                  height: "300px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img src={place.image} alt={place.name} height="150px" width="200px" style={{ borderRadius: "5px" }} />
                <div>
                  <p>{place.name}</p>
                  <p>{Array(place.rating).fill().map((_, i) => <FaStar key={i} />)}</p>
                </div>
                <button onClick={() => handleBook(place)}>Book now</button>
              </div>
            ))}
            <button style={{ marginLeft: "400px", marginTop: "-20px" }}>Load more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Places;
