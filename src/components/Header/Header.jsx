import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mt-3">
        <div className="container ">
          <div>
            <a className="navbar-brand fs-2 fw-bolder" href="#">
              Learning Cafe
            </a>
          </div>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-md-end gap-3"
            id="navbarNav"
          >
            <div>
              <img
                src="./profile.png"
                className="card-img-top rounded-circle"
                alt="Profile"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <hr />
      </div>
    </>
  );
};

export default Header;
