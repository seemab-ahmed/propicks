import React from "react";
import BuildingBG from "../assets/images/building-bg.png";
import BuildingBtm from "../assets/images/building-btm.png";
import BuildingIcon from "../assets/images/building-icon.svg";
const Building = () => {

  return (
    <section
    className="pt-[140px] bg-no-repeat bg-cover mb-[-350px]"
      style={{
        background: `url(${BuildingBG}) no-repeat center/cover `,
        backgroundPositionX:"center",
        backgroundPositionY:"0%",
        
      }}
    >
      <div className="container max-w-[886px] mx-auto">
        <div className="text-center">
          <div className="mx-auto flex justify-center mb-[-60px]"><img src={BuildingIcon} alt="" /></div>
          <h2 className="text-[180px] text-white font-bold leading-none tracking-[-7.2px] mb-5">
          <strong className=" text-[#1972F5] block">Building</strong> Brand Identity
          </h2>
          <p className="text-2xl leading-9 text-center font-normal text-textLight max-w-[870px] w-full mx-auto mb-16">
          we know that a compelling brand identity is the cornerstone of success. That’s why we work with you to create a brand that resonates with your target audience and reflects your vision.
          </p>
        </div>

        {/* FAQ Cards */}
      </div>
        <div className="space-y-[10px] flex justify-end relative z-10">
            <img src={BuildingBtm} alt="buildingbtm" />
        </div>
    </section>
  );
};

export default Building;
