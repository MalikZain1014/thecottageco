import React from "react";

const Title = (props) => {
  return (
    <div
      style={{
        // marginTop: "120px",
        backgroundColor: "#314528",
        height: "200px",
        width: "100%",
        color: "white",
        fontSize: "60px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingLeft: "160px",
        overflowX: "hidden",

        fontFamily: " -apple-system, segoi ui, Galica",
      }}
    >
      {props.title}
    </div>
  );
};

export default Title;
