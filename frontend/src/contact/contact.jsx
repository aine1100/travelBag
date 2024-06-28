import { useState, useEffect } from "react";
import "./contact.css";
// import { Form } from "react-router-dom";
export default function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isSmallScreen = windowWidth <= 420;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          borderBottom: "3px solid rgb(58, 176, 255) ",
          fontSize: "30px",
        }}
      >
        Contact
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3>Get in contact with us</h3>
        <p style={{ maxWidth: "450px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          dolorum minima tempore, voluptatum, facilis soluta praesentium
        </p>
        <form
          style={{
            border: "1px solid rgb(58, 176, 255)",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "20px",flexDirection:isSmallScreen ? "column":"row" }}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div style={{ display: "flex", gap: "20px",flexDirection:isSmallScreen ? "column":"row" }}>
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea placeholder="message"></textarea>
          <br />
          <div style={{ justifyContent:"center",alignItems:"center",display: "flex", gap: "20px" }}>
            <button>Submit</button>
            <button style={{ backgroundColor: "gray" }} id="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
