import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "/src/NAVBAR/navbar.jsx";
import Home from "/src/HOME/home.jsx";
import About from "/src/ABOUT/about.jsx";
import Login from "/src/LOGIN/login.jsx";
import Roadmaps from "/src/ROADMAP/roadmap.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
