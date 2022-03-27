import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import AlertCompo from "./components/utilities/Alert";
import './App.css';



function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <NavBar />
          {/* <AlertCompo head={"heading"} type={"danger"} /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            {/* <Route path="/users">
            <Users />
          </Route> */}
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
