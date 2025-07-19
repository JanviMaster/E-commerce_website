import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Brand Section */}
          <div className="col-md-3 mb-4">
            <img 
              src="/vite.svg"
              alt="Logo" 
              width="30" 
              height="24" 
              className="d d-inline-block align-text-top"
            />
            <h5 className="d text-uppercase mt-2">Smart shop</h5>
            <p className='d'>Your one-stop shop for everything you love!</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/shop" className="text-light text-decoration-none">Shop</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase">Policies</h6>
            <ul className="list-unstyled">
              <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/return" className="text-light text-decoration-none">Return Policy</Link></li>
              <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase">Follow Us</h6>
            <div className="d-flex gap-3">
              <Link to="#" className="text-light fs-5"><i className="bi bi-facebook"></i></Link>
              <Link to="#" className="text-light fs-5"><i className="bi bi-instagram"></i></Link>
              <Link to="#" className="text-light fs-5"><i className="bi bi-twitter"></i></Link>
              <Link to="#" className="text-light fs-5"><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>

        <hr className="custom-border" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Smart Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
