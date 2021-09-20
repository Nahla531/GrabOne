import React from "react";
import { Container, Row } from "react-bootstrap";
import Listing from "./Listing";
import * as Icon from "react-bootstrap-icons";

const Section = ({ link, heading }) => {
  return (
    <section className="container-width grid-container">
      <div className="homepage-main">
        <header className="section-header">
          <a href={link}>
            <span>{heading}</span>
          </a>
          <a href={link} className="view-more">
            <span className="view-more_text">View More</span>
            <Icon.ChevronRight className="chev-right" size={13} />
          </a>
        </header>
        <Container>
          <Row>
            <Listing isLarge="false" />
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Section;
