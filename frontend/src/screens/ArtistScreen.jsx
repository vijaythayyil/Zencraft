import { Row, Col } from "react-bootstrap";
import image from "./artistimg.jpg";
import bannerimg from "./artcover.jpg";

const ArtistScreen = () => {
  const artistName = "John Doe";
  const aboutArtist = "This is a brief description or biography of the artist.";

  return (
    <div>
      <div
        className="bannerimg"
        style={{
          position: "relative",
          textAlign: "center",
          width: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <img
          src={image}
          alt="banner"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover", // Adjusted to objectFit for proper cover effect
          }}
        />
        <img
          src={image}
          alt="artist"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            position: "absolute", // Positioning absolutely within the relative parent
            left: "50%", // Center horizontally
            top: "100%", // Align to the bottom of the parent
            transform: "translate(-50%, -50%)", // Centering adjustment
            border: "4px solid white", // Optional: Adding a border to distinguish from the banner
            objectFit: "cover", // Ensures the image covers the area without stretching
          }}
        />
      </div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>{artistName}</h1>{" "}
      {/* Adjusted margin to accommodate the overlapping image */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          width: "100%",
          padding: "10px",
        }}
      >
        <button
          style={{
            width: "20%", // Wide button
            padding: "10px",
            marginRight: "20px", // Added right margin for spacing between buttons
            // Space above and below the button
            backgroundColor: "green", // Green color for support
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Support
        </button>
        <button
          style={{
            width: "20%", // Wide button
            padding: "10px",
            marginLeft: "20px",
            // Space above and below the button
            backgroundColor: "#000000", // Bootstrap primary color for example
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Share
        </button>
      </div>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>{aboutArtist}</p>
      </div>
      <h1>Latest Products</h1>
    </div>
  );
};

export default ArtistScreen;
