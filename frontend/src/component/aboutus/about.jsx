import imageTwo from "../../images/citytwo.jpg";
import "./about.css"
import { useState,useEffect } from "react";
export default function Aboutus() {
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
        marginTop: "40px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding:"0px 20px"
      }}
      className="about"
    >
      <h2
        style={{
          textAlign: "center",
          color: " rgb(72, 71, 71)",
          fontSize: "30px",
          borderBottom: "3px solid rgb(58, 176, 255) ",
        }}
      >
        About us
      </h2>
      <p style={{ textAlign: "center", opacity: "0.8", width: isSmallScreen ? "400px":"700px" }} className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
        nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
        Voluptatibus asperiores nostrum dolore error delectus natus
      </p>
      <div style={{display:"flex",gap:"50px",paddingTop:"100px",justifyContent:"center",alignItems:"center",flexWrap:isSmallScreen ? "wrap":"nowrap"}} className="aboutusimage">
      <div style={{ display: "flex", flexDirection:"column  ", }}>
        <h2
          style={{
            maxwidth: "300px",
            color: " rgb(72, 71, 71)",
            fontWeight: "bolder",
            textAlign: "left",
            alignItems: "left",
            
           
          }}
        >
          Explore more about our travel agency
        </h2>
        <p style={{maxwidth:"500px",opacity:"0.6"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repudiandae minima nostrum vel, sed voluptates dolor pariatur
          perspiciatis eligendi labore! Accusantium delectus nemo dolorem ex
          reiciendis, recusandae modi eius esse!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repudiandae minima nostrum vel, sed voluptates dolor pariatur
          perspiciatis eligendi labore! Accusantium delectus nemo dolorem ex
          reiciendis, recusandae modi eius esse!
   
        </p>
        <button style={{height:"50px",width:"150px"}}>Read more</button>
      </div>
       <img src={imageTwo} alt="" style={{width:"300px",height:"400px"}}/>
       <img src={imageTwo} alt="" style={{width:"300px",height:"350px",marginTop:"50px"}}/>

      </div>
     
         </div>
  );
}
