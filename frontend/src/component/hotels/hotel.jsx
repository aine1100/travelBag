import imageTwo from "../../images/kigali.jpg";
import { useState,useEffect } from "react";
import "./hotel.css"

export default function Hotel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hovered,setHovered]=useState(false)


  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const isSmallScreen = windowWidth <= 776;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        gap: "20px",
      }}
      className="hotels"
    >
      <h2
        style={{
          color: "rgb(51,50,50)",
          borderBottom: "4px solid rgb(58, 176, 255)",
        }}
      >
        Hotels
      </h2>
      <p style={{ width: isSmallScreen ? "400px":"600px",textAlign:"center", opacity: "0.6" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        laboriosam, dignissimos recusandae temporibus possimus tenetur, deserunt.
      </p>
      <div style={{ display: "flex", gap: "50px" }} className="cards">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageTwo})`,
              width: "350px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: isSmallScreen ? "column" : "row",

            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                height: "350px",
                width: "300px",
                alignItems: "center",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                opacity: hoveredIndex === index ? "1" : "0",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <h2>South Africa</h2>
              <p>$20 / 7</p>
              <p
                style={{
                  width: "280px",
                  textAlign: "center",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                deleniti dolorum laborum at qui? Aliquam sunt alias
                necessitatibus
              </p>
              <button style={{ height: "40px", width: "100px" }}>
                View more
              </button>
            </div>
          </div>
        ))}
        
      </div>
      <button style={{backgroundColor: hovered ?  "rgb(51,50,50)":"rgb(58,176,255)",width:"150px",height:"40px",fontSize:"15px"}} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>Load more</button>

    </div>
  );
}
