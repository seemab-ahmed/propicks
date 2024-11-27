import React, { useState } from "react";
import NodeImg from "../assets/images/node.png"

const DevTabs = () => {
  const [activeTab, setActiveTab] = useState("React Node.js");

  const tabs = [
    {
      name: "React Node.js",
      image: NodeImg, // Example image path
    },
    {
      name: "Front-end",
      image: NodeImg, // Example image path
    },
    {
      name: "Back-end",
      image: NodeImg, // Example image path
    },
    {
      name: "CMS",
      image: NodeImg,
    },
  ];

  return (
    <div className="max-w-[1370px] mx-auto w-[90%] mt-[72px]">
      {/* Tabs */}
      <div className="grid grid-cols-4 gap-[10px] mb-6">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`cursor-pointer px-6 py-5 rounded-full text-lg leading-none text-center  border border-solid border-[rgba(0,0,0,0.10)] transition-all duration-500 ease-in-out ${
              activeTab === tab.name
                ? "bg-tab-gradient text-white font-bold"
                : "bg-white text-[#040B20] font-normal"
            } hover:bg-tab-gradient `}
            style={{
              transition: "all 0.9s ease-in-out",
            }}
          >
            {tab.name}
          </div>
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
