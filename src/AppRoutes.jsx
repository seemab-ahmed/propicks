import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ExtraServices from "./pages/ExtraServices";
import Development from "./pages/Development";
import GrowFirm from "./pages/GrowFirm";
import FirmDemo from "./pages/FirmDemo";
import { useLocation } from "react-router-dom";

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Adds smooth scrolling
      });
    };
  
    // Delay scrolling to allow the page to load
    const timeout = setTimeout(scrollToTop, 5);
    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, [pathname]);

  useEffect(() => {
    // Preload other pages
    const preloadPages = () => {
      import("./pages/Development");
      import("./pages/ExtraServices");
      import("./pages/ContactUs");
      import("./pages/GrowFirm");
      import("./pages/FirmDemo");
    };
    preloadPages();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development" element={<Development />} />
      <Route path="/extra-services" element={<ExtraServices />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/grow-your-firm" element={<GrowFirm />} />
      <Route path="/firm-demo" element={<FirmDemo />} />
    </Routes>
  );
};

export default AppRoutes;

