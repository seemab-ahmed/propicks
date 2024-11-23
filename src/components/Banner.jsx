import React from "react";
import BannerImg from "../assets/images/banner-bg.png"

const Banner = () => {
  return (
    <section
      className="pt-[144px] pb-[630px] bg-center bg-cover"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="container">
        <div className="text-center">
          <h1 className="text-[90px] text-white font-bold leading-none mb-5">
            Powering every winning
            <br /> sports <span className="bg-heading-gradient">prop firm</span>.
          </h1>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-w-[723px] w-full mx-auto">
            Unleash the power of advanced technology to transform your business
            and fuel unprecedented growth, driving results beyond 200%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
