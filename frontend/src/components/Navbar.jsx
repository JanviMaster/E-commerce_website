import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import '../assets/logo.svg';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark  fixed-top">
  <div className="container-fluid">
    <div>
    <img 
      src="/vite.svg"
      alt="Logo" 
      width="30" 
      height="24" 
      className="d-inline-block align-text-top">
    </img>
    <Link className="navbar-brand " to="/">
        Smart Shop
    </Link>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
           Smart Shop
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/explore">
              Explore
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact us
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </li>*/}
        </ul> 
        
      </div>
    </div>
  </div>
</nav>


    </div>
  );
};

export default Navbar;
