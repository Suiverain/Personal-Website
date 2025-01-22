import logo from './logo.svg';
import './App.css';

// my imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;