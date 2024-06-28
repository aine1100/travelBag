import imageTwo from "../../images/citytwo.jpg";
import imageThree from "../../images/citythree.jpg";
import imageFour from "../../images/plane.jpg"
import imageFive from "../../images/package-removebg-preview.png"
import imageSix from "../../images/travel guide.jpg"
import { useEffect, useState } from "react";
import "./animation.css";

export default function Animation() {
  const images = [ imageTwo, imageThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="animation">
        <section
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        height: "600px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0",
        margin: "0",
        
      }}
    >
      <h1 style={{ color: "white" }}>
        <span style={{ color: "rgb(58, 176, 255)" }}>Let us start your </span>journey safe
        and secure with us
      </h1>
      <p style={{ color: "white", maxwidth: "600px" }} className="middlecontent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis rerum quia nostrum quas, ipsa neque pariatur aliquam nulla
        quisquam autem voluptatibus explicabo veniam esse at quos sapiente
        libero? Itaque.
      </p>
      <button className="button1">Load more</button>
      
    </section>
    <div style={{marginTop:"50px",display:"flex",alignItems:"center",justifyContent:"center",gap:"80px",flexWrap:"wrap"}} className="cards">
    <section style={{textAlign:"center",width:"300px",boxShadow:"2px 2px 2px 2px  rgb(153, 150, 150)",height:"270px"}}>  
      <img src={imageFive} alt="" style={{height:"100px",width:"170px",paddingTop:"30px"}} />
      <h1 style={{color:" rgb(30, 27, 27)"}}>Exclusive package</h1>
      <p style={{fontSize:"12px",color:"rgb(72, 71, 71)"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        accusamus corrupti tempora. Explicabo quidem, repellendus provident.
      </p>
  </section>
  <section style={{textAlign:"center",width:"300px",boxShadow:"2px 2px 2px 2px  rgb(153, 150, 150)",height:"270px"}}>  
      <img src={imageFour} alt="" style={{height:"100px",width:"170px",paddingTop:"30px"}} />
      <h1 style={{color:" rgb(30, 27, 27)"}}>World Travel</h1>
      <p style={{fontSize:"12px",color:"rgb(72, 71, 71)"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        accusamus corrupti tempora. Explicabo quidem, repellendus provident.
      </p>
  </section>
  <section style={{textAlign:"center",width:"300px",boxShadow:"2px 2px 2px 2px  rgb(151, 150, 150)",height:"270px"}}>  
      <img src={imageSix} alt="" style={{height:"100px",width:"170px",paddingTop:"30px"}} />
      <h1 style={{color:" rgb(30, 27, 27)"}}>Best Travel Guide</h1>
      <p style={{fontSize:"12px",color:" rgb(72, 71, 71)"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        accusamus corrupti tempora. Explicabo quidem, repellendus provident.
      </p>
  </section>
   
    </div>
    </div>
  );
}
