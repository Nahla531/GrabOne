import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import CtaSub from "./components/CtaSub";
import Aside from "./components/Aside";
import { Col, Container, Row } from "react-bootstrap";
import ListingItem from "./components/ListingItem";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main role="main">
        <section className="container-width ">
          <Container>
            <Row>
              <Col lg="3">
                <Aside />
              </Col>
              <Col>
                <ListingItem
                  key={12}
                  id={12}
                  price={123}
                  title="whatever"
                  description="Lorem ipsum sunpe nothing"
                  location="Hiati"
                  img="https://main-cdn.grabone.co.nz/goimage/325x225/a3c912cb9f2b24036e8d6315fd775511699a82b8.jpg"
                  isLarge={true}
                  isCollection={false}
                  count={11}
                  vendorName="something"
                />
              </Col>
              <Col>
                <ListingItem
                  key={12}
                  id={12}
                  price={123}
                  title="whatever"
                  description="Lorem ipsum sunpe nothing"
                  location="Hiati"
                  img="https://main-cdn.grabone.co.nz/goimage/325x225/a3c912cb9f2b24036e8d6315fd775511699a82b8.jpg"
                  isLarge={true}
                  isCollection={false}
                  count={11}
                  vendorName="something"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <CtaSub />
        <Section link="#" heading="Escapes" />
        <Section link="#" heading="Featured " />
        <Section link="#" heading="Automotive" />
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
}

export default App;
