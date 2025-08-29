import React, { useState } from "react";
import { Link } from "react-router-dom";

function Homenav() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (name) => {
    setActiveButton(name);
  };

  const getLinkStyle = (name) => ({
    color: activeButton === name ? "#141E46" : "#141E46",
    fontWeight: "900",
    cursor: "pointer",
    position: "relative", // needed for pseudo-elements
    display: "inline-block", // keeps corners aligned
    padding: "6px 10px",
  });

  return (
    <nav
      className="navbar navbar-expand-lg p-4"
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white" to="/">
          <img src="./logo-1.png" style={{ width: "150px" }} alt="Logo" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23141E46' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
            }}
          />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mx-auto mb-2 mb-lg-0"
            style={{
              textAlign: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {/* About */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={getLinkStyle("about")}
                onClick={() => handleClick("about")}
              >
                <span>About ▾</span>
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutnri"
                    style={getLinkStyle("aboutnri")}
                    onClick={() => handleClick("aboutnri")}
                  >
                    <span>About NRIIT</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutpb"
                    style={getLinkStyle("aboutpb")}
                    onClick={() => handleClick("aboutpb")}
                  >
                    <span>About PBSC</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutcon"
                    style={getLinkStyle("aboutcon")}
                    onClick={() => handleClick("aboutcon")}
                  >
                    <span>About Conference</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/aboutvij"
                    style={getLinkStyle("aboutvij")}
                    onClick={() => handleClick("aboutvij")}
                  >
                    <span>About Vijayawada</span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Conference Info */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={getLinkStyle("conference")}
                onClick={() => handleClick("conference")}
              >
                <span>Conference Info ▾</span>
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/location"
                    style={getLinkStyle("location")}
                    onClick={() => handleClick("location")}
                  >
                    <span>Location</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/conference"
                    style={getLinkStyle("committee")}
                    onClick={() => handleClick("committee")}
                  >
                    <span>Conference Committee</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/award"
                    style={getLinkStyle("award")}
                    onClick={() => handleClick("award")}
                  >
                    <span>Awards</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/gallery"
                    style={getLinkStyle("gallery")}
                    onClick={() => handleClick("gallery")}
                  >
                    <span>Gallery</span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Submissions */}
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={getLinkStyle("submissions")}
                onClick={() => handleClick("submissions")}
              >
                <span>Submissions ▾</span>
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/authorguidelines"
                    style={getLinkStyle("guidelines")}
                    onClick={() => handleClick("guidelines")}
                  >
                    <span>Author Guidelines</span>
                  </Link>
                </li>
              </ul>
            </li>
             {/* Registration */}
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="/registration"
                style={getLinkStyle("registration")}
                onClick={() => handleClick("registration")}
              >
                <span>Registration</span>
              </Link>
            </li>

            {/* Accommodation */}
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="/accomidation"
                style={getLinkStyle("registration")}
                onClick={() => handleClick("registration")}
              >
                <span>Accommodation</span>
              </Link>
            </li>

           

            {/* Contact */}
            <li className="nav-item me-4">
              <Link
                className="nav-link"
                to="/contact"
                style={getLinkStyle("contact")}
                onClick={() => handleClick("contact")}
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Homenav;
