import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { PageSkeleton } from "./components/Skeleton";

// Lazy load all pages except Home
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ExtraServices = lazy(() => import("./pages/ExtraServices"));
const Development = lazy(() => import("./pages/Development"));
const GrowFirm = lazy(() => import("./pages/GrowFirm"));
const FirmDemo = lazy(() => import("./pages/FirmDemo"));

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Preload routes when idle
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleCallback = requestIdleCallback(() => {
        const paths = [
          "/development",
          "/extra-services",
          "/contact-us",
          "/grow-your-firm",
          "/firm-demo"
        ];
        
        if (paths.some(path => pathname.includes(path) || path === pathname)) {
          Promise.all([
            import("./pages/ContactUs"),
            import("./pages/ExtraServices"),
            import("./pages/Development"),
            import("./pages/GrowFirm"),
            import("./pages/FirmDemo")
          ]);
        }
      });
      
      return () => cancelIdleCallback(idleCallback);
    }
  }, [pathname]);

  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Development />} />
        <Route path="/extra-services" element={<ExtraServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/grow-your-firm" element={<GrowFirm />} />
        <Route path="/firm-demo" element={<FirmDemo />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;