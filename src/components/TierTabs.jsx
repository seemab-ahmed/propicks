import React, { useState } from "react";

const TierTabs = ({ TabHeading, tiers }) => {
  const [activeTab, setActiveTab] = useState(2);

  // Find the active tab's data
  const activeTier = tiers.find((tier) => tier.id === activeTab);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-white mt-6 max-md:gap-[10px] max-md:mt-[10px]">
      {/* Tab Content Pane */}
      <div className=" md:col-span-7 bg-[#03081847] border border-solid border-[rgba(255,255,255,0.1)] rounded-[32px] px-10 pt-10 flex flex-col items-start justify-between max-lg:px-7 max-lg:pt-7">
        <div>
          <h4 className="text-[32px] font-bold leading-none text-white mb-5 tracking-[-0.04em] max-xl:text-3xl max-lg:text-[28px] max-md:mb-[10px]">
            {activeTier.title} {/* Dynamic heading */}
          </h4>
          <p className="text-xl leading-loose text-[#ffffffcc] mb-5 max-lg:text-lg ">
            {activeTier.content} {/* Dynamic content */}
          </p>
        </div>
        <div className="mx-auto max-w-[530px] ">
          <img
            src={activeTier.image}
            alt={`Tier ${activeTier.id}`}
            className="w-full"
          />
        </div>
      </div>

      {/* Tab Button List */}
      <div className="md:col-span-5 flex flex-col bg-[#03081847] border border-solid border-[rgba(255,255,255,0.1)] 
      rounded-[32px] p-10 gap-3 max-lg:p-6">
        <h4 className="text-[32px] font-bold leading-none text-white mb-1 tracking-[-0.04em] max-lg:text-[26px]">
          {TabHeading}
        </h4>

        {tiers.map((tier) => (
          <button
            key={tier.id}
            onClick={() => setActiveTab(tier.id)}
            className={` flex items-center text-left p-3 rounded-[10px] border border-solid border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] transition-all duration-500 ease-in-out ${
              activeTab === tier.id
                ? "text-white"
                : "hover:bg-gray-600"
            }`}
            style={
              activeTab === tier.id
                ? {
                    background:
                      "linear-gradient(0deg, #1972F5, #1972F5), linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
                    boxShadow:
                      "0px 0px 7.9px 0px #EEEFFF inset, 0px 3.16px 23.48px 0px #584BFF8F",
                  }
                : { backdropFilter: "blur(5px)" }
            }
          >
            <span className="w-[35px] h-[35px] text-base leading-[35px] text-center mr-3 px-1 
            rounded-full border border-solid border-[rgba(255,255,255,0.1)] 
            bg-[rgba(255,255,255,0.1)] max-lg:w-8 max-lg:h-8 max-lg:p-[0px] max-lg:leading-[32px]">
              {tier.id}
            </span>{" "}
            <span className="text-base text-white leading-none w-[80%]">
              {tier.triggertext}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TierTabs;
