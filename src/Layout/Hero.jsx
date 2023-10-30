import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import H_img from "../Assets/Hero.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        style={{
          background: "#314528",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col xs={12} md={6}>
            <div
              className="image-container d-md-none" // For screens below md, set a default height
              style={{
                width: "100%",
                height: "300px", // Set a default height for smaller screens
              }}
            >
              <img
                src={H_img}
                alt="Home"
                className="img-fluid"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "0px",
                  transition: "transform 0.3s",
                }}
              />
            </div>
            <div
              className="image-container d-none d-md-block" // For screens at least md, make it full height
              style={{
                width: "100%",
                height: "600px",
              }}
            >
              <img
                src={H_img}
                alt="Home"
                className="img-fluid"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "0px",
                  transition: "transform 0.3s",
                }}
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <div className="my-4 text-center text-md-start">
              <h1
                className="mx-3 display-4 text-white"
                style={{
                  fontSize: "calc(2.5rem + 2.5vw)",
                  fontFamily: " -apple-system, segoi ui, Galica",
                }}
              >
                Life is better at the cottage.
              </h1>

              <div className="m-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
                <Link to="/shopall" className="">
                  <Button
                    variant="light"
                    className="mb-2  mb-md-0 me-md-1 w-100 w-md-auto"
                    style={{
                      background: isHovered ? "transparent" : "",
                      color: isHovered ? "white" : "",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Shop All
                  </Button>
                </Link>

                <Link to="/viewall" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outline-light"
                    className="mb-2 mb-md-0 mx-md-2 me-md-3 w-100 w-md-auto"
                  >
                    Shop by Community
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
