import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Building from "../components/Buiding";
import CustomOdds from "../components/CustomOdds";
import Faqs from "../components/Faqs";
import Guide from "../components/Guide";
import Innovative from "../components/Innovate";
import Services from "../components/Services";
import DevelopmentPlatform from "../components/DevelopmentPlatform";

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      // Mobile detection
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsIntersecting(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const section = document.querySelector('#guide-section');
      if (section) observer.observe(section);
  
      // Initial mobile check
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
  
      return () => {
        window.removeEventListener('resize', checkIfMobile);
        if (section) observer.unobserve(section);
      };
    }, []);

  return (
    <main>
      <Banner />
      <Guide isMobile={isMobile} isIntersecting={isIntersecting} />
      <Services isMobile={isMobile} isIntersecting={isIntersecting}/>
      <CustomOdds isMobile={isMobile} isIntersecting={isIntersecting} />
      <DevelopmentPlatform />
      <Building />
      <Faqs />
      <Innovative />
    </main>
  );
};

export default Home;
