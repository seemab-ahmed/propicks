import React, { useEffect, useRef } from "react";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import OddsDashMb from "../assets/images/odds-dash.png";
import OddsDash from "../assets/video/custom-odd.webm";
import ServicesBtm from "../assets/images/service-btm.png";

const CustomOdds = ({ isMobile, isIntersecting }) => {
  const videoRef = useRef(null);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Handle video playback and preloading
  useEffect(() => {
    if (!isMobile && videoRef.current) {
      const video = videoRef.current;
      // Configure video for reliable autoplay
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x-webkit-airplay', 'allow');

      if (isIntersecting) {
        const playVideo = () => {
          video.play()
            .catch(e => console.log("Video playback error:", e));
        };
        // Safari needs the video to be loaded first
        if (isSafari && video.readyState < 3) {
          video.load();
          video.onloadeddata = playVideo;
        } else {
          playVideo();
        }
      }
    }
  }, [isIntersecting, isMobile, isSafari]);

  return (
    <section className="pt-[142px] text-center relative z-[2] overflow-hidden max-lg:pt-28 max-md:pt-12">
      <div className="container">
        <h2 className="text-[120px] font-bold leading-none mb-5 max-xl:text-8xl max-lg:text-7xl max-md:text-4xl max-md:mb-2">
          <span className="bg-tab-gradient">Custom Your Odds</span>
        </h2>
        <p className="text-2xl mb-12 leading-10 font-normal text-[#CCCDCD] max-w-[896px] w-full mx-auto max-lg:text-xl max-lg:leading-relaxed max-md:text-base">
          Offer your clients an unparalleled experience with access to over
          1,000 games and more than 500 betting options, ensuring endless
          possibilities to choose from.
        </p>
      </div>
      <div>
        {/* Mobile content */}
        {isMobile ? (
          <figure className="w-full">
            <img 
              src={OddsDashMb} 
              alt="Custom odds dashboard" 
              loading="eager" 
              className="w-full"
              width="800"
              height="450"
            />
          </figure>
        ) : (
          /* Desktop content */
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            className="w-full h-full object-contain hidden md:block max-w-[1800px] mx-auto"
            loop
            preload="auto"
            aria-label="Custom odds dashboard demonstration"
          >
            <source src={OddsDash} type="video/webm" />
          </video>
        )}
      </div>
      {/* Left Right Lines */}
      <div className="absolute top-32 right-0 mx-w-[480px] max-xl:max-w-[380px] max-lg:max-w-[300px] max-md:max-w-[200px]">
        <img 
          src={LinesRight} 
          alt="" 
          loading="lazy" 
          width="480"
          height="200"
        />
      </div>
      <div className="absolute top-32 left-0 mx-w-[480px] max-xl:max-w-[380px] max-lg:max-w-[300px] max-md:max-w-[200px]">
        <img 
          src={LinesLeft} 
          alt="" 
          loading="lazy" 
          width="480"
          height="200"
        />
      </div>
      {/* Bottom image */}
      <div className="absolute bottom-[-3px] left-0 right-0 w-full">
        <img
          src={ServicesBtm}
          alt=""
          loading="lazy"
          className="w-full"
          width="1920"
          height="150"
        />
      </div>
    </section>
  );
};

export default CustomOdds;