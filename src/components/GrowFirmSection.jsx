import React from "react";
import ServicesBg from "../assets/images/service-bg.png";
import ServiceTop from "../assets/images/dev-top.png";
import ServiceBottom from "../assets/images/service-btm.png";
import GrowCardImg from "../assets/images/grow-card-img.png";
import GrowCardIcon from "../assets/images/grow-card-icon.png";
import work1 from "../assets/images/work-tab2.png";
import work2 from "../assets/images/work-tab2.png";
import work3 from "../assets/images/work-tab2.png";
import TierTabs from "./TierTabs";
const WorktabsData = [
  {
    id: 1,
    triggertext: "Jump on a call",
    title: "Have full control",
    content: "Take full control of your affiliate program with PropPicks, fully customized to fit your vision and needs!",
    image: work1, // Replace with your image path
  },
  {
    id: 2,
    triggertext: "Let us build and develop your firm",
    title: "Design your dream firm",
    content: "Design your dream firm with precision and innovation, tailored to reflect your vision and built to exceed your expectations.",
    image: work2, // Replace with your image path
  },
  {
    id: 3,
    triggertext: "Launch and grow with PropPicks",
    title: "Maximize results",
    content: "Tier 3 offers 5% benefits.",
    image: work3, // Replace with your image path
  },
];
const GrowFirmSection = () => {
  return (
    <section
      className="pt-[82px] pb-[140px] bg-no-repeat bg-cover relative overflow-hidden 
      max-lg:py-24 max-md:pt-10 max-md:py-10"
      style={{
        background: `url(${ServicesBg}) no-repeat center/cover `,
        backgroundPositionX: "center",
        backgroundPositionY: "0%",
      }}
    >
      <div className="absolute top-0 left-0 right-0 w-full">
        <img src={ServiceTop} alt="service top gradient" loading="lazy" className="w-full" />
      </div>
      <div className="container relative z-[1] max-w-[1260px] mx-auto">
        <div className="text-center ">
          <h2 className="text-[120px] text-white font-bold leading-none tracking-[-4px] mb-5 max-xl:text-[90px]  max-lg:text-[62px] max-md:text-4xl max-md:tracking-[-1.44px]">
          Grow your firm
          </h2>
          <p className="max-w-[708px] mx-auto mb-[60px] text-2xl leading-10 text-[#C5CEE6] max-lg:text-xl max-lg:mb-10">Expand and elevate your firm with innovative solutions designed to drive growth and success.</p>
        </div>
        <div
          className="col-span-12 bg-cover pt-[60px] ps-[50px]  rounded-[32px] overflow-hidden 
          max-xl:ps-[34px] max-lg:ps-8 max-lg:pt-8"
          style={{
            background: "linear-gradient(180deg, #4519F5, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #4519F5",
          }}
        >
          <div className="grid grid-cols-12 gap-[10px] items-stretch max-lg:gap-0 max-md:grid-cols-1 max-md:gap-6">
            <div className=" col-span-5  max-lg:col-span-6 ">
              <div>
                <h3 className="text-[32px] font-bold leading-none text-white mb-5 tracking-[-0.5px]  max-xl:text-3xl max-lg:text-[26px] max-lg:mb-[10px]">
                Custom tier system
                </h3>
                <p className="text-[23px] font-normal leading-10 text-[#ffffffcd]  mx-auto max-xl:text-[22px] max-xl:leading-normal max-lg:text-lg max-md:text-base ">
                Boost engagement and loyalty with a custom tier system! Reward progress, motivate users, and grow your firm like never before.
                </p>
              </div>
              <div  className="mx-auto hidden md:block">
                <img src={GrowCardIcon} alt="icon img" loading="lazy" />
              </div>

            </div>
            <figure className="col-span-7 self-end max-lg:col-span-6 flex justify-end">
              <img src={GrowCardImg} alt="faceid" loading="lazy" />
            </figure>
          </div>
        </div>
        {/* tier tabs */}
        <TierTabs TabHeading="How it works" tiers={WorktabsData} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src={ServiceBottom} alt="service bottom gradient" loading="lazy" className="w-full" />
      </div>
    </section>
  );
};

export default GrowFirmSection;
