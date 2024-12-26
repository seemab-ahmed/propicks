import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import BannerVideo from "../assets/video/banner-video.mp4";
import Footballs from "../assets/images/footballs.png";
import VideoIcon from "../assets/images/video-icon.svg";
import HeroInnerImg from "../assets/images/iphone-banner.png";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import ArrowUp from "../assets/images/arrow-up.png";
import dollarIcon from "../assets/images/dollor-icon.png";
import clientImages from "../assets/images/client-count.png";
import Chart from "../assets/images/chart.png";
import SalesArrowUp from "../assets/images/sale-arrow-up.png";
import BannerBtm from "../assets/images/banner-btm.svg";
import BannerArrowUp from "../assets/images/banner-arrow.png";
import Typewriter from "typewriter-effect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage popup visibility

  const handlePopupToggle = () => {
    setPopupOpen(!isPopupOpen); // Toggle the popup visibility
  };
  // const macbookRef = useRef(null);
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const cardTwoRef = useRef(null);
  const userRef = useRef(null);
  const arrowRef = useRef(null);
  const increaseRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        requestAnimationFrame(() => {
          // Animation for the heading
          gsap.fromTo(
            headingRef.current,
            { y: 0, opacity: 1 },
            {
              y: -100,
              opacity: 0,
              duration: 1.2,
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "5% top",
                end: "20% top",
                scrub: true,
              },
            }
          );
          // Animation for the Cards
          gsap.fromTo(
            cardRef.current,
            { y: 0, opacity: 1 },
            {
              y: -400,
              opacity: 0,
              duration: 2.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "10% top",
                end: "85% top",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            increaseRef.current,
            { y: 0, opacity: 1 },
            {
              y: -400,
              opacity: 0,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "4% top",
                end: "90% top",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            userRef.current,
            { y: 0, opacity: 1 },
            {
              y: -400,
              opacity: 0,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "12% top",
                end: "90% top",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            arrowRef.current,
            { y: 0, opacity: 1 },
            {
              y: -400,
              opacity: 0,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "20% top",
                end: "90% top",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            cardTwoRef.current,
            { y: 0, opacity: 1 },
            {
              y: -400,
              opacity: 0,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bannerRef.current,
                start: "10% top",
                end: "80% top",
                scrub: true,
              },
            }
          );
        });
      } else {
        // Optional: Clear ScrollTriggers for small screens
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };

    // Initial execution
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="pt-[144px] bg-center bg-cover bg-no-repeat relative"
      ref={bannerRef}
    >
      <div className="container ">
        <div className="text-center mb-10 relative z-[1]" ref={headingRef}>
          <h1 className="text-[90px] text-white font-bold leading-none mb-5 max-xl:text-7xl max-lg:text-[3.5rem] max-md:text-[34px] max-md:mb-2 ">
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
            <div
              className="inline-block max-w-[140px] w-[100%] h-[66px] -mb-3 max-xl:h-[46px] max-xl:w-[120px] 
            max-xl:m-0 max-lg:w-[94px] max-lg:h-[36px] max-md:w-[75px] max-md:h-[27px]"
            >
              {" "}
              <img src={Footballs} alt="footballs" className="w-[100%]" />
            </div>
            <span className="main-heading-span bg-heading-gradient">
              prop firm
            </span>
            .
          </h1>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-w-[723px] w-full mx-auto max-lg:text-xl 
          max-lg:leading-relaxed max-md:text-base ">
            Unleash the power of advanced technology to transform your business
            and fuel unprecedented growth, driving results beyond 200%.
          </p>
          <button
            className="border border-[rgba(255,255,255,0.10)] bg-[#1A2031] rounded-[10px] 
            shadow-grey-inset max-w-[172px] lg:max-w-[255px] w-full h-[52px] flex items-center 
            justify-center gap-3.5 text-base lg:text-lg font-semibold leading-none text-white 
            mx-auto cursor-pointer mt-4 max-md:mb-[160px]"
            onClick={handlePopupToggle} // Trigger popup toggle on button click
          >
            <img src={VideoIcon} alt="video-icon" />
            Watch Video
          </button>
        </div>
        <div className="relative flex items-center justify-between gap-[0px] mt-[76px] pb-[76px]">
          <div
            className="absolute left-0 top-[65px] z-[2] max-xl:top-0 max-md:right-0 max-md:mx-auto 
          max-md:-top-[110px]"
          >
            <div
              className="flex items-center rounded-[150px] gap-4 w-[195px] h-[66px] border-[2.25px] 
            border-solid border-[#FFFFFF1A] bg-[#FFFFFF05] px-6 py-4 text-white mx-auto mb-[46px] 
            max-lg:w-[170px] max-lg:py-3 max-lg:ms-2 max-md:hidden"
              ref={increaseRef}
            >
              <img
                src={ArrowUp}
                alt="up arrow"
                className="w-9 h-9 max-lg:w-7 max-lg:h-7"
              />
              <span className="text-2xl leading-none max-lg:text-xl">
                347.23%
              </span>
            </div>
            {/* Sales Card */}
            <div
              className="w-[382px] h-[270px] p-10 rounded-[40px] border-[2.25px] border-solid border-[#FFFFFF1A] 
              bg-[#FFFFFF05] -rotate-[9.41deg] translate-x-14 max-2xl:translate-x-10 max-2xl:w-[320px] max-xl:w-[270px] 
              max-xl:h-auto max-xl:p-8 max-lg:w-60 max-lg:h-auto max-lg:translate-x-0 max-lg:p-6 
              max-md:rotate-0  max-md:mx-auto max-md:text-center"
              style={{
                boxShadow: "30px 30px 63.15px 0px #00000026",
                backdropFilter: "blur(75px)",
              }}
              ref={cardRef}
            >
              <div>
                <span className="text-2xl leading-none text-[#fff] block max-xl:text-xl max-md:text-xs">
                  Sales This Month{" "}
                  <img
                    src={dollarIcon}
                    alt="dollor symbol"
                    className="w-6 h-6 inline-block ms-3 rotate-[9.4deg] max-xl:w-5 max-xl:h-5 max-xl:-translate-y-[2px]"
                  />
                </span>
                <span className="text-[63px] text-white leading-normal font-bold max-xl:text-[56px]  max-lg:text-5xl max-lg:leading-snug">
                  +1.2M
                </span>
                <div className="flex items-center gap-4 w-[195px]   text-white max-md:w-[130px] max-md:mx-auto">
                  <img
                    src={SalesArrowUp}
                    alt="up arrow"
                    className="w-9 h-9 max-lg:w-7 max-lg:h-7"
                  />
                  <span className="text-2xl leading-none max-lg:text-xl">
                    234.45%
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Iphone Img */}
          <div className="relative left-0 max-w-[660px] bottom-0 right-0 mx-auto z-[0] max-xl:max-w-[486px] max-lg:max-w-[450px]">
            <img src={HeroInnerImg} alt="thumbnail" className="w-full h-full" />
          </div>
          {/* md hideden  stats row */}
          <div className="absolute right-0 top-[75px] -translate-x-24 z-10 max-2xl:-translate-x-10 max-xl:top-8 max-xl:translate-x-0 max-md:hidden">
            {/* Stats Card */}
            <div
              className="grid items-end grid-cols-2 w-[324px] gap-x-6 p-11 rounded-[36px] border-[2.25px] 
              border-solid border-[#FFFFFF1A] bg-[#FFFFFF05] rotate-[9.41deg] max-xl:w-64 max-xl:p-8  max-lg:w-56 max-lg:p-6"
              style={{
                boxShadow: "30px 30px 63.15px 0px #00000026",
                backdropFilter: "blur(75px)",
              }}
              ref={cardTwoRef}
            >
              <span className=" col-span-2 text-2xl leading-none text-[#fff] block max-xl:text-xl max-md:text-xs">
                Sales Analysis{" "}
                <img
                  src={dollarIcon}
                  alt="dollor symbol"
                  className="w-6 h-6 inline-block ms-3 rotate-[9.4deg] max-xl:w-5 max-xl:h-5 max-xl:-translate-y-[2px]"
                />
              </span>
              <div>
                <span className="text-[48px] text-[#fff] leading-normal font-medium max-xl:text-[38px] max-lg:text-[32px] ">
                  +26%
                </span>
              </div>
              <div>
                <div className="max-w-[136px] ms-auto mt-10 max-lg:mt-6">
                  <img src={Chart} alt="chart" />
                </div>
              </div>
            </div>
            <div
              className="max-w-[295px] mx-auto block mt-10 -translate-x-12 max-xl:max-w-64 max-lg:w-52 max-lg:translate-x-0"
              ref={userRef}
            >
              <img src={clientImages} alt="sales images" />
            </div>
            <div
              className="max-w-[75px] mx-auto block mt-10  relative z-[10] max-xl:max-w-16 max-xl:mt-8 max-lg:mr-3"
              ref={arrowRef}
            >
              <img src={BannerArrowUp} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center py-40 bg-black bg-opacity-50 z-[9999]">
          <div className="container">
            <div className="bg-black rounded-lg relative">
              <video
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                autoPlay
                muted
                controls
                loop
              >
                <source src={BannerVideo} type="video/mp4" />
                <source src={BannerVideo} type="video/ogg" />
              </video>
              <button
                onClick={handlePopupToggle}
                className="absolute -top-2 -right-2 text-white bg-[#1c3148] pb-2 rounded-lg h-8 w-8 md:h-10 md:w-10 flex justify-center items-center text-[24px] md:text-[32px] leading-8"
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Banner Lines */} 
      <div className="absolute top-44 right-0 mx-w-[480px] max-md:max-w-[200px]">
        <img src={LinesRight} alt="lines" loading="lazy" />
      </div>
      <div className="absolute top-44 left-0 mx-w-[480px] max-md:max-w-[200px]">
        <img src={LinesLeft} alt="lines" loading="lazy" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full z-[2]">
        <img src={BannerBtm} alt="dev top gradient" className="w-full" />
      </div>
    </section>
  );
};

export default Banner;

