import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Sign from "./pages/Sign";
import "../src/main.css"
function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Sign" element={<Sign />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
