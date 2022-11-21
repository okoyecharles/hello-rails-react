import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/greeting" element={<Greeting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
