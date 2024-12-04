import React, { useState } from "react";
import NodeImg from "../assets/images/node.png"
import { Link } from "react-router-dom";

const DevTabs = () => {
  const [activeTab, setActiveTab] = useState("React Node.js");

  const tabs = [
    {
      name: "React Node.js",
      image: NodeImg,
    },
    {
      name: "Front-end",
      image: NodeImg,
    },
    {
      name: "Back-end",
      image: NodeImg,
    },
    {
      name: "CMS",
      image: NodeImg,
    },
  ];

  return (
    <div className="max-w-[1370px] mx-auto w-[90%] mt-[72px] max-md:overflow-hidden max-md:mt-6">
      {/* Tabs */}
      <div className="grid grid-cols-4 gap-[10px] mb-6 max-md:gap-[9.5rem] max-md:pb-3 max-md:overflow-scroll max-md:mb-3">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`btn tab cursor-pointer px-6 py-5 rounded-full text-lg leading-none text-center  border border-solid border-[rgba(0,0,0,0.10)] transition-all duration-500 ease-in-out ${
              activeTab === tab.name
                ? " active bg-tab-gradient  text-white font-bold"
                : "bg-white text-[#040B20] font-normal"
            } max-lg:px-4 py-3 max-lg:text-base max-md:text-nowrap max-md:w-[140px] max-md:py-[10px]`}
            style={{
              transition: "all 0.4s ease-in-out",
            }}
          >
            <span className="relative z-[2]">{tab.name}</span>
          </Link>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-center">
        <img
          src={tabs.find((tab) => tab.name === activeTab)?.image}
          alt={activeTab}
          className="w-full  rounded-md shadow-md"
        />
        <p>{tabs.find((tab) => tab.name === activeTab)?.content}</p>
      </div>
    </div>
  );
};

export default DevTabs;
