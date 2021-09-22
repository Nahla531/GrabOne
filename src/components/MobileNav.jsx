import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Container, Col, Row } from "react-bootstrap";
const MobileNav = () => {
  return (
    <Container id="mobile-nav" fluid>
      <Row>
        <Col>
          <a href="#" className="mobile-nav-link">
            <div style={{ display: "inline-block" }}>
              <Icon.House></Icon.House>
            </div>
            <span>Home</span>
          </a>
        </Col>
        <Col>
          <a href="#" className="mobile-nav-link">
            <div style={{ display: "inline-block" }}>
              <Icon.Search></Icon.Search>
            </div>
            <span>Search</span>
          </a>
        </Col>
        <Col>
          <a href="#" className="mobile-nav-link">
            <div style={{ display: "inline-block" }}>
              <Icon.WindowSidebar></Icon.WindowSidebar>
            </div>
            <span>Categories</span>
          </a>
        </Col>
        <Col>
          <a href="#" className="mobile-nav-link">
            <div style={{ display: "inline-block" }}>
              <Icon.Cart></Icon.Cart>
            </div>
            <span>Cart</span>
          </a>
        </Col>
        <Col>
          <a href="#" className="mobile-nav-link">
            <div style={{ display: "inline-block" }}>
              <Icon.Person></Icon.Person>
            </div>
            <span>Account</span>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MobileNav;
