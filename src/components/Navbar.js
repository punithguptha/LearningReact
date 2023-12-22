import React from "react";
import PropTypes from "prop-types";
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" exact to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            {/* exact keyword is used to mention react to route for only exact matches..If not specified react also routes for partial matches to this view like /about/home */}
              <Link className="nav-link" exact to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch mx-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {/* {`${props.mode==="light"?"Enable":"Disable"} Dark Mode`} */}
              Toggle Dark Mode
            </label>
          </div>
          <form className="d-flex" data-bs-theme={props.mode === "light" ? "light" : "dark"} role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //It means that this should be sent and if not sent then it throws an error
  aboutText: PropTypes.string, //If something other than string is returned then it throws an error
  toggleMode: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired
};

//If props arent sent, we use these as default
Navbar.defaultProps = {
  aboutText: "Default About Text",
  mode: "light",
};
