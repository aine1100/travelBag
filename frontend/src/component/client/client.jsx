import { useState,useEffect } from "react";
import imageTwo from "../../images/kigali.jpg";
import imageThree from "../../images/kgl.jpg"
import "./cleint.css"
export default function Clients() {
    const [images,setImages]=useState(0)
    const [names,Setnames]=useState(0);
    const [contents,setContent]=useState(0)
    const username=["Dush aine","Ineza elie"]
    const image=[imageTwo,imageThree]
    const content=[
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,",
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,",
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet",
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,",
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        setImages((prevIndex) => (prevIndex + 1) % image.length);
        Setnames((prevIndex)=>(prevIndex+1)% username.length)
        setContent((prevIndex)=>(prevIndex+1)% content.length)
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, [image.length,username.length,content.length]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "40px",
        overflow:"hidden",
        overflowX:"hidden"
      }}
      className="clients"
    >
      <h2 style={{ borderBottom: "4px solid rgb(58,176,255)" }}>Clients</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(58,176,255)",
          width: "100%",
          height: "400px",
          alignItems: "center",
          justifyContent: "center",
          gap:"2px",
          color:"white"
        }}
      >
        <img
          src={image[images]}
          alt=""
          className="slide-image"
          style={{ width: "100px", height: "100px", borderRadius: "50%" ,border:"2px solid white"}}
        />
        <p style={{maxwidth:"600px",textAlign:"center",opacity:"0.8"}} className="slide-content">
          {content[contents]}
        </p>
        <h2 style={{opacity:"0.8",fontSize:"30px", textAlign:"center",transition: "username 1s ease-in-out"}} className="slide-name">{username[names]}
            <br/>
            <span style={{fontSize:"12px",textAlign:"center"}}>Business analyst</span>
        </h2>
      </div>
    </div>
  );
}
