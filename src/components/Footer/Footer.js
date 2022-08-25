import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-clean">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 item">
            <h3>Links</h3>
            <ul className="footer-list" >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/mission">About</a>
              </li>
              <li>
                <a href="/cancer-research">Resources</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            
          </div>
          {/* <div className="col-md-2 item">
     
          </div> */}
          <div className="col-md-3 item">
          <h3>Contact</h3>

            <ul className="footer-list-contact-info" >
              <li>Address: <a href="https://www.google.com/maps/dir//527+W+125th+St,+New+York,+NY+10027/@40.8146442,-73.9918835,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2f66a3419fa35:0x53fc7d1a368c718f!2m2!1d-73.9568642!2d40.8145845!3e0">527 W 125th St, New York, NY 10027 </a></li>
              <li>Phone: (888) 682-5221 </li>
              <li>Email: <a href="mailto: help@ovalab.com" >help@ovalab.com</a></li>
            </ul>
          </div>
          <div className="col-md-6 item social">
            <div id="footer-logo-container">
                <img id="footer-logo" src="assets/img/ovalab-logo-footer.png" />
            </div>

            <p className="copyright">
              OvaLab Powered By UniDX © {new Date().getFullYear()}
            </p>
            <div className="item social " >
            <a href="https://www.facebook.com/OvalabHealth">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="https://twitter.com/ovalab_by_unidx">
              <i className="icon ion-social-twitter"></i>
            </a>

            <a href="https://www.instagram.com/ovalabdx/">
              <i className="icon ion-social-instagram"></i>
            </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
