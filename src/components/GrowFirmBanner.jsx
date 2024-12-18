import React, {  useRef} from "react";
import { gsap } from "gsap";
// import BannerVideo from "../assets/video/showreel-home.mp4"
import affiliate from "../assets/images/affiliate-resources.png";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import BannerBtm from "../assets/images/banner-btm.svg";
// import Typewriter from "typewriter-effect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GrowFirmBanner = () => {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);

  return (
    <section
      className="pt-[144px] bg-center bg-cover bg-no-repeat relative"
      ref={bannerRef}
    >
      <div className="container relative z-[1]">
        <div className="text-center mb-10 max-w-[1140px] mx-auto" ref={headingRef}>
          <h1 className="text-[110px] text-white font-bold leading-none mb-5 max-xl:text-7xl max-lg:text-[3.5rem] max-md:text-4xl max-md:mb-2 ">
          We help you <span className="main-heading-span bg-heading-gradient">grow</span> with the best
            <span className="main-heading-span bg-heading-gradient">
            affiliate tech
            </span>.
          </h1>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-w-[846px] w-full mx-auto max-lg:text-xl max-lg:leading-relaxed max-md:text-base max-md:mb-[160px]">
          At PropPicks, we help you grow with the most advanced affiliate technology in the industry. Our cutting-edge solutions are designed to drive results, streamline operations, and unlock your full potential for success!
          </p>
        </div>
        <div className="relative flex items-center justify-between gap-[650px]">
          <div>
            <img
            src={affiliate}
            alt="thumbnail"
            />
          </div>
        </div>
      </div>

      {/* Banner Lines */}
      <div className="absolute bottom-80 right-0 mx-w-[480px] max-md:max-w-[200px]">
        <img src={LinesRight} alt="lines" loading="lazy" />
      </div>
      <div className="absolute bottom-80 left-0 mx-w-[480px] max-md:max-w-[200px]">
        <img src={LinesLeft} alt="lines" loading="lazy" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
        <img src={BannerBtm} alt="dev top gradient" className="w-full" />
      </div>
    </section>
  );
};

export default GrowFirmBanner;
