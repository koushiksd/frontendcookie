import axios from "axios";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./home.js";
import Screen2 from "./screencookie.js";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/cookie" Component={Screen2} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
