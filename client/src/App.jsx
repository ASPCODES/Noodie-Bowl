import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/app.scss";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="./" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
