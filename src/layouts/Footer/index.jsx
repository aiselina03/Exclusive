import React from "react";
import "./style.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot1">
          <div className="exclusive">
            <h3>Exclusive</h3>
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>
            <div className="send">
              <input type="text" placeholder="Enter your email" />
              <i class="fa-regular fa-paper-plane-top"></i>
            </div>
          </div>
          <div className="support">
            <h3>Support</h3>
            <p>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="account">
            <h3>Account</h3>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="quickLink">
            <h3>Quick Link</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="downloadApp">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <img
              src="https://printplace.files.wordpress.com/2012/02/sample.png"
              alt=""
              className="playStore"
            />
            <img
              src="https://www.pngkit.com/png/full/435-4350684_available-on-google-play-png-app-store-play.png"
              alt=""
              className="qrCode"
            />
            <div className="icon">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="foot2">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
