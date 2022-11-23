import { useState } from "react";

// Ye nevbar He haha

export default function (props) {
  const [bgcolor, setbgcolor] = useState("white");

  let function_red = () => {
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "#750000";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };

  let function_green = () => {
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "#007500";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };
  let function_blue = () => {
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "#0000A3";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} sticky-top`}>
      <div className="container-fluid">
        <a
          className={`navbar-brand ${
            props.mode === "dark" ? "text-light" : "text-dark"
          }`}
          href="#"
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active ${
                  props.mode === "dark" ? "text-light" : "text-dark"
                }`}
                aria-current="page"
                href="#"
              >
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  props.mode === "dark" ? "text-light" : "text-dark"
                }`}
                href="#"
              >
                About
              </a>
            </li>
          </ul>

          <div id="div_color">
            <div
              className="div_color_name"
              id="div_red"
              onClick={function_red}
            ></div>
            <div
              className="div_color_name"
              id="div_green"
              onClick={function_green}
            ></div>
            <div
              className="div_color_name"
              id="div_blue"
              onClick={function_blue}
            ></div>
          </div>

          <div className="form-check form-switch">
            <input
              onChange={props.togglefunction}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            {
              <label
                className={`form-check-label mx-2   text-${
                  props.mode === "dark" ? "light" : "dark"
                }   `}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btnname}
              </label>
            }
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
