import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Development from "./pages/Development";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development" element={<Development />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
