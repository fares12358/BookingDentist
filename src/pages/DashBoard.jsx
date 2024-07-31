import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sidbar from "../components/Sidbar";
const DashBoard = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid bg-gray-900 min-h-96">
      <Sidbar/>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
