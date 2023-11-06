import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-white">
        <div className="container-fluid p-lg-3">
          <Link className="navbar-brand fw-bolder fs-4" to="/home">
            List <span style={{ color: "#6C63FF" }}>Race</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse lg:d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold active"
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link" to="/howItWorks">
                  HOW IT WORKS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/explore">
                  EXPLORE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="#">
                  REVIEW
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/blog">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="logIn">
                  LOG IN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
