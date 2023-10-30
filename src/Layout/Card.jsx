import React from "react";

import bgimage from "../Assets/2-min.png";

function CottageCard() {
  return (
    <div className="container">
      <div
        className="text-center"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%", // Adjust the height as needed
          borderRadius: "30px",
        }}
      >
        <img
          src={bgimage}
          alt="ngimg"
          style={{
            height: "130%",
            width: "130%",
            objectFit: "cover", // Maintain aspect ratio
            borderRadius: "0px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // White background with 70% opacity
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: "4vw", marginBottom: "10px" }}>
            Cottage fashion, proudly
          </div>
          <div style={{ fontSize: "4vw", marginBottom: "10px" }}>
            Canadian made.
          </div>
          <div style={{ fontSize: "1.3vw", marginBottom: "20px" }}>
            All of our products are designed, printed and shipped from Canada.
          </div>
          <button
            style={{
              backgroundColor: "#f1ece1",
              color: "#202a1f",
              border: "#f1ece1",
              fontSize: "2.5vw",
              padding: "10px 20px",
              borderRadius: "10px", // Adjust padding for responsive button size
            }}
          >
            Browse Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default CottageCard;
