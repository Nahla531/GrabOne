import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main role="main">
        <Section link="#" heading="Escapes" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
