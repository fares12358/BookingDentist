import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
const About = () => {
  return (
    <>
      <Nav />
      <section className="container-fluid bg-gray-900 min-h-96">
        <Pricing />
      </section>

      <Footer />
    </>
  );
};

export default About;
