import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import BannerVideo from "../assets/video/showreel-home.mp4"
import HeroBg from "../assets/images/hero-bg.png"
import LinesRight from "../assets/images/line-right.svg"
import LinesLeft from "../assets/images/line-left.svg"
import SalesBg from "../assets/images/sales-bg.png"
import SalesIcon from "../assets/images/sale-icon.png"
import StatsBg from "../assets/images/stats-bg.png"
import Chart from "../assets/images/chart.png"
import ChevronDown from "../assets/icons/chevron-down";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Banner = () => {
  const macbookRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      gsap.fromTo(
        macbookRef.current,
        { width: "70%", height: "70vh", borderRadius: '16px', },
        {
          width: "100%",
          height: "100vh",
          duration: 2,
          borderRadius: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "20% top",
            end: "80% top",
            scrub: true,
            // markers: true,
            // pin: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      className="pt-[144px] bg-center bg-cover relative"
      ref={bannerRef}
      style={{
        background: `url(${HeroBg}) no-repeat center center`,
      }}
    >
      <div className="container relative z-[1]">
        <div className="text-center mb-10">
          <h1 className="text-[90px] text-white font-bold leading-none mb-5 max-xl:text-7xl">
            Powering every winning
            <br /> sports <span className="bg-heading-gradient">prop firm</span>.
          </h1>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-w-[723px] w-full mx-auto">
            Unleash the power of advanced technology to transform your business
            and fuel unprecedented growth, driving results beyond 200%.
          </p>
        </div>
      </div>
      {/* video banner  */}
      <div
        ref={macbookRef}
        className="macbook p-5 bg-black border border-[rgba(255,255,255,0.4)] mx-auto"
      >
        <video width="100%" height="100%" className="w-full h-full object-cover" autoPlay muted loop>
          <source src={BannerVideo} type="video/mp4" />
          <source src={BannerVideo} type="video/ogg" />
        </video>
      </div>
      {/* Sales Card */}
      <div className="absolute w-[309px] h-[303px] p-10 text-center rounded-[40px] bottom-[103px] left-[5%]"
      style={{
        background: `url(${SalesBg}) no-repeat center center`,
        backgroundSize: "contain"
      }}
      >
        <div className="flex justify-center mb-7">
          <img src={SalesIcon} alt="sale Arrows" />
        </div>
        <div>
          <h4 className="text-xl leading-normal text-white font-medium">Sales This Month</h4>
          <span className="text-base leading-normal text-[#C5CEE6] block mb-8">Your firms sales</span>
          <span className="text-[32px] text-white leading-normal font-bold">+$1.2M</span>
        </div>
      </div>
      {/* Stats Card */}
      <div className="absolute grid grid-cols-2 w-[380px] p-5  rounded-[20px] bottom-[103px] right-[5%]"
      style={{
        background: `url(${StatsBg}) no-repeat center center`,
        backgroundSize: "cover"
      }}
      >
        <div>
          <span className="text-[71px] text-[#1972F5] leading-normal font-medium">+26%</span>
          <span className="text-xs text-[#C5CEE6] font-medium block max-w-28">Sales effectiveness analysis</span>
        </div>
        <div>
          <Dropdown/>
        <div className="max-w-[136px] ms-auto mt-10">
          <img src={Chart} alt="chart" />
        </div>
        </div>
        
      </div>

      {/* Banner Lines */}
      <div className="absolute top-44 right-0 mx-w-[480px]">
        <img src={LinesRight} alt="lines" loading="lazy"/>
      </div>
      <div className="absolute top-44 left-0 mx-w-[480px]">
        <img src={LinesLeft} alt="lines" loading="lazy"/>
      </div>
    </section>
  );
};

export default Banner;
 // dropdown 

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // State to handle dropdown visibility
  const [selectedOption, setSelectedOption] = useState("Last 30 Days"); // Default option

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const options = ["Last 30 Days", "Last 7 Days", "1 Day"];

  // Option Component
  const Option = ({ text, onClick }) => {
    return (
      <li
        className="px-4 py-2 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer"
        onClick={onClick}
      >
        {text}
      </li>
    );
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <div
        className="flex justify-between items-center gap-2 rounded-[70px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] py-[10px] px-5 text-[10px] text-white font-medium max-w-[122px] ms-auto cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <ChevronDown />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[150px] bg-[rgba(255,255,255,0.90)] text-black rounded-lg shadow-lg">
          <ul className="py-2">
            {options.map((option) => (
              <Option
                key={option}
                text={option}
                onClick={() => handleOptionClick(option)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
