import "./destination.css";
import imageTwo from "../../images/kigali.jpg";

export default function Destination() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
        gap: "20px",
        overflowX:"hidden"
      }}
    >
      <h2 style={{ borderBottom: "4px solid rgb(58, 176, 255)" }}>
        YOUR DESTINATION
      </h2>
      <p style={{ maxwidth: "600px", opacity: "0.6" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic asperiores
        voluptate eos voluptatem consectetur. Ea, molestias qui at ut eveniet
      </p>
      <div style={{ display: "flex", gap: "20px", color: "white" }}>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"
          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>Rwanda</h3>
          <p style={{ paddingLeft: "10px" }}>Africa</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"

          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>Dubai</h3>
          <p style={{ paddingLeft: "10px" }}>Asia</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"

          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>New york</h3>
          <p style={{ paddingLeft: "10px" }}>America</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"

          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>Paris</h3>
          <p style={{ paddingLeft: "10px" }}>Europe</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"

          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>Egypt</h3>
          <p style={{ paddingLeft: "10px" }}>Africa</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"

          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>London</h3>
          <p style={{ paddingLeft: "10px" }}>Europe</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${imageTwo})`,
            width: "250px",
            height: "350px",
            textAlign: "left",
            animation:"slide 20s linear infinite"

          }}
        >
          <h3 style={{ paddingLeft: "10px" }}>Qatar</h3>
          <p style={{ paddingLeft: "10px" }}>Asia</p>
        </div>

      </div>
    </div>
  );
}
