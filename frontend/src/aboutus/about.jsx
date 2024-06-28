import { useState, useEffect } from "react";
import imageTwo from "../images/citytwo.jpg";
import traveller from "../images/traveller-removebg-preview.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// import person from "../images/traveller.png"

export default function AboutUsHeader() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const isSmallScreen = windowWidth <= 776;
  return (
    <div
      style={{
        marginTop: "90px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="about"
    >
      <h2
        style={{
          textAlign: "center",
          color: " rgb(72, 71, 71)",
          fontSize: "30px",
          borderBottom: "3px solid rgb(58, 176, 255) ",
          padding: "0px 20px",
        }}
      >
        About us
      </h2>
      <p
        style={{
          textAlign: "center",
          opacity: "0.8",
          width: isSmallScreen ? "400px" : "700px",
          padding: "0px 20px",
        }}
        className="content"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
        nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
        Voluptatibus asperiores nostrum dolore error delectus natus
      </p>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: isSmallScreen ? "wrap" : "nowrap",
        }}
        className="aboutusimage"
      >
        <div style={{ display: "flex", flexDirection: "column  " }}>
          <h2
            style={{
              maxwidth: "300px",
              color: " rgb(72, 71, 71)",
              fontWeight: "bolder",
              textAlign: "left",
              alignItems: "left",
              padding: "0px 20px",
            }}
          >
            Explore more about our travel agency
          </h2>
          <p
            style={{
              width: isSmallScreen ? "300px" : "500px",
              opacity: "0.6",
              padding: "0px 20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            repudiandae minima nostrum vel, sed voluptates dolor pariatur
            perspiciatis eligendi labore! Accusantium delectus nemo dolorem ex
            reiciendis, recusandae modi eius esse! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Harum repudiandae minima nostrum vel,
            sed voluptates dolor pariatur perspiciatis eligendi labore!
            Accusantium delectus nemo dolorem ex reiciendis, recusandae modi
            eius esse!
          </p>
          <p
            style={{
              width: isSmallScreen ? "400px" : "500px",
              textAlign: "center",
              flexWrap: "wrap",
              opacity: "0.6",
              padding: "0px 20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            repudiandae minima nostrum vel, sed voluptates dolor pariatur
            perspiciatis eligendi labore! Accusantium delectus nemo dolorem ex
            reiciendis, recusandae modi eius esse! perspiciatis eligendi labore!
            Accusantium delectus nemo dolorem ex reiciendis, recusandae modi
            eius esse!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            paddingTop: "40px",
            flexWrap: "wrap",
            padding: "0px 20px",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              src={imageTwo}
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
            <img
              src={imageTwo}
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
            <img
              src={imageTwo}
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <img
              src={imageTwo}
              style={{ width: "300px", height: "220px" }}
              alt=""
            />
            <img
              src={imageTwo}
              style={{ width: "300px", height: "220px" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(58, 176, 255) ",
          width: "100%",
          height: "350px",
          paddingLeft: "20px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          gap: "100px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRight: "2px solid white",
            display: "flex",
            flexDirection: "column",
            paddingRight: "30px",
            color: "white",
          }}
        >
          <img
            src={traveller}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          <p>350 happy customers</p>
          <p>customers</p>
        </div>
        <div
          style={{
            borderRight: "2px solid white",
            display: "flex",
            flexDirection: "column",
            paddingRight: "30px",
            color: "white",
          }}
        >
          <img
            src={traveller}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          <p>350 happy customers</p>
          <p>customers</p>
        </div>
        <div
          style={{
            borderRight: "2px solid white",
            display: "flex",
            flexDirection: "column",
            paddingRight: "30px",
            color: "white",
          }}
        >
          <img
            src={traveller}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          <p>350 happy customers</p>
          <p>customers</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "30px",
            color: "white",
          }}
        >
          <img
            src={traveller}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          <p>350 happy customers</p>
          <p>customers</p>
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
          color: " rgb(72, 71, 71)",
          fontSize: "30px",
          borderBottom: "3px solid rgb(58, 176, 255) ",
          padding: "0px 20px",
        }}
      >
        Our services
      </h2>
      <p
        style={{
          textAlign: "center",
          opacity: "0.8",
          width: isSmallScreen ? "400px" : "700px",
          padding: "20px 20px",
        }}
        className="content"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
        nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
        Voluptatibus asperiores nostrum dolore error delectus natus
      </p>
      <div style={{ display: "flex", flexWrap: "wrap",gap:"100px",paddingLeft:"60px" }}>
        <div style={{ flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
          <img
            src={traveller}
            alt=""
            style={{ width: "50px", height: "40px",marginLeft:"120px" }}
          />
          <h2 style={{textAlign:"center"}}>Best places</h2>
          <p
            style={{
              textAlign: "center",
              opacity: "0.8",
              width: isSmallScreen ? "200px" : "300px",
              
            }}
            className="content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
            nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
           
          </p>
        </div>
        <div style={{ flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
          <img
            src={traveller}
            alt=""
            style={{ width: "50px", height: "40px",marginLeft:"120px" }}
          />
          <h2 style={{textAlign:"center"}}>Best places</h2>
          <p
            style={{
              textAlign: "center",
              opacity: "0.8",
              width: isSmallScreen ? "200px" : "300px",
              
            }}
            className="content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
            nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
           
          </p>
        </div>
        <div style={{ flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
          <img
            src={traveller}
            alt=""
            style={{ width: "50px", height: "40px",marginLeft:"120px" }}
          />
          <h2 style={{textAlign:"center"}}>Best places</h2>
          <p
            style={{
              textAlign: "center",
              opacity: "0.8",
              width: isSmallScreen ? "200px" : "300px",
              
            }}
            className="content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
            nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
           
          </p>
        </div>
        <div style={{ flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
          <img
            src={traveller}
            alt=""
            style={{ width: "50px", height: "40px",marginLeft:"120px" }}
          />
          <h2 style={{textAlign:"center"}}>Best places</h2>
          <p
            style={{
              textAlign: "center",
              opacity: "0.8",
              width: isSmallScreen ? "200px" : "300px",
              
            }}
            className="content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
            nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
           
          </p>
        </div>
        <div style={{ flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
          <img
            src={traveller}
            alt=""
            style={{ width: "50px", height: "40px",marginLeft:"120px" }}
          />
          <h2 style={{textAlign:"center"}}>Best places</h2>
          <p
            style={{
              textAlign: "center",
              opacity: "0.8",
              width: isSmallScreen ? "200px" : "300px",
              
            }}
            className="content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
            nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
           
          </p>
        </div>
        <div style={{ flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
          <img
            src={traveller}
            alt=""
            style={{ width: "50px", height: "40px",marginLeft:"120px" }}
          />
          <h2 style={{textAlign:"center"}}>Best places</h2>
          <p
            style={{
              textAlign: "center",
              opacity: "0.8",
              width: isSmallScreen ? "200px" : "300px",
              
            }}
            className="content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas
            nostrum dolorem minus accusamus? Quia temporibus incidunt quo!
           
          </p>
        </div>
      </div>
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
        {[0, 1, 2,3].map((index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${traveller})`,
              width: "250px",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundRepeat:"no-repeat",
              flexDirection: isSmallScreen ? "column" : "row",
              boxShadow:" 1.5px rgb(153, 150, 150) "

            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                height: "280px",
                width: "200px",
                alignItems: "center",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                opacity: hoveredIndex === index ? "1" : "0",
                transition: "opacity 0.3s ease-in-out",
                borderRadius:"5px"
              }}
            >
              <h2>John doe</h2>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <FaFacebook style={{ width: "30px", height: "30px" }} />
          <FaInstagram style={{ width: "30px", height: "30px" }} />
          <FaWhatsapp style={{ width: "30px", height: "30px" }} />
          <FaLinkedin style={{ width: "30px", height: "30px" }} />
        </div>
        <p>Team manager</p>
            </div>
          </div>
        ))}
        
      </div>

    </div>
  );
}
