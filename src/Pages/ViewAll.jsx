import React from "react";
import Title from "../Components/Title";
import { FullCrtData } from "../Assets/Data";
import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <>
      <div>
        <Title title={"Cottage Communities"} />
      </div>

      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-2   row-cols-lg-3  g-0"
        style={{
          justifyContent: "center",
          overflow: "hidden",
          marginTop: "100px",
          marginBottom: "30px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        {FullCrtData.map((product) => (
          <div
            key={product.id}
            className="col mb-3 container"
            style={{ padding: "20px" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className="image-container"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "300px",
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
                    scale: "120%",
                    objectFit: "cover",
                    borderRadius: "0px",
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
                      top: "0",
                      bottom: "0",

                      fontSize: "calc(2.50rem + 1.23vw)",
                      fontFamily: " -apple-system, segoi ui, Galica",
                      display: "flex",
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
    </>
  );
};

export default ViewAll;
