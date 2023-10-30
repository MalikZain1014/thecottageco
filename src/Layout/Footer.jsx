import { Link } from "react-router-dom";
import FLogo from "../Assets/FLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section
          style={{
            background: "#314528",
            color: "white",
            paddingTop: "10px",
          }}
        >
          <div
            className="text-center text-md-start container"
            style={{ marginTop: "60px", marginBottom: "20px" }}
          >
            <div className="row">
              {/* Logo and Contact Info */}
              <div className="col-12 col-md-4 col-lg-3 col-xl-3 mb-4 ">
                <h6 className="text-uppercase fw-bold  ">
                  <img
                    src={FLogo}
                    alt="Footer Img"
                    style={{
                      width: "70%",
                      height: "auto",
                      paddingBottom: "20px",
                    }}
                  />
                </h6>
                <p>
                  <Link
                    to="#"
                    className="text-reset"
                    style={{ fontSize: "18px" }}
                  >
                    admin@thecottageco.com
                  </Link>
                </p>
              </div>

              {/* Navigation Links (Always visible) */}
              <div className="col-7 col-sm-2 col-md-4 lg-none d-none col-lg-2 col-xl-2 mx-auto mb-4 d-lg-block">
                <p>
                  <Link to="#" className="text-reset">
                    Hoodies
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    T-Shirts
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Youth
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-reset">
                    Champion
                  </Link>
                </p>
              </div>

              {/* Additional links for medium and small screens */}
              <div className="col-7 col-md-4 lg-none d-none col-lg-2 col-xl-2 mx-auto mb-4 d-lg-block">
                <p className="">
                  <Link to="#" className="text-reset">
                    Canada
                  </Link>
                </p>
                <p className=" ">
                  <Link to="#" className="text-reset">
                    Beach
                  </Link>
                </p>
                <p className="">
                  <Link to="#" className="text-reset">
                    Grand Bend
                  </Link>
                </p>
                <p className="">
                  <Link to="#" className="text-reset">
                    Fawn Island
                  </Link>
                </p>
              </div>

              {/* Newsletter (Always visible) */}
              <div className="text-reset col-md-auto col-lg-4 col-xl-4  mb-md-0">
                <strong style={{ fontSize: "30px" }}>
                  <i className=" text-secondary"></i> Newsletter
                </strong>
                <p>
                  <i className=" text-secondary"></i>
                  <span>No annoying emails, just discount codes.</span>
                </p>
                <div
                  className="text-reset input-group"
                  style={{ textDecoration: "none", direction: "none" }}
                >
                  <input
                    type="email"
                    className="text-reset form-control"
                    placeholder="Email Address"
                    style={{ textDecoration: "none" }}
                  />
                  <span
                    className="input-group-btn"
                    style={{
                      backgroundColor: "#f1ece1",
                      borderTopRightRadius: "7px",
                      borderBottomRightRadius: "7px",
                      textDecoration: "none",
                    }}
                  >
                    <button
                      className="btn"
                      type="submit"
                      style={{
                        fontSize: "20px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        textDecoration: "none",
                        direction: "none",
                      }}
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div
            style={{
              backgroundColor: "#1a2515",
              color: "white",
              paddingBottom: "1px",
            }}
          >
            <p
              className="container"
              style={{
                textAlign: "left",
                // paddingLeft: "120px",
                paddingTop: "15px",
              }}
            >
              © 2023 The Cottage Co | Ontario Cottage Apparel & Fashion for
              Cottage Owners. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
