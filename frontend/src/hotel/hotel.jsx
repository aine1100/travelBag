import { FaLocationArrow,  FaStar } from "react-icons/fa";
import imageOne from "../images/kigali.jpg";
export default function Hot() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        overflow:"hidden"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          borderBottom: "3px solid rgb(58, 176, 255) ",
          fontSize: "30px",
        }}
      >
        Hotel
      </h2>
      <div style={{}}>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            gap: "100px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            Destination
            <select
              name=""
              id=""
              style={{
                border: "none",
                height: "30px",
                borderBottom: "2px solid rgb(58,176,255)",
                outline: "none",
                width: "150px",
                textAlign: "center",
                backgroundColor: "rgb(173,216,230)",
                color: "rgb(51,50,50)",
              }}
            >
              <option value="">What are we going ?</option>
              <option value="">New york</option>
              <option value="">Denmark</option>
              <option value="">Miami</option>
            </select>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            Date
            <select
              name=""
              id=""
              style={{
                border: "none",
                height: "30px",
                borderBottom: "2px solid rgb(58,176,255)",
                outline: "none",
                width: "150px",
                textAlign: "center",
                backgroundColor: "rgb(173,216,230)",
                color: "rgb(51,50,50)",
              }}
            >
              <option value="">Pick up return</option>
              <option value="">New york</option>
              <option value="">Denmark</option>
              <option value="">Miami</option>
            </select>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            People
            <select
              name=""
              id=""
              style={{
                border: "none",
                height: "30px",
                borderBottom: "2px solid rgb(58,176,255)",
                outline: "none",
                width: "150px",
                textAlign: "center",
                backgroundColor: "rgb(173,216,230)",
                color: "rgb(51,50,50)",
              }}
            >
              <option value="">People</option>
              <option value="">New york</option>
              <option value="">Denmark</option>
              <option value="">Miami</option>
            </select>
          </li>

          <li style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            Activity
            <select
              name=""
              id=""
              style={{
                border: "none",
                height: "30px",
                borderBottom: "2px solid rgb(58,176,255)",
                outline: "none",
                width: "150px",
                textAlign: "center",
                backgroundColor: "rgb(173,216,230)",
                color: "rgb(51,50,50)",
              }}
            >
              <option value="">Travel type</option>
              <option value="">New york</option>
              <option value="">Denmark</option>
              <option value="">Miami</option>
            </select>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "100px",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageOne})`,
              display: "flex",
              width: "350px",
              height: "250px",
              borderRadius: "20px",
              textAlign: "center",
              alignItems: "center",
              justifyContent:"center",
              marginBottom:"120px"

            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                boxShadow:"0px 2px 3px 2px rgba(153,150,150,0.6)",
                height: "270px",
                width: "300px",
                alignItems: "center",
                paddingTop:"20px",
                marginTop: "200px",
                borderRadius: "5px",
                marginBottom: "30px",
                paddingBottom:"20px"
              }}
            >
              <div style={{display:"flex",gap:"20px",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

             <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <p>(4.5)</p>
             
             
              </div>  
              <p>$70 / Night</p>
              </div>
             <div>
             <h2>Mountain View<br/>
              <span>Cotage, Australia</span>
             </h2>
             <p style={{fontSize:"14px",justifyContent:"center",display:"flex",gap:"10px",alignItems:"center"}}><FaLocationArrow/>Lorem ipsum dolor</p>
            
              <p style={{fontSize:"12px",gap:"10px",display:"flex"}}>2 guest <span>1 bedroom</span> 2 bathroom</p>
               <button style={{width:"150px"}}>Book now</button>
             </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
