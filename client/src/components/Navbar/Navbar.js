import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
function NavBar() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span><b>Hanusai Dental</b> </span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <FaUserDoctor />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/rev"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Review
              </NavLink>
            </li>
            <li className="nav-item">

            <a className="nav-links"  href={`tel:${+919704296092}`}>
              Call Us
            </a>

            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                < FaTimes />{" "}
              </span>
            ) : (
              <span className="icon">
                <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;