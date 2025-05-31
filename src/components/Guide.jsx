import React from "react";
import { Link } from "react-router-dom";
import GuideTop from "../assets/images/guide-top.svg";
import GuideBtm from "../assets/images/service-btm.png";
import Card1Img from "../assets/images/card-1-bg.jpg";
import Card2Img from "../assets/images/card-2-bg.jpg";
import Card3Img from "../assets/images/card-3-bg.jpg";
import Card4Img from "../assets/images/card-4-bg.jpg";
import FaceIdImg from "../assets/images/face-id.png";
import StatsImg from "../assets/images/stats-image.png";
import StatsVid from "../assets/video/guide-vid2.webm";
import PricingImg from "../assets/images/pricing-img.png";
import PricingVid from "../assets/video/guide-vid3.webm";
import DashboardImg from "../assets/images/dashboard-img.png";
import IdentificationImg from "../assets/images/Identity-Verification.gif";
import GuideBg from "../assets/images/guide-bg.png"; // <-- LCP image

const Guide = () => {
  return (
    <section className="py-20 bg-contain relative overflow-hidden">

      {/* 👇 Absolutely position LCP background for faster LCP detection */}
      <img
        src={GuideBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        fetchpriority="high"
        decoding="async"
        loading="eager"
      />

      <div className="absolute top-[-1px] left-0 right-0 w-full z-[1]">
        <img
          src={GuideTop}
          alt="Gradient Top"
          loading="lazy"
          decoding="async"
          className="w-full"
        />
      </div>

      <div className="container relative z-[2]">
        <div className="text-center mb-10 max-md:mb-8">
          <h2 className="text-[120px] font-bold leading-tight text-white tracking-[-4.8px] mb-5 max-xl:text-[92px] max-lg:text-7xl max-lg:leading-snug max-md:text-4xl max-md:tracking-[-1.2px]">
            We guide you through <span className="bg-heading-gradient">everything</span>.
          </h2>
          <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-lg:text-xl max-md:text-base">
            PropPicks Tech guides you every step of the way in building your dream prop firm...
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* === CARD 1 === */}
          <div
            className="col-span-12 bg-cover min-h-[150px] py-14 px-16 rounded-3xl relative max-lg:py-10 max-lg:px-10 max-md:px-0 max-md:pb-0 max-md:pt-7"
            style={{ backgroundImage: `url(${Card1Img})` }}
          >
            <div className="grid grid-cols-2 gap-7 items-center max-md:grid-cols-1">
              <figure className="max-md:order-2 max-md:mr-auto max-md:max-w-[85%] max-md:max-h-[322px]">
                <img
                  src={IdentificationImg}
                  alt="faceid gif"
                  loading="lazy"
                  decoding="async"
                  className="hidden md:block"
                />
                <img
                  src={FaceIdImg}
                  alt="faceid"
                  loading="lazy"
                  decoding="async"
                  className="block md:hidden"
                />
              </figure>
              <div className="text-center max-md:order-1 max-md:px-8">
                <h3 className="text-5xl font-bold text-white mb-5">Integrate & Guide</h3>
                <p className="text-lg text-[#C5CEE6]">We handle the integration...</p>
              </div>
            </div>
          </div>

          {/* === CARD 2 === */}
          <div
            className="col-span-6 bg-cover py-16 px-10 rounded-[36px] max-md:col-span-12"
            style={{ backgroundImage: `url(${Card2Img})` }}
          >
            <figure className="mb-[110px] block md:hidden">
              <img src={StatsImg} alt="stats" loading="lazy" decoding="async" />
            </figure>
            <video
              width="100%"
              height="100%"
              className="w-full object-cover mb-[110px] hidden md:block"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src={StatsVid} type="video/webm" />
            </video>
            <div>
              <h3 className="text-5xl font-bold text-white mb-5">Launch & Scale</h3>
              <p className="text-lg text-[#C5CEE6]">With your firm ready to go...</p>
            </div>
          </div>

          {/* === CARD 3 === */}
          <div
            className="col-span-6 bg-cover pt-4 rounded-[36px] max-md:col-span-12"
            style={{ backgroundImage: `url(${Card3Img})` }}
          >
            <figure className="block md:hidden">
              <img
                src={PricingImg}
                alt="pricing"
                loading="lazy"
                decoding="async"
                className="max-h-[390px] w-full"
              />
            </figure>
            <video
              width="100%"
              height="100%"
              className="w-full h-full object-cover hidden md:block"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src={PricingVid} type="video/webm" />
            </video>
            <div className="p-10">
              <h3 className="text-5xl font-bold text-white mb-5">Develop Custom Plans</h3>
              <p className="text-lg text-[#C5CEE6]">Our team collaborates...</p>
            </div>
          </div>

          {/* === CARD 4 === */}
          <div
            className="col-span-12 bg-cover pl-16 rounded-3xl max-lg:pl-0"
            style={{ backgroundImage: `url(${Card4Img})` }}
          >
            <div className="grid grid-cols-12 items-center max-md:grid-cols-1">
              <div className="text-center col-span-5 max-md:px-7">
                <h3 className="text-5xl font-bold text-white mb-5">Design & Build</h3>
                <p className="text-lg text-[#C5CEE6]">We bring your vision to life...</p>
              </div>
              <figure className="col-span-7 self-end">
                <img src={DashboardImg} alt="dashboard" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16 max-md:mt-8">
          <Link
            to="/development"
            className="btn blue py-5 px-10 text-lg text-white rounded-[10px] border border-[#3D7FDE]"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
            }}
          >
            <span className="relative z-[2]">Development</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 w-full z-[1]">
        <img
          src={GuideBtm}
          alt="Gradient Btm"
          loading="lazy"
          decoding="async"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Guide;
