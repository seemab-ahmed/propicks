import React from "react";
import ServicesBg from "../assets/images/service-bg.png";
import ServiceTop from "../assets/images/dev-top.png";
import iconCard1 from "../assets/images/techcard-icon1.svg";
import iconCard2 from "../assets/images/techcard-icon2.svg";
import iconCard3 from "../assets/images/techcard-icon3.svg";
import iconCard4 from "../assets/images/techcard-icon4.svg";
import ServiceImg1 from "../assets/images/built-solutions.png";
import ServiceImg2 from "../assets/images/cutting-edge.png";
import ServiceImg3 from "../assets/images/seeamless.png";
import ServiceImg4 from "../assets/images/dedicated.png";

const NumberOneTech = () => {
  return (
    <section
      className="pt-[70px] pb-[102px] bg-no-repeat bg-cover relative overflow-hidden max-lg:py-28 max-md:pt-10 max-md:pb-[106px]"
      style={{
        background: `url(${ServicesBg}) no-repeat center/cover`,
        backgroundPositionX: "center",
        backgroundPositionY: "0%",
      }}
    >
      <div className="absolute top-0 left-0 right-0 w-full">
        <img src={ServiceTop} alt="service top gradient" className="w-full" />
      </div>
      <div className="container max-w-[1280px] mx-auto relative z-[1]">
        <div className="text-center">
          <h2 className="text-[120px] text-white font-bold leading-none tracking-[-4.8px] max-lg:text-7xl max-md:text-4xl max-md:tracking-[-1.44px]">
            There is a reason our tech is number 1.
          </h2>
        </div>
        <div className="grid grid-cols-[.85fr_1fr]  gap-6 mt-[70px]  max-md:grid-cols-1 max-md:mt-6"
        >
            {/* card1  */}
          <div
            className="tech-card flex-col justify-between  rounded-[32px] px-10 pt-10 overflow-hidden border border-solid relative border-[#ffffff18] border-l-[rgba(255,255,255,0.09)] border-b-0 border-r-0 max-md:pt-[30px]"
            style={{
              background:
                "radial-gradient(163.07% 161.17% at 6.8% 147.58%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.08) 100%)",
            }}
          >
            <div className="relative z-[2] mb-10">
              <div className="mb-[32px]">
                <img src={iconCard1} alt="card icon" />
              </div>
              <h4 className="text-[32px] font-bold leading-none tracking-[-1.2px] text-white mb-5 max-xl:text-4xl max-lg:text-3xl max-md:text-[28px] max-md:mb-[10px]">
                Custom-Built Solutions
              </h4>
              <p className="text-xl text-[#ffffffcb] leading-loose max-lg:text-lg max-md:text-sm">
                We craft each platform from the ground up, tailored precisely to
                your business goals, no generic solutions here.
              </p>
            </div>
            <div className="flex justify-center mx-auto w-full relative z-0">
              <img src={ServiceImg1} alt="" className="block mx-auto" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 w-full h-[175px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
              }}
            ></div>
          </div>
          {/* card2  */}
          <div
            className="tech-card flex-col justify-between  rounded-[32px] px-10 pt-10 overflow-hidden border border-solid relative border-[#ffffff18] border-l-[rgba(255,255,255,0.09)] border-b-0 border-r-0 max-md:pt-[30px]"
            style={{
              background:
                "radial-gradient(163.07% 161.17% at 6.8% 147.58%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.08) 100%)",
            }}
          >
            <div className="relative z-[2] mb-10">
              <div className="mb-[32px]">
                <img src={iconCard2} alt="card icon" />
              </div>
              <h4 className="text-[32px] font-bold leading-none tracking-[-1.2px] text-white mb-5 max-xl:text-4xl max-lg:text-3xl max-md:text-[28px] max-md:mb-[10px]">
              Cutting-Edge Technology
              </h4>
              <p className="text-xl text-[#ffffffcb] leading-loose max-lg:text-lg max-md:text-sm">
              Leveraging industry-leading tools like React and Node.js, we deliver fast, reliable, and scalable systems.
              </p>
            </div>
            <div className="flex justify-center mx-auto w-full relative z-0">
              <img src={ServiceImg2} alt="" className="block mx-auto" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_.85fr] gap-6 mt-6  max-md:grid-cols-1 "
        >
            {/* card3  */}
          <div
            className="tech-card flex flex-col justify-between  rounded-[32px] px-10 pt-10 overflow-hidden border border-solid relative border-[#ffffff18] border-l-[rgba(255,255,255,0.09)] border-b-0 border-r-0 max-md:pt-[30px]"
            style={{
              background:
                "radial-gradient(163.07% 161.17% at 6.8% 147.58%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.08) 100%)",
            }}
          >
            <div className="relative z-[2] mb-10">
              <div className="mb-[32px]">
                <img src={iconCard3} alt="card icon" />
              </div>
              <h4 className="text-[32px] font-bold leading-none tracking-[-1.2px] text-white mb-5 max-xl:text-4xl max-lg:text-3xl max-md:text-[28px] max-md:mb-[10px]">
              Seamless Integrations
              </h4>
              <p className="text-xl text-[#ffffffcb] leading-loose max-lg:text-lg max-md:text-sm">
              Our tech integrates effortlessly with payment systems, dashboards, and operational tools for a smooth user experience.
              </p>
            </div>
            <div className="flex justify-center mx-auto w-full relative z-0">
              <img src={ServiceImg3} alt="" className="block mx-auto" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 w-full h-[54px]"
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
              }}
            ></div>
          </div>
          {/* card4 */}
          <div
            className="tech-card  flex-col justify-between  rounded-[32px] px-10 pt-10 overflow-hidden border border-solid relative border-[#ffffff18] border-l-[rgba(255,255,255,0.09)] border-b-0 border-r-0 max-md:pt-[30px]"
            style={{
              background:
                "radial-gradient(163.07% 161.17% at 6.8% 147.58%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.08) 100%)",
            }}
          >
            <div className="relative z-[2] mb-10">
              <div className="mb-[32px]">
                <img src={iconCard4} alt="card icon" />
              </div>
              <h4 className="text-[32px] font-bold leading-none tracking-[-1.2px] text-white mb-5 max-xl:text-4xl max-lg:text-3xl max-md:text-[28px] max-md:mb-[10px]">
              Dedicated Support & Innovation
              </h4>
              <p className="text-xl text-[#ffffffcb] leading-loose max-lg:text-lg max-md:text-sm">
              We don't just build; we continuously innovate and provide unmatched support to ensure your success.
              </p>
            </div>
            <div className="flex justify-center mx-auto w-full relative z-0">
              <img src={ServiceImg4} alt="" className="block mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberOneTech;
