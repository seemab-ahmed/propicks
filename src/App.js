import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "./assets/js/ScrollSmoother.min.js";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    // Ensure ScrollSmoother is available
    const ScrollSmoother = window.ScrollSmoother;
    if (ScrollSmoother && typeof ScrollSmoother.create === "function") {
      try {
        // Initialize ScrollSmoother
        const smootherInstance = ScrollSmoother.create({
          wrapper: "#smooth-wrapper", // Wrapper element
          content: "#smooth-content", // Content element
          smooth: 5, // Smoothing duration
          effects: true, // Enable scroll effects like parallax
        });

        // Optional: If ScrollSmoother provides any "disable" method, use it on cleanup
        return () => {
          if (smootherInstance && typeof smootherInstance.disable === 'function') {
            smootherInstance.disable();
          }
        };
      } catch (error) {
        console.error("Error initializing ScrollSmoother:", error);
      }
    } else {
      console.error("ScrollSmoother is not available. Check the script or its export.");
    }
  }, []);

  return (
    <Router>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;