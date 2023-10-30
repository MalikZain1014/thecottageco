import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { Button } from "react-bootstrap";

const CottageCommunity = ({ items }) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="m-4" style={{ position: "relative", overflow: "hidden" }}>
      <div className=" my-4 d-flex flex-column flex-md-row justify-content-between">
        <h1
          style={{
            color: "#314528",
            fontWeight: "bolder",
            fontSize: "calc(1.90rem + 0.9vw)",
            fontFamily: "-apple-system, segoi ui, Galica",
          }}

        >
          Cottage Communities
        </h1>
        <Link to="/viewall" style={{ textDecoration: "none" }}>
          <Button
            variant="#314528"
            className="mb-2  mb-md-0 me-md-4 w-100 w-md-auto"
            style={{
              fontSize: "calc(0.63rem + 0.53vw)",
              fontFamily: "-apple-system, segoi ui, Galica",
              border: "1px solid #314528",
              background: isHovered ? "#314528" : "transparent",
              color: isHovered ? "white" : "#314528",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View All
          </Button>
        </Link>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        {items.map((product) => (
          <div key={product.id} className="col mb-4 container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className="image-container"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "240px",
                  borderRadius: "25px",
                }}
              >
                <img
                  src={product.image}
                  alt=""
                  className="card-img-top zoom-image"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "0px",
                    scale: "120%",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    display: "flex",
                    background:
                      "linear-gradient(130deg, rgba(0, 0, 0, 0.6) 50%, transparent 100%)",
                    color: "rgb(241, 236, 225)",

                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "calc(2.50rem + 1.23vw)",
                      fontFamily: " -apple-system, segoi ui, Galica",
                      padding: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {product.title}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CottageCommunity;
