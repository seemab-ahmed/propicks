import React from "react";
import GuideBg from "../assets/images/guide-bg.png";
import GuideTop from "../assets/images/guide-top.svg";
import GuideBtm from "../assets/images/service-btm.png";
import Card1Img from "../assets/images/card-1-bg.jpg";
import Card2Img from "../assets/images/card-2-bg.jpg";
import Card3Img from "../assets/images/card-3-bg.jpg";
import Card4Img from "../assets/images/card-4-bg.jpg";
// import FaceIdImg from "../assets/images/face-id.png";
// import StatsImg from "../assets/images/StatsNew.gif";
import StatsVid from "../assets/video/guide-vid2.webm"
// import PricingImg from "../assets/images/pricing-img.png";
import PricingVid from "../assets/video/guide-vid3.webm";
import DashboardImg from "../assets/images/dashboard-img.png";
import IdentificationImg from "../assets/images/Identity-Verification.gif";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <section
      className="py-20 bg-contain relative"
      style={{
        background: `url(${GuideBg}) no-repeat center center`,
      }}
    >
      <div className="absolute top-[-1px] left-0 right-0 w-full">
        <img src={GuideTop} alt="Gradient Img" className="w-full" />
      </div>
      <div className="container relative z-[2]">
        <div className="text-center mb-10 max-md:mb-8">
          <h2 className="text-[120px] font-bold leading-tight text-white tracking-[-4.8px] mb-5 max-xl:text-[92px]  max-lg:text-7xl max-lg:leading-snug max-md:text-4xl max-md:tracking-[-1.2px]">
            We guide you through{" "}
            <span className="bg-heading-gradient">everything</span>.
          </h2>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-lg:text-xl max-md:text-base">
            PropPicks Tech guides you every step of the way in building your
            dream prop firm—whether it's for sports, forex, or futures. From
            concept to launch, we provide the tools, expertise, and support to
            bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div
            className="col-span-12 bg-cover py-14 px-16 rounded-3xl max-lg:py-10 max-lg:px-10 max-md:px-0 max-md:pb-0 max-md:pt-7"
            style={{ backgroundImage: `url(${Card1Img})` }}
          >
            <div className="grid grid-cols-2 gap-7 items-center max-md:grid-cols-1">
              <figure className="max-md:order-2 max-md:mr-auto max-md:max-w-[85%] max-md:max-h-[322px]">
                <img src={IdentificationImg} alt="faceid" />
              </figure>
              <div className="text-center max-md:order-1 max-md:px-8">
                <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px] max-xl:text-3xl max-lg:text-[28px]  max-md:mb-[10px]">
                  Integrate & Guide Through the Essentials
                </h3>
                <p className="text-lg font-normal leading-8 text-[#C5CEE6] max-lg:text-base max-md:text-sm">
                  We handle the integration of every essential tool and platform
                  you need to run your prop firm, from trading systems and
                  analytics to account management and client interfaces.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-span-6 grid grid-cols-1 bg-cover py-16 px-10 rounded-[36px] max-lg:py-10 max-lg:px-0 max-md:col-span-12 max-md:py-7 max-md:px-8 max-md:overflow-hidden"
            style={{ backgroundImage: `url(${Card2Img})` }}
          >
            {/* <figure className="mb-[110px] max-lg:mb-6 max-md:order-2 max-md:mb-0 max-md:mx-[-20px]">
              <img src={StatsImg} alt="statsImg" />
            </figure> */}
            <video width="100%" height="100%" className="w-full object-cover mb-[110px] max-lg:mb-6" autoPlay muted loop>
              <source src={StatsVid} type="video/mp4" />
              <source src={StatsVid} type="video/ogg" />
            </video>
            <div className="max-lg:px-7 max-md:order-1 max-md:text-center max-md:p-0">
              <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px] max-xl:text-3xl max-lg:text-[28px] max-md:mb-[10px]">
                Launch & Scale Your Firm
              </h3>
              <p className="text-lg font-normal leading-8 text-[#C5CEE6] max-lg:text-base max-md:text-sm">
                With your firm ready to go, we support you through launch and
                beyond, helping you scale efficiently as your business reaches
                new heights.
              </p>
            </div>
          </div>
          <div
            className="col-span-6 grid grid-cols-1 bg-cover pt-4 rounded-[36px] max-lg:py-10 max-lg:px-7 max-md:col-span-12 max-md:p-0"
            style={{ backgroundImage: `url(${Card3Img})` }}
          >
            {/* <figure className="max-md:order-2">
              <img
                src={PricingImg}
                alt="pricing-img"
                className="max-h-[390px] w-full"
              />
            </figure> */}
            <video width="100%" height="100%" className="w-full h-full object-cover" autoPlay muted loop>
              <source src={PricingVid} type="video/mp4" />
              <source src={PricingVid} type="video/ogg" />
            </video>
            <div className="p-10 max-lg:p-0 max-lg:mt-6 max-md:order-1 max-md:text-center max-md:px-7 max-md:pt-8 max-md:mt-0 max-md:mb-4">
              <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px] max-xl:text-3xl max-lg:text-[28px] max-md:mb-[10px]">
                Develop Custom Plans with Risk Management
              </h3>
              <p className="text-lg font-normal leading-8 text-[#C5CEE6] max-lg:text-base max-md:text-sm">
                Our team collaborates with you to create custom plans, embedding
                risk management strategies that align with your business goals
                and protect your capital.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 bg-cover pl-16 rounded-3xl max-lg:pl-0"
            style={{ backgroundImage: `url(${Card4Img})` }}
          >
            <div className="grid grid-cols-12 gap-5 items-center max-lg:gap-0 max-md:grid-cols-1">
              <div className="text-center col-span-5 max-lg:pl-7 max-lg:col-span-6 max-md:px-7 max-md:pt-8 max-md:mb-[-20px]">
                <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px] max-w-[360px] mx-auto max-xl:text-3xl max-lg:text-[28px] max-md:mb-[10px] max-md:max-w-[180px]">
                  Design & Build Your Brand
                </h3>
                <p className="text-lg font-normal leading-8 text-[#C5CEE6] max-w-[560px] w-full mx-auto max-lg:text-base max-md:text-sm ">
                  We bring your vision to life with custom Figma designs and a
                  cohesive brand identity, setting the foundation for a
                  distinctive and professional prop firm either forex or sports.
                </p>
              </div>
              <figure className="col-span-7 self-end max-lg:col-span-6 ">
                <img src={DashboardImg} alt="faceid" />
              </figure>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 max-md:mt-8">
          <Link
            to="/"
            className="btn blue text-center py-5 px-10 text-lg leading-none block text-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)]  max-md:text-base hover:text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
            }}
          >
            <span className="relative z-[2]">Development</span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[-2px] left-0 right-0 w-full z-[1]">
        <img src={GuideBtm} alt="Gradient Img" className="w-full" />
      </div>
    </section>
  );
};

export default Guide;
