import Navbar from "../navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import imageOne from "../images/kgl.jpg"
import {  FaStar } from "react-icons/fa";


function Places() {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="dashboard-content">
            <h2>Bookings</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "50px",
              gap: "50px",
            }}
          >
             <div
              style={{
                width: "250px",
                height: "300px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <img src={imageOne} alt="" height="150px" width="200px" style={{borderRadius:"5px"}} />
              <div>
                <p>Kigali Rwanda </p>
                <p>  <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>

              </div>
              <button>Book now</button>
            </div>
            <div
              style={{
                width: "250px",
                height: "300px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <img src={imageOne} alt="" height="150px" width="200px" style={{borderRadius:"5px"}} />
              <div>
                <p>Kigali Rwanda </p>
                <p>  <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>

              </div>
              <button>Book now</button>

            </div>
            <div
              style={{
                width: "250px",
                height: "300px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <img src={imageOne} alt="" height="150px" width="200px" style={{borderRadius:"5px"}} />
              <div>
                <p>Kigali Rwanda </p>
                <p>  <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>

              </div>
              <button>Book now</button>

            </div>
            <button style={{marginLeft:"400px",marginTop:"-20px"}}>Load more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Places;
