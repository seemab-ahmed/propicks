import React from "react";
import ServicesBg from "../assets/images/service-bg.png";
import ServiceTop from "../assets/images/dev-top.png";
import ServiceBottom from "../assets/images/service-btm.png";
import DashboardImg from "../assets/images/bussiness-grow.png";
import TierTabs from "./TierTabs";
const tiersData = [
  {
    id: 1,
    triggertext: "Tier 1 20%",
    title: "Have full control",
    content: "Take full control of your affiliate program with PropPicks, fully customized to fit your vision and needs!",
    image: "/images/tier1.png", // Replace with your image path
  },
  {
    id: 2,
    triggertext: "Tier 2 10%",
    title: "Customize your journey",
    content: "Tier 2 offers 10% benefits.",
    image: "/images/tier2.png", // Replace with your image path
  },
  {
    id: 3,
    triggertext: "Tier 3 5%",
    title: "Maximize results",
    content: "Tier 3 offers 5% benefits.",
    image: "/images/tier3.png", // Replace with your image path
  },
];
const AdvancedPlatform = () => {
  return (
    <section
      className="pt-[82px] pb-[140px] bg-no-repeat bg-cover relative overflow-hidden max-lg:py-28 max-md:pt-10 max-md:pb-[106px]"
      style={{
        background: `url(${ServicesBg}) no-repeat center/cover `,
        backgroundPositionX: "center",
        backgroundPositionY: "0%",
      }}
    >
      <div className="absolute top-0 left-0 right-0 w-full">
        <img src={ServiceTop} alt="service top gradient" className="w-full" />
      </div>
      <div className="container relative z-[1] max-w-[1260px] mx-auto">
        <div className="text-center ">
          <h2 className="text-[120px] text-white font-bold leading-none tracking-[-4px] mb-16 max-xl:text-[90px]  max-md:text-4xl max-md:tracking-[-1.44px]">
            The most advanced direct selling platform
          </h2>
        </div>
        <div
          className="col-span-12 bg-cover pt-[60px] ps-[50px]  rounded-[32px] overflow-hidden max-xl:ps-[34px] max-lg:pl-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #1972F5, #1972F5), linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <div className="grid grid-cols-12 gap-[10px] items-stretch max-lg:gap-0 max-md:grid-cols-1">
            <div className=" col-span-5  max-lg:col-span-6 max-md:px-7 max-md:pt-8 max-md:mb-[-20px]">
              <h3 className="text-[32px] font-bold leading-none text-white mb-5 tracking-[-0.5px]  max-xl:text-3xl max-lg:text-[28px] max-md:mb-[10px] max-md:max-w-[180px]">
                Watch your business grow
              </h3>
              <p className="text-[23px] font-normal leading-10 text-[#ffffffcd]  mx-auto max-xl:text-[22px] max-xl:leading-normal max-md:text-sm ">
                Build your ideal affiliate program, tailored to your unique
                needs, and watch your business grow at an unparalleled pace.
                With a focus on scalability and performance, we help you design
                systems that drive rapid, sustainable success.
              </p>
            </div>
            <figure className="col-span-7 self-end max-lg:col-span-6 flex justify-end">
              <img src={DashboardImg} alt="faceid" />
            </figure>
          </div>
        </div>
        {/* tier tabs */}
        <TierTabs TabHeading="Offer A Tier System" tiers={tiersData} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src={ServiceBottom} alt="service bottom gradient" className="w-full" />
      </div>
    </section>
  );
};

export default AdvancedPlatform;
