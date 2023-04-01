import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light navbar-fixed-top navbarcustom  fixed-top"
          style={{ backgroundColor: "white" }}
          data-aos="slide-down"
        >
          <div className="container-fluid">
            <div className="logo">
              {/* <img
                alt="logo"
                className="logoimage"
                src="https://cdn-icons-png.flaticon.com/512/876/876019.png"
              /> */}
            </div>
            <button
              className="navbar-toggler"
              id="navbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" id="mybtn" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link hover-1" href="#designs">
                    Designs
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link hover-1" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
