import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import AddProperty from "./Pages/AddProperty";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/property/add" element={<AddProperty/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
