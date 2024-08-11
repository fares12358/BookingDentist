import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/DashBoard";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Sign from "./pages/Sign";
import Account from "./pages/Account";
import "../src/main.css";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;





// "gh-pages": "^6.1.1",


// "homepage": "https://fares12358.github.io/BookingDentist/",

