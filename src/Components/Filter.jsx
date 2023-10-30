import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Css/Filter.css";
import del from "../Assets/delete.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Filter = () => {
  const [selectedLabel1, setSelectedLabel1] = useState(null);
  const [selectedLabel2, setSelectedLabel2] = useState(null);
  const [showYouthChildren, setShowYouthChildren] = useState(false);

  const handleLabelClick = (label, form) => {
    if (form === 1) {
      setSelectedLabel1(label);
    } else if (form === 2) {
      setSelectedLabel2(label);
    }
  };

  const handleImageClick = (e, form) => {
    e.stopPropagation();
    if (form === 1) {
      setSelectedLabel1(null);
    } else if (form === 2) {
      setSelectedLabel2(null);
    }
  };

  const handleYouthToggle = () => {
    setShowYouthChildren(!showYouthChildren);
  };

  const labels = [
    "Fawn Island",
    "Grand Bend",
    "Grand Cove",
    "Long Point",
    "Port Stanley",
    "Wasaga Beach",
  ];
  const labelss = [
    "Accessories",
    "Crewnecks",
    "Hoodies",
    "Long Sleeve",
    "T-Shirts",
    "Youth",
  ];
  const youthChildren = ["Hoodies", "T-Shirts"];
  const labelsss = [
    "Beach",
    "Camping",
    "Canada",
    "Champion",
    "Clubs",
    "Drinking",
    "Fishing",
    "Graphic Art",
    "Minimal",
    "Nautical",
    "Vibey",
  ];

  const handleReset = () => {
    setSelectedLabel1(null);
    setSelectedLabel2(null);
    const checkboxes = document.querySelectorAll(".option-input.checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <div className="mt-4" style={{ marginLeft: "65px", fontSize: "20px" }}>
      <div className="row">
        <div className="" style={{ zIndex: "0" }}>
          <h4>Filters</h4>
          <div className="d-flex">
            <div className="wrapper">
              <div className="slider"></div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="10000"
                  value="7500"
                  step="100"
                />
                <h6>
                  Price: <span className="min-value">$14</span> -{" "}
                  <span className="max-value">$65</span>
                </h6>
              </div>
            </div>
          </div>
          {/* Form 1 */}
          <form>
            <h4>
              <b>Communities</b>
            </h4>
            <div className="px">
              {labels.map((label, index) => (
                <label key={index} onClick={() => handleLabelClick(label, 1)}>
                  <input
                    type="radio"
                    className="option-input radio"
                    name="example1"
                    checked={label === selectedLabel1}
                    onChange={() => {}}
                  />
                  <span
                    style={{
                      fontWeight: label === selectedLabel1 ? "bold" : "normal",
                    }}
                  >
                    {label}
                  </span>
                  {label === selectedLabel1 && (
                    <Link to="">
                      <img
                        src={del}
                        alt="close"
                        style={{
                          marginLeft: "10px",
                          width: "20px",
                          height: "auto",
                          display:
                            label === selectedLabel1 ? "inline-block" : "none",
                        }}
                        onClick={(e) => handleImageClick(e, 1)}
                      />
                    </Link>
                  )}
                </label>
              ))}
            </div>
          </form>
          {/* Form 2 */}
          <form>
            <h4>
              <b>Product categories</b>
            </h4>
            <div className="px">
              {labelss.map((label, index) => (
                <label key={index} onClick={() => handleLabelClick(label, 2)}>
                  <input
                    type="radio"
                    className="option-input radio"
                    name="example2"
                    checked={label === selectedLabel2}
                    onChange={() => {}}
                  />
                  <span
                    style={{
                      fontWeight: label === selectedLabel2 ? "bold" : "normal",
                    }}
                  >
                    {label}
                  </span>
                  {label === selectedLabel2 && (
                    <Link to="">
                      <img
                        src={del}
                        alt="close"
                        style={{
                          marginLeft: "10px",
                          width: "20px",
                          height: "auto",
                          display:
                            label === selectedLabel2 ? "inline-block" : "none",
                        }}
                        onClick={(e) => handleImageClick(e, 2)}
                      />
                    </Link>
                  )}
                  {label === "Youth" && (
                    <span className="m-2">
                      <Link
                        onClick={handleYouthToggle}
                        style={{ color: "black" }}
                      >
                        {showYouthChildren ? (
                          <AiOutlineMinus />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </Link>
                      {showYouthChildren && (
                        <div>
                          {youthChildren.map((childLabel, index) => (
                            <label key={index} style={{ marginLeft: "40px" }}>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="youthChildren"
                              />
                              <span>{childLabel}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </form>
          {/* Form 3 */}
          <form>
            <h4>
              <b>Product tags</b>
            </h4>
            {labelsss.map((label, index) => (
              <div key={index}>
                <label>
                  <input type="checkbox" className="option-input checkbox" />
                  {label}
                </label>
              </div>
            ))}
          </form>
          <Button
            onClick={handleReset}
            style={{
              color: "black",
              backgroundColor: "#dde0d8",
              border: "none",
              marginTop: "20px",
            }}
          >
            <strong>Reset</strong>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Filter;
