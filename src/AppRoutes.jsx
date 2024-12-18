import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ExtraServices from "./pages/ExtraServices";
import Development from "./pages/Development";
import GrowFirm from "./pages/GrowFirm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development" element={<Development />} />
      <Route path="/extra-services" element={<ExtraServices />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/grow-your-firm" element={<GrowFirm />} />
    </Routes>
  );
};

export default AppRoutes;
