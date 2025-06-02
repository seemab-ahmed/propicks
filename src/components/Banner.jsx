import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import BannerVideo from "../assets/video/banner-video.mp4";
import Footballs from "../assets/images/footballs.webp";
import VideoIcon from "../assets/icons/video-icon.svg";
import HeroInnerImg from "../assets/images/iphone-banner.webp";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import ArrowUp from "../assets/icons/arrow-up.png";
import dollarIcon from "../assets/icons/dollor-icon.png";
import clientImages from "../assets/images/client-count.png";
import Chart from "../assets/images/chart.png";
import SalesArrowUp from "../assets/icons/sale-arrow-up.png";
import BannerBtm from "../assets/images/banner-btm.svg";
import BannerArrowUp from "../assets/icons/banner-arrow.png";
import Typewriter from "typewriter-effect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handlePopupToggle = () => {
    setPopupOpen(!isPopupOpen);
    if (!isPopupOpen && videoRef.current) {
      videoRef.current.load();
    }
  };

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
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="pt-[144px] bg-center bg-cover bg-no-repeat relative"
      ref={bannerRef}
      aria-labelledby="banner-heading"
    >
      <div className="container">
        <div className="text-center mb-10 relative z-[1]" ref={headingRef}>
          {/* Heading with proper semantic structure */}
          <h1 
            id="banner-heading"
            className="text-[90px] max-w-[972px] mx-auto text-white font-bold leading-none mb-5 max-xl:text-7xl max-lg:text-[3.5rem] max-md:text-[34px] max-md:mb-2"
          >
            Powering every winning <br />{' '}
            <span className="text-white sr-only">sports and forex</span>
            <span aria-hidden="true">
              <Typewriter
                options={{
                  strings: ["sports", "forex"],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                  deleteSpeed: 60,
                }}
              />
            </span>{' '}
            <img
              src={Footballs}
              alt=""
              className="inline-block max-w-[140px] w-[100%] h-[66px] -mb-2 max-xl:h-[46px] max-xl:w-[120px] 
              max-xl:m-0 max-lg:w-[94px] max-lg:h-[36px] max-md:w-[75px] max-md:h-[27px]"
              aria-hidden="true"
              loading="lazy"
              width="140"
              height="66"
            />{' '}
            <span className="bg-heading-gradient bg-clip">prop firm</span>.
          </h1>
          
          {/* Paragraph with proper contrast */}
          <p
            className="text-[24px] leading-relaxed font-normal text-[#CCCDCD] max-w-[911px] w-full mx-auto max-lg:text-xl 
            max-lg:leading-relaxed max-md:text-base"
          >
            Unleash the power of advanced technology to transform your business
            and fuel unprecedented growth, driving results beyond 200%.
          </p>
          
          {/* Button with proper ARIA attributes */}
          <button
            className="border border-[rgba(255,255,255,0.10)] bg-[#1A2031] rounded-[10px] 
            shadow-grey-inset max-w-[172px] lg:max-w-[255px] w-full h-[52px] flex items-center 
            justify-center gap-3.5 text-base lg:text-lg font-semibold leading-none text-white 
            mx-auto cursor-pointer mt-4 max-md:mb-[160px] hover:bg-[#2a3248] transition-colors duration-200"
            onClick={handlePopupToggle}
            aria-label="Watch promotional video"
            aria-expanded={isPopupOpen}
          >
            <img 
              src={VideoIcon} 
              alt="" 
              loading="lazy" 
              width="24" 
              height="24"
              aria-hidden="true"
            />
            Watch Video
          </button>
        </div>
        
        <div className="relative flex items-center justify-between gap-[0px] mt-[76px] pb-[76px]">
          <div className="absolute left-[-7.7%] top-[65px] z-[2] max-xl:top-0 max-2xl:left-0 max-md:right-0 max-md:mx-auto 
            max-md:-top-[110px]"
          >
            {/* up sales % */}
            <div
              className="flex items-center rounded-[150px] gap-4 w-[195px] h-[66px] border-[2.25px] 
              border-solid border-[#FFFFFF1A] bg-[#FFFFFF05] px-6 py-4 text-white mx-auto mb-[46px] 
              max-lg:w-[170px] max-lg:py-3 max-lg:ms-2 max-md:hidden"
              ref={increaseRef}
              aria-hidden="true"
            >
              <img
                src={ArrowUp}
                alt=""
                loading="lazy"
                className="w-9 h-9 max-lg:w-7 max-lg:h-7"
                width="36"
                height="36"
              />
              <span className="text-2xl leading-none max-lg:text-xl">347.23%</span>
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
              aria-hidden="true"
            >
              <span className="text-2xl leading-none text-[#fff] block max-xl:text-xl max-md:text-xs">
                Sales This Month{' '}
                <img
                  src={dollarIcon}
                  alt=""
                  loading="lazy"
                  className="w-6 h-6 inline-block ms-3 rotate-[9.4deg] max-xl:w-5 max-xl:h-5 max-xl:-translate-y-[2px]"
                  width="24"
                  height="24"
                />
              </span>
              <span className="text-[63px] text-white leading-normal font-bold max-xl:text-[56px]  max-lg:text-5xl max-lg:leading-snug">
                +1.2M
              </span>
              <div className="flex items-center gap-4 w-[195px] text-white max-md:w-[130px] max-md:mx-auto">
                <img
                  src={SalesArrowUp}
                  alt=""
                  loading="lazy"
                  className="w-9 h-9 max-lg:w-7 max-lg:h-7"
                  width="36"
                  height="36"
                />
                <span className="text-2xl leading-none max-lg:text-xl">234.45%</span>
              </div>
            </div>
          </div>
          {/* Optimized iPhone Image with proper attributes */}
          <div className="relative left-0 max-w-[921px] bottom-0 right-0 mx-auto z-[0] max-2xl:max-w-[650px] max-xl:max-w-[486px] max-lg:max-w-[450px]">
            <img
              src={HeroInnerImg}
              alt="Smartphone displaying app interface"
              loading="eager"
              width={921}  // Set explicit width matching max-w
              height={693} // Set appropriate height (adjust ratio as needed)
              fetchpriority="high"
              decoding="sync"
              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
                maxWidth: '100%',
              }}
            />
          </div>
          {/* md hidden stats row */}
          <div className="absolute right-[-7.3%] top-[75px] -translate-x-24 z-10 max-2xl:-translate-x-10 max-xl:top-8 max-2xl:right-0 max-xl:translate-x-0 max-md:hidden">
            {/* Stats Card */}
            <div
              className="grid items-end grid-cols-2 w-[324px] gap-x-6 p-11 rounded-[36px] border-[2.25px] 
              border-solid border-[#FFFFFF1A] bg-[#FFFFFF05] rotate-[9.41deg] max-xl:w-64 max-xl:p-8  max-lg:w-56 max-lg:p-6"
              style={{
                boxShadow: "30px 30px 63.15px 0px #00000026",
                backdropFilter: "blur(75px)",
              }}
              ref={cardTwoRef}
              aria-hidden="true"
            >
              <span className="col-span-2 text-2xl leading-none text-[#fff] block max-xl:text-xl max-md:text-xs">
                Sales Analysis{' '}
                <img
                  src={dollarIcon}
                  alt=""
                  loading="lazy"
                  className="w-6 h-6 inline-block ms-3 rotate-[9.4deg] max-xl:w-5 max-xl:h-5 max-xl:-translate-y-[2px]"
                  width="24"
                  height="24"
                />
              </span>
              <div>
                <span className="text-[48px] text-[#fff] leading-normal font-medium max-xl:text-[38px] max-lg:text-[32px]">
                  +26%
                </span>
              </div>
              <div>
                <div className="max-w-[136px] ms-auto mt-10 max-lg:mt-6">
                  <img 
                    src={Chart} 
                    alt="Sales growth chart" 
                    loading="lazy"
                    width="136"
                    height="auto"
                  />
                </div>
              </div>
            </div>
            
            <div
              className="max-w-[295px] mx-auto block mt-10 -translate-x-12 max-xl:max-w-64 max-lg:w-52 max-lg:translate-x-0"
              ref={userRef}
              aria-hidden="true"
            >
              <img 
                src={clientImages} 
                alt="Client statistics" 
                loading="lazy"
                width="295"
                height="auto"
              />
            </div>
            
            <div
              className="max-w-[75px] mx-auto block mt-10 relative z-[10] max-xl:max-w-16 max-xl:mt-8 max-lg:mr-3"
              ref={arrowRef}
              aria-hidden="true"
            >
              <img 
                src={BannerArrowUp} 
                alt="" 
                loading="lazy"
                width="75"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner Lines - decorative only */}
      <div className="absolute top-44 right-0 mx-w-[480px] max-md:max-w-[200px] pointer-events-none">
        <img src={LinesRight} alt="" loading="lazy" width="480" height="auto" aria-hidden="true" />
      </div>
      <div className="absolute top-44 left-0 mx-w-[480px] max-md:max-w-[200px] pointer-events-none">
        <img src={LinesLeft} alt="" loading="lazy" width="480" height="auto" aria-hidden="true" />
      </div>
      
      {/* Bottom gradient - decorative */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-[2] pointer-events-none">
        <img
          src={BannerBtm}
          alt=""
          loading="lazy"
          className="w-full"
          width="100%"
          height="auto"
          aria-hidden="true"
        />
      </div>
      
      {/* Video Popup with proper ARIA attributes */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-[9999] p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="relative w-full max-w-4xl">
            <h2 id="video-modal-title" className="sr-only">Promotional Video</h2>
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                controls
                loop
                preload="metadata"
                aria-label="Promotional video about our services"
                onLoadedData={() => setVideoLoaded(true)}
              >
                <source src={BannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-white">Loading video...</div>
                </div>
              )}
            </div>

            <button
              onClick={handlePopupToggle}
              className="absolute top-0 right-0 -translate-y-full translate-x-1/2 text-white bg-[#1c3148] rounded-full h-10 w-10 flex justify-center items-center text-2xl hover:bg-[#2a4a6e] transition-colors duration-200"
              aria-label="Close video modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;