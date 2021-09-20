import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <h4 className="main-footer_heading">GrabOne</h4>
            <a className="main-footer_link " href="#">
              GrabOne Guarantee
            </a>
            <a
              className="main-footer_link footer-link-desktop"
              href="https://www.grabone.co.nz/contact-us"
            >
              Contact Us
            </a>
            <a
              className="main-footer_link footer-link-mobile"
              href="https://mobile.grabone.co.nz/contact-us"
            >
              Contact Us
            </a>
            <a className="main-footer_link " href="/about">
              About Us
            </a>
            <a className="main-footer_link " href="/terms-and-conditions">
              Terms &amp; Returns
            </a>
            <a
              className="main-footer_link "
              href="http://newblog.grabone.co.nz"
              target="_blank"
            >
              Blog
            </a>
            <a className="main-footer_link " href="/gift-card">
              Gift Cards
            </a>
          </Col>
          <Col>
            {" "}
            <h4 className="main-footer_heading">GrabOne</h4>
            <a className="main-footer_link " href="/guarantee">
              GrabOne Guarantee
            </a>
            <a
              className="main-footer_link footer-link-desktop"
              href="https://www.grabone.co.nz/contact-us"
            >
              Contact Us
            </a>
            <a
              className="main-footer_link footer-link-mobile"
              href="https://mobile.grabone.co.nz/contact-us"
            >
              Contact Us
            </a>
          </Col>
          <Col>
            <h4 className="main-footer_heading">GrabOne</h4>
            <a className="main-footer_link " href="/guarantee">
              GrabOne Guarantee
            </a>
            <a
              className="main-footer_link footer-link-desktop"
              href="https://www.grabone.co.nz/contact-us"
            >
              Contact Us
            </a>
            <a
              className="main-footer_link footer-link-mobile"
              href="https://mobile.grabone.co.nz/contact-us"
            >
              Contact Us
            </a>
          </Col>
          <Col></Col>
        </Row>
        <Row className="text-center ">
          <Col>
            <div className="main-footer_copyright">
              <a
                href="/privacy-policy"
                className="main-footer__copyright-content"
              >
                Privacy Policy
              </a>
              <span className="main-footer_copyright-content">
                © 2021 GrabOne Limited
              </span>
              <a href="https://www.nzme.co.nz" target="_blank" rel="noopener">
                <img src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
