import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/projectCards";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* <Route path="/Resume" element={<Resume />} /> */}
          <Route path="/" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
