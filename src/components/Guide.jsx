import React from "react";
import GuideBg from "../assets/images/guide-bg.png";
import GuideTop from "../assets/images/guide-gradient-top.png";
import GuideBtm from "../assets/images/guide-gradient-btm.png";
import Card1Img from "../assets/images/card-1-bg.jpg";
import Card2Img from "../assets/images/card-2-bg.jpg";
import Card3Img from "../assets/images/card-3-bg.jpg";
import Card4Img from "../assets/images/card-4-bg.jpg";
import FaceIdImg from "../assets/images/face-id.png";
import StatsImg from "../assets/images/stats.png";
import PricingImg from "../assets/images/pricing-img.png";
import DashboardImg from "../assets/images/dashboard-img.png";

const Guide = () => {
  return (
    <section className="py-20 bg-contain relative"
    style={{
      background: `url(${GuideBg}) no-repeat center center`,
    }}>
      <div className="absolute top-0 left-0 right-0 w-full">
        <img src={GuideTop} alt="Gradient Img" className="w-full"/>
      </div>
      <div className="container relative z-[2]">
        <div className="text-center mb-10">
          <h2 className="text-[120px] font-bold leading-tight text-white -tracking-[4.8px] mb-5">
            What guide you through{" "}
            <span className="bg-heading-gradient">everything</span>.
          </h2>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD]">
            PropPicks Tech guides you every step of the way in building your
            dream prop firm—whether it's for sports, forex, or futures. From
            concept to launch, we provide the tools, expertise, and support to
            bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div
            className="col-span-12 bg-cover py-14 px-16 rounded-3xl"
            style={{ backgroundImage: `url(${Card1Img})` }}
          >
            <div className="grid grid-cols-2 gap-7 items-center">
              <figure>
                <img src={FaceIdImg} alt="faceid" />
              </figure>
              <div className="text-center">
                <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px]">
                  Integrate & Guide Through the Essentials
                </h3>
                <p className="text-lg font-normal leading-8 text-[#C5CEE6]">
                  We handle the integration of every essential tool and platform
                  you need to run your prop firm, from trading systems and
                  analytics to account management and client interfaces.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-span-6 bg-cover py-16 px-10 rounded-[36px]"
            style={{ backgroundImage: `url(${Card2Img})` }}
          >
            <figure className="mb-[110px]">
              <img src={StatsImg} alt="statsImg" />
            </figure>
            <div>
              <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px]">
                Launch & Scale Your Firm
              </h3>
              <p className="text-lg font-normal leading-8 text-[#C5CEE6]">
                With your firm ready to go, we support you through launch and
                beyond, helping you scale efficiently as your business reaches
                new heights.
              </p>
            </div>
          </div>
          <div
            className="col-span-6 bg-cover pt-4 rounded-[36px]"
            style={{ backgroundImage: `url(${Card3Img})` }}
          >
            <figure>
              <img
                src={PricingImg}
                alt="pricing-img"
                className="max-h-[390px] w-full"
              />
            </figure>
            <div className="p-10">
              <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px]">
                Develop Custom Plans with Risk Management
              </h3>
              <p className="text-lg font-normal leading-8 text-[#C5CEE6]">
                Our team collaborates with you to create custom plans, embedding
                risk management strategies that align with your business goals
                and protect your capital.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 bg-cover pl-16 rounded-3xl"
            style={{ backgroundImage: `url(${Card4Img})` }}
          >
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="text-center col-span-5 -mr-20">
                <h3 className="text-5xl font-bold leading-none text-white mb-5 -tracking-[0.96px]">
                  Design & Build <br />
                  Your Brand
                </h3>
                <p className="text-lg font-normal leading-8 text-[#C5CEE6] max-w-[560px] w-full mx-auto">
                  We bring your vision to life with custom Figma designs and a
                  cohesive brand identity, setting the foundation for a
                  distinctive and professional prop firm either forex or sports.
                </p>
              </div>
              <figure className="col-span-7">
                <img src={DashboardImg} alt="faceid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-2px] left-0 right-0 w-full z-[1]">
        <img src={GuideBtm} alt="Gradient Img" className="w-full" />
      </div>
    </section>
  );
};

export default Guide;
