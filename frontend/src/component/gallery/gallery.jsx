import { useState,useEffect } from "react";
import imageTwo from "../../images/kigali.jpg";
import "./gallery.css"
export default function Gallery() {
    const [hovered,setHovered]=useState(false)
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
        gap:"20px",
        overflowX:"hidden",
      }}
      className="gallery"
    >
      <h2
        style={{
          color: "rgb(51,50,50)",
          borderBottom: "4px solid rgb(58, 176, 255)",
        }}
      >
        Gallery
      </h2>
      <p style={{width:isSmallScreen ? "400px":"600px",opacity:"0.6"}} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        laboriosam, dignissimos recusandae temporibus possimus tenetur, deserunt.
      </p>
     <div style={{  justifyContent: "center", alignItems: "center",gap:"20px" }}>
     <div style={{ display: "flex", gap: "20px" ,flexDirection:isSmallScreen ? "column":"row" }} className="images">
        <img src={imageTwo} alt="" style={{width:"300px",height:"300px"}} />
        <img src={imageTwo} alt="" style={{width:"300px",height:"300px"}} />
        <img src={imageTwo} alt="" style={{width:"300px",height:"300px"}} />

      </div>
      <div style={{ display: "flex", gap: "20px",flexDirection:isSmallScreen ? "column":"row" ,marginTop:"20px" }} className="images">
        <img src={imageTwo} alt="" style={{width:"300px",height:"300px"}} />
        <img src={imageTwo} alt="" style={{width:"300px",height:"300px"}} />
        <img src={imageTwo} alt="" style={{width:"300px",height:"300px"}} />

      </div>
     </div>
        <button style={{backgroundColor: hovered ?  "rgb(51,50,50)":"rgb(58,176,255)",width:"150px",height:"50px",fontSize:"15px"}} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>Load more</button>
    </div>
  );
}
