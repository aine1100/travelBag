import  { useState } from 'react';
import './navbar.css';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import {Link} from "react-router-dom"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbar = [
    {
      name: "home",
      src: "/"
    },
    {
      name:"about",
      "src":"/about"
    },
    
    {
      name:"hotel",
      "src":"/hotel"
    },
    {
    name:"contact",
    "src":"/contact"
    },
    

  ]


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <h2>Travel bag</h2>

     
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
      {
        navbar.map((item,index)=>(
          <li key={index}>
            <Link to={item.src} style={{listStyleType:"none",color:"black",textDecoration:"none"}}>{item.name}</Link>
          </li>
        ))
      } 
      </ul>
      <div className="search">
        <button>
          <Link to= "/register" style={{textDecoration:"none",color:"white"}}>  Sign-up </Link>
        </button>
        <button>
          <Link to= "/login" style={{textDecoration:"none",color:"white"}}>  login </Link>
        </button>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} style={{marginRight:"50px"}}>
        <IoIosMenu className="menu-icon" />
      </div>
      </div>
    </div>
  );
}
