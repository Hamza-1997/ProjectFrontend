import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Meeting newsletter to receive our best deals
          <br />
          "It makes leading and coordinate meeting easy"
        </p>
        <p className="footer-subscription-text">
          {" "}
          You can subscribe at any time{" "}
        </p>
        <div className="input-areas">
          <Form>
            <InputGroup>
              <Form.Control
                className="border-success"
                placeholder="Enter Your Email"
                type="email"
                name="email"
              />
              <InputGroup.Append>
                <Button variant="outline-success">Subscribe</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            {/*<Link to="/">Investors</Link> */}
            <Link to="/">Terms of Services</Link>
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            {/* <Link to="/">Sponsorships</Link> */}
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Product</h2>
            <Link to="/">Features</Link>
            <Link to="/">Meeting Polls</Link>
            <Link to="/">Support</Link>
            <Link to="/">Terms of use</Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linked In</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link style={{ color: "lightslategray" }} className="social-logo">
              #PlanMeet&Log
            </Link>
          </div>
          <small className="website-rights">PlanMeet&Log 2020</small>
          <div className="social-icons">
            <Link
              style={{ color: "blue" }}
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>

            <Link
              style={{ color: "orange" }}
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>

            <Link
              style={{ color: "lightskyblue" }}
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>

            <Link
              style={{ color: "red" }}
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>

            <Link
              style={{ color: "lightsteelblue" }}
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
