import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

export default function FeatureSection({ items, Header }) {
  return (
    <div className="fluid" style={{ margin: "20px", marginBottom: "90px" }}>
      <h2
        className="text-2xl p-4 font-weight-bold text-center mt-4 text-gray-200 my-4"
        style={{
          fontSize: "47.579px",
          height: "120px",
          fontFamily: " -apple-system, segoi ui, Galica",
        }}
      >
        {Header}
      </h2>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4"
        style={{
          justifyContent: "center",
          padding: "30px",
        }}
      >
        {items.map((product) => (
          <div
            key={product.id}
            className="col container "
            style={{
              display: "fixed",
              flexDirection: "column",
            }}
          >
            <div className="container">
              <Link
                to={`/singleproduct/${product.category}/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="zoom-container" style={{ marginTop: "20px" }}>
                  <img
                    src={product.image}
                    alt={product.category}
                    className="card-img-top zoom-image"
                    style={{ height: "auto" }}
                  />
                </div>
                <div
                  className="product-info "
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "0px",
                    position: "",
                    display: "",
                  }}
                >
                  <div
                    style={{
                      color: "rgb(32, 42, 31)",

                      textDecorationThickness: "auto",
                      fontSize: "25.579px",
                      fontWeight: 0,

                      height: "140px", // Set a fixed height for the title and price container

                      overflow: "hidden",
                    }}
                  >
                    <h1
                      className="font-weight-bold product-title"
                      style={{
                        color: "rgb(32, 42, 31)",
                        fontSize: "21.918px",
                        fontFamily: " -apple-system, segoi ui, Galica",
                        textDecorationThickness: "auto",
                        fontWeight: 0,
                      }}
                    >
                      {product.title}
                    </h1>

                    <p
                      className="not-bold"
                      style={{
                        color: "rgba(32,42,31,.8)",
                        fontSize: "20px",
                        fontFamily: " -apple-system, segoi ui, Galica",
                        fontWeight: "normal",
                      }}
                    >
                      ${product.price}
                    </p>
                  </div>
                </div>
                <div className="color-options" style={{ position: "" }}>
                  {product.color.map((color, id) => (
                    <div
                      key={id}
                      style={{
                        width: "19px",
                        height: "19px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "inline-block",
                        marginRight: "6px",

                        backgroundColor: color,
                        position: "relative",
                      }}
                      title={color}
                    >
                      <div
                        style={{
                          visibility: "hidden",
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          color: color,
                          textAlign: "center",
                          borderRadius: "4px",
                          padding: "4px 8px",
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",

                          whiteSpace: "nowrap",
                          opacity: 0,
                          pointerEvents: "none",
                          transition: "opacity 0.002s ease-in",
                        }}
                        className="tooltip"
                      >
                        {color}
                      </div>
                    </div>
                  ))}
                  <span
                    style={{
                      color: "rgba(32, 42, 31, 0.8)",
                      fontWeight: "normal",
                      fontSize: "13px",
                      fontFamily: "galica",
                      justifyContent: "center",
                      textAlign: "center",
                      paddingBottom: "2px",
                    }}
                  >
                    + more color!
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
