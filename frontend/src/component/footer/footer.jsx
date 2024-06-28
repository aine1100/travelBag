import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import imageTwo from "../../images/citytwo.jpg";

export default function Footer() {

  return (
    <div
      style={{
        backgroundColor: "rgb(51, 50, 50)",
        display: "flex",
        justifyContent: "space-around",
        padding: "40px 20px",
        color: "white",
        marginTop:"50px",
        flexWrap:"wrap",
        overflowX:"hidden"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}>
        <h2>Travel bag</h2>
        <p style={{ fontSize: "12px", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          ullam hic quisquam non nemo, facilis alias beatae, ab inventore odit.
        </p>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <FaFacebook style={{ width: "30px", height: "30px" }} />
          <FaInstagram style={{ width: "30px", height: "30px" }} />
          <FaWhatsapp style={{ width: "30px", height: "30px" }} />
          <FaLinkedin style={{ width: "30px", height: "30px" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "150px" }}>
        <h2>Quick links</h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            padding: 0,
            margin: 0,
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          <li>Home</li>
          <li>Destination</li>
          <li>Gallery</li>
          <li>Booking</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "150px" }}>
        <h2>Contacts</h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            padding: 0,
            margin: 0,
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          <li>07899999</li>
          <li>ainedushimire@gmail.com</li>
          <li>adushimire@yahoo.com</li>
          <li>travel_2023</li>
          <li>travel123</li>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Instagram</h2>
        <div>
          <ul style={{ display: "flex", gap: "10px", listStyleType: "none", padding: 0, margin: "5px 0" }}>
            <li>
              <img src={imageTwo} alt="" style={{ width: "60px", height: "40px" ,borderRadius:"10px"}} />
            </li>
            <li>
              <img src={imageTwo} alt="" style={{ width: "60px", height: "40px",borderRadius:"10px" }} />
            </li>
          </ul>
          <ul style={{ display: "flex", gap: "10px", listStyleType: "none", padding: 0, margin: "5px 0" }}>
            <li>
              <img src={imageTwo} alt="" style={{ width: "60px", height: "40px",borderRadius:"10px" }} />
            </li>
            <li>
              <img src={imageTwo} alt="" style={{ width: "60px", height: "40px",borderRadius:"10px" }} />
            </li>
          </ul>
          <ul style={{ display: "flex", gap: "10px", listStyleType: "none", padding: 0, margin: "5px 0",borderRadius:"10px" }}>
            <li>
              <img src={imageTwo} alt="" style={{ width: "60px", height: "40px",borderRadius:"10px" }} />
            </li>
            <li>
              <img src={imageTwo} alt="" style={{ width: "60px", height: "40px" , borderRadius:"10px"}} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
