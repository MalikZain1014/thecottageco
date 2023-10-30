import { Link } from "react-router-dom";

const PageNavigation = ({ title, name }) => {
  return (
    <div
      style={{
        color: "rgb(118, 118, 118)",
        textDecoration: "none",
      }}
    >
      <Link
        style={{
          color: "rgb(118, 118, 118)",
          textDecoration: "none",
        }}
        to="/"
      >
        Home
      </Link>
      &nbsp;/&nbsp;
      <Link
        style={{
          textDecoration: "none",
          color: "rgb(118, 118, 118)",
        }}
        to="/shopall"
      >
        Shop
      </Link>
      {title && name && (
        <span>
          &nbsp;/&nbsp;{title}&nbsp;/&nbsp;{name}
        </span>
      )}
    </div>
  );
};

export default PageNavigation;
    