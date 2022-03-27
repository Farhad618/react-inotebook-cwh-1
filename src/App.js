import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route path="/users">
            <Users />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
