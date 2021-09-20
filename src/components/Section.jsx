import React from "react";
import { Container, Row } from "react-bootstrap";
import Listing from "./Listing";

const Section = ({ link, heading }) => {
  return (
    <section className="container-width  grid-container">
      <div className="homepage-main">
        <header className="section-header">
          <a href={link}>
            <span>{heading}</span>
          </a>
          <a href={link} className="view-more">
            <span className="view-more_text">View More</span>
            <i className="fas fa-angle-right"></i>
          </a>
        </header>
        <Container>
          <Row>
            <Listing isLarge="false" />
          </Row>
        </Container>
        {/* listing goes here grid view */}
      </div>
    </section>
  );
};

export default Section;
