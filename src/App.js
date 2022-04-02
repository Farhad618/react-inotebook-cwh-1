import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import './App.css';
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import UserState from "./context/user/UserState";





function App() {
  return (
    <div className="App">
      <UserState>
        <NoteState>
          <Router>
            <NavBar />
            {/* <AlertCompo head={"heading"} type={"danger"} /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              {/* <Route path="/users">
            <Users />
          </Route> */}
            </Routes>
          </Router>
        </NoteState>
      </UserState>

    </div>
  );
}

export default App;
