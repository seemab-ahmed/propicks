import React from "react";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import OddsDash from "../assets/video/odds-vid.webm";
import ServicesBtm from "../assets/images/service-btm.png";
const CustomOdds = () => {
  return (
    <section className="pt-[142px] text-center relative z-[2] overflow-hidden max-lg:pt-28 max-md:pt-12">
      <div className="container">
        <h2 className="text-[120px]  font-bold leading-none mb-5 max-xl:text-8xl max-lg:text-7xl max-md:text-4xl max-md:mb-2 ">
          <span className="bg-tab-gradient">Custom Your Odds </span>
        </h2>
        <p className="text-2xl mb-12 leading-10 font-normal text-[#CCCDCD] max-w-[896px] w-full mx-auto max-lg:text-xl max-lg:leading-relaxed max-md:text-base">
          Offer your clients an unparalleled experience with access to over
          1,000 games and more than 500 betting options, ensuring endless
          possibilities to choose from.
        </p>
      </div>
      <div>
      <video width="100%" height="100%" className="w-full h-full object-cover" autoPlay muted loop>
            <source src={OddsDash} type="video/mp4" />
            <source src={OddsDash} type="video/ogg" />
      </video>
      </div>
      {/* Banner Lines */}
      <div className="absolute top-32 right-0 mx-w-[480px] max-xl:max-w-[380px] max-lg:max-w-[300px] max-md:max-w-[200px]">
        <img src={LinesRight} alt="lines" loading="lazy" />
      </div>
      <div className="absolute top-32 left-0 mx-w-[480px] max-xl:max-w-[380px] max-lg:max-w-[300px] max-md:max-w-[200px]">
        <img src={LinesLeft} alt="lines" loading="lazy" />
      </div>
      {/* btm-img  */}
      <div className="absolute bottom-[-3px] left-0 right-0 w-full">
        <img src={ServicesBtm} alt="service top gradient" className="w-full" />
      </div>
    </section>
  );
};

export default CustomOdds;
