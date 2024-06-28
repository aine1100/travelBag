import imageTwo from "../../images/kigali.jpg";
import "./blog.css"
import { useState,useEffect } from "react";
export default function Blog() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowWidth <= 776;
  // const isMediumScreen = windowWidth <= 768;
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        flexDirection: "column",
        gap:"40px",
        overflowX:"hidden"
        
      }}
    >
      <h2 style={{ borderBottom: "4px solid rgb(58,176,255)" }}>Our Blog</h2>
      <p style={{ width: isSmallScreen ? "350px":"600px", opacity: "0.6", textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        laboriosam, dignissimos recusandae temporibus possimus tenetur.
      </p>
    <div style={{display:"flex",flexDirection:isSmallScreen ? "column":"row",gap:isSmallScreen ? "10px":"20px"}} className="blogone">
    <div style={{display:"flex" ,flexDirection:"column",gap:"40px"}}>
   
      <div style={{display:"flex",flexDirection:isSmallScreen ? "column":"row",justifyContent:"center",alignItems:"center",gap:"30px"}}>
            <img src={imageTwo} alt="" style={{width:"300px",height:"200px"}} />
         <div>
            <h2 style={{width:"400px",opacity:"0.8",textAlign:"center"}}>Explore different ruins in different parts of the world</h2>
            <p style={{ width: isSmallScreen ?  "350px": "300px", opacity: "0.6", textAlign: "center",flexWrap:"" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
      </p>
      <button style={{width:"100px",height:"40px",marginLeft:isSmallScreen ? "130px":"100px"}}>Read more</button>
         </div>
         </div>
         <div style={{display:"flex",flexDirection:isSmallScreen ? "column":"row",justifyContent:"center",alignItems:"center",gap:"30px"}}>
            <img src={imageTwo} alt="" style={{width:"300px",height:"200px"}} />
         <div>
            <h2 style={{width:"400px",opacity:"0.8",textAlign:"center"}}>Explore different ruins in different parts of the world</h2>
            <p style={{ width: isSmallScreen ?  "350px": "300px", opacity: "0.6", textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
      </p>
      <button style={{width:"100px",height:"40px",marginLeft:isSmallScreen ? "130px":"100px"}}>Read more</button>
         </div>
         </div>
         
      

    </div>
    
    
    <div >
      <div style={{}}>
      <img src={imageTwo} alt=""  style={{width:isSmallScreen ? "300px":"400px",height:"250px",marginLeft:isSmallScreen ? "100px":"00px"}}/>
        <h2 style={{width:"400px",opacity:"0.8",marginLeft:isSmallScreen ? "100px":"00px"}}>Explore different ruins in different parts of the world</h2>
        <p style={{ width: isSmallScreen ? "350px":"300px", opacity: "0.6", textAlign: "center",marginLeft:isSmallScreen ? "50px":"00px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
      </p>
      <button style={{width:"100px",height:"40px", marginLeft:isSmallScreen ? "190px":"100px"}}>Read more</button>
      </div>
        
    </div>
    </div>
    </div>
  );
}
