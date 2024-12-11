import React, {  useRef, useState } from "react";
import { gsap } from "gsap";
// import BannerVideo from "../assets/video/showreel-home.mp4"
import HeroBg from "../assets/images/hero-img-new.png";
// import HeroInnerImg from "../assets/images/banner-bg.png";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import SalesBg from "../assets/images/sales-bg.png";
import SalesIcon from "../assets/images/sale-icon.png";
import StatsBg from "../assets/images/stats-bg.png";
import Chart from "../assets/images/chart.png";
import ChevronDown from "../assets/icons/chevron-down";
import BannerBtm from "../assets/images/banner-btm.svg";
import Typewriter from "typewriter-effect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  // const macbookRef = useRef(null);
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const cardTwoRef = useRef(null);

  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     // Animation for the heading
  //     gsap.fromTo(
  //       headingRef.current,
  //       { y: 0, opacity: 1 },
  //       {
  //         y: -100,
  //         opacity: 0,
  //         duration: 1.2,
  //         // ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: bannerRef.current,
  //           start: "5% top",
  //           end: "20% top",
  //           scrub: true,
  //         },
  //       }
  //     );
  //     // Animation for the Cards
  //     gsap.fromTo(
  //       cardRef.current,
  //       { y: 0, opacity: 1 },
  //       {
  //         y: -200,
  //         opacity: 0,
  //         duration: 1.2,
  //         scrollTrigger: {
  //           trigger: bannerRef.current,
  //           start: "10% top",
  //           end: "20% top",
  //           scrub: true,
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       cardTwoRef.current,
  //       { y: 0, opacity: 1 },
  //       {
  //         y: -200,
  //         opacity: 0,
  //         duration: 1.5,
  //         scrollTrigger: {
  //           trigger: bannerRef.current,
  //           start: "10% top",
  //           end: "20% top",
  //           scrub: 1,
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       macbookRef.current,
  //       { width: "70%", height: "70vh", borderRadius: "16px" },
  //       {
  //         width: "100%",
  //         height: "100vh",
  //         duration: 2,
  //         borderRadius: 0,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: bannerRef.current,
  //           start: "30% top",
  //           end: "70% top",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <section
      className="pt-[144px] pb-[500px] md:pb-[635px] bg-center bg-cover bg-no-repeat relative"
      ref={bannerRef}
      style={{
        // backgroundImage: `radial-gradient(circle at -30% 20%, #132436 10%, transparent 100%)`,
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      <div className="container relative z-[1]">
        <div className="text-center mb-10" ref={headingRef}>
          <h1 className="text-[90px] text-white font-bold leading-none mb-5 max-xl:text-7xl max-lg:text-[3.5rem] max-md:text-4xl max-md:mb-2 ">
            Powering every winning
            <br />{" "}
            <span className="text-white">
              <Typewriter
                options={{
                  strings: ["sports", "forex"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>{" "}
            <span className="main-heading-span bg-heading-gradient">
              prop firm
            </span>
            .
          </h1>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-w-[723px] w-full mx-auto max-lg:text-xl max-lg:leading-relaxed max-md:text-base max-md:mb-[160px]">
            Unleash the power of advanced technology to transform your business
            and fuel unprecedented growth, driving results beyond 200%.
          </p>
        </div>
      </div>
      {/* video banner  */}
      {/* <div
        ref={macbookRef}
        className="macbook p-5 bg-black border border-[rgba(255,255,255,0.4)] mx-auto"
      >
        <video width="100%" height="100%" className="w-full h-full object-cover" autoPlay muted loop>
          <source src={BannerVideo} type="video/mp4" />
          <source src={BannerVideo} type="video/ogg" />
        </video>
        <img
          src={HeroInnerImg}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
      </div> */}
      {/* Sales Card */}
      <div
        className="absolute w-[309px] h-[303px] p-10 text-center bg-contain rounded-[40px] bottom-[103px] left-[5%] max-lg:w-auto max-lg:h-auto max-lg:py-5 max-md:mx-auto max-md:left-0 
      max-md:right-0 max-md:top-[355px] max-md:bottom-auto max-md:p-10 max-md:w-[200px] max-md:rounded-3xl max-md:border-[rgba(255,255,255,0.1)] max-md:border-t max-md:border-r border-solid"
        style={{
          background: `url(${SalesBg}) no-repeat center center`,
        }}
        ref={cardRef}
      >
        <div className="flex justify-center mx-auto mb-7 max-lg:mb-5 max-lg:w-14 max-md:w-[46px] max-md:mb-2">
          <img src={SalesIcon} alt="sale Arrows" />
        </div>
        <div>
          <h4 className="text-xl leading-normal text-white font-medium max-md:text-sm">
            Sales This Month
          </h4>
          <span className="text-base leading-normal text-[#C5CEE6] block lg:mb-8 max-lg:mb-4 max-md:text-xs max-md:mb-5">
            Your firms sales
          </span>
          <span className="text-[32px] text-white leading-normal font-bold max-md:text-xl">
            +$1.2M
          </span>
        </div>
      </div>
      {/* Stats Card */}
      <div
        className="absolute grid grid-cols-2 w-[380px] p-5  rounded-[20px] bottom-[103px] right-[5%] max-lg:w-auto max-md:hidden"
        style={{
          background: `url(${StatsBg}) no-repeat center center`,
          backgroundSize: "cover",
        }}
        ref={cardTwoRef}
      >
        <div>
          <span className="text-[71px] text-[#1972F5] leading-normal font-medium max-lg:text-6xl ">
            +26%
          </span>
          <span className="text-xs text-[#C5CEE6] font-medium block max-w-28">
            Sales effectiveness analysis
          </span>
        </div>
        <div>
          <Dropdown />
          <div className="max-w-[136px] ms-auto mt-10 max-lg:mt-6">
            <img src={Chart} alt="chart" />
          </div>
        </div>
      </div>

      {/* Banner Lines */}
      <div className="absolute top-44 right-0 mx-w-[480px] max-md:max-w-[200px]">
        <img src={LinesRight} alt="lines" loading="lazy" />
      </div>
      <div className="absolute top-44 left-0 mx-w-[480px] max-md:max-w-[200px]">
        <img src={LinesLeft} alt="lines" loading="lazy" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src={BannerBtm} alt="dev top gradient" className="w-full" />
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
