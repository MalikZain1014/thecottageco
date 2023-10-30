import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/CCG.png";
import { IoSearch } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="text-center text-lg-start bg-white text-muted"
        style={{
          background: "#314528",
          overflow: "hidden",
          // position: "sticky",
          // width: "100%",
          // top: "0px",
          // zIndex: "1",
        }}
      >
        <div
          className="text-center p-2"
          style={{
            backgroundColor: "#314528",
            color: "#f1ece1",
            position: "sticky",
            top: "0px",
            width: "100%",

            zIndex: "100",
          }}
        >
          <p
            className=" text-white text-center mb-0"
            style={{
              backgroundColor: "#314528",
              color: "#f1ece1",
              fontFamily: "Galica, sans-serif",
              fontWeight: "-moz-initial",
              fontSize: "16px",
            }}
          >
            Welcome to The Cottage Co! We're offering free shipping on orders
            over $200 all summer long. Happy Shopping!
          </p>
        </div>
      </nav>

      <Navbar
        expand="lg"
        className="navbar navbar-light"
        style={{
          position: "sticky",
          width: "100%",
          top: "0px",
          zIndex: "100",
          backgroundColor: "#f1ece1",
        }}
      >
        <div
          style={{
            display: "inline-block",
            transform: "rotate(90deg)",
            marginLeft: "60px",
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "94px", height: "auto", padding: "6px" }}
            />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 ms-auto "
            style={{
              maxHeight: "100px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
            navbarScroll
          >
            <Link
              to="/shopall"
              className="mt-2"
              style={{
                color: "#8c8c8c",
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
            >
              Shop All
            </Link>

            <NavDropdown
              title="Cottage Communities"
              id="navbarScrollingDropdown"
              style={{
                color: "#8c8c8c",
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
            >
              <div className="pt-3 container">
                <Link
                  to="/grandbend"
                  style={{ color: "#1e1e1e", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#e5e4e2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  Grand Bend
                </Link>
              </div>
              <div className="pt-4 container">
                <Link
                  to="/fawnisland"
                  style={{ color: "#1e1e1e", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#e5e4e2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  Fawn Island
                </Link>
              </div>
              <div className="pt-4 container">
                <Link
                  to="/wasagabeach"
                  style={{ color: "#1e1e1e", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#e5e4e2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  Wasaga Beach
                </Link>
              </div>
              <div className="pt-4 pb-2 container">
                <Link
                  to="/viewall"
                  style={{ color: "#1e1e1e", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#e5e4e2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  View All
                </Link>
              </div>
            </NavDropdown>
            <Link
              to="/hoodies"
              className="mt-2"
              style={{
                color: "#8c8c8c",
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
            >
              Hoodies
            </Link>
            <Link
              to="/tshirts"
              className="mt-2"
              style={{
                color: "#8c8c8c",
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
            >
              T-Shirts
            </Link>
            <NavDropdown
              title="Youth"
              id="navbarScrollingDropdown"
              style={{
                color: "#8c8c8c",
                textDecoration: "none",
                transition: "color 0.3s",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
            >
              <div className="pt-3 container">
                <Link
                  to="/youthtshirts"
                  style={{ color: "#1e1e1e", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#e5e4e2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  T-Shirts
                </Link>
              </div>
              <div className="pt-4 pb-2 container">
                <Link
                  to="/youthhoodies"
                  style={{ color: "#1e1e1e", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#e5e4e2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  Hoodies
                </Link>
              </div>
            </NavDropdown>
          </Nav>
          <div className="d-flex" style={{ marginRight: "70px" }}>
            <IoSearch className="m-2 " style={{ fontSize: "20px" }} />
            <IoLogoInstagram className="m-2" style={{ fontSize: "20px" }} />
            <IoCart className="m-2" style={{ fontSize: "20px" }} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
