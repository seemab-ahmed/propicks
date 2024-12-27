import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "./assets/js/ScrollSmoother.min.js";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollingDown, setScrollingDown] = useState(true); // State to track scroll direction
  const [arrowVisible, setArrowVisible] = useState(false); // State to track if the arrow should be visible
  const [lastScrollTop, setLastScrollTop] = useState(0); // To track last scroll position for direction

  useEffect(() => {
    // Track scroll direction and visibility of the arrow
    window.addEventListener('scroll', () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollingDown(true); // Scrolling down
      } else if (currentScrollTop < lastScrollTop) {
        setScrollingDown(false); // Scrolling up
      }

      if (currentScrollTop > 100) { // Show the arrow after scrolling 100px
        if (!arrowVisible) {
          setArrowVisible(true); // Show arrow smoothly
          gsap.to('.scroll-arrow', { opacity: 1, y: 0, duration: 0.5 });
        }
      } else {
        if (arrowVisible) {
          setArrowVisible(false); // Hide arrow smoothly
          gsap.to('.scroll-arrow', { opacity: 0, y: 100, duration: 0.5 });
        }
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Update last scroll position
    });

    // Ensure ScrollSmoother is available
    // const ScrollSmoother = window.ScrollSmoother;
    if (ScrollSmoother && typeof ScrollSmoother.create === "function") {
      try {
        const smootherInstance = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 5,
          effects: true,
        });

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
  }, [arrowVisible, lastScrollTop]);

  return (
    <Router>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AppRoutes />
          <Footer />
        </div>
      </div>

      {/* Scroll Arrow */}
      {arrowVisible && (
        <div className="fixed bottom-2 right-4 w-12 h-12 flex justify-center items-center z-[999]
        bg-[#1C3148] rounded-[10px] text-lg font-bold leading-none text-white cursor-pointer 
        hover:bg-[#16354a] transition-all duration-300 scroll-arrow animate-bounce">
          {/* Down Arrow */}
          {scrollingDown ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          ) : (
            // Up Arrow
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M18 15l-6-6-6 6"></path>
            </svg>
          )}
        </div>
      )}
      {/* dt animation text */}
      <div className="fixed bottom-4 left-0 right-0 mx-auto w-max px-4 py-2 text-xs 
      text-[#fff] rounded-[6px] bg-[rgba(36,37,40,0.73)] z-[999] block md:hidden ">View on desktop to view all animations</div>
    </Router>
  );
}

export default App;