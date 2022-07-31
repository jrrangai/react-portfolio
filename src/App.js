import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectCards from "./components/Portfolio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<ProjectCards />} />
          {/* <Route path="/Resume" element={<Resume />} /> */}
          <Route path="/" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
