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
import GuideBg from "../assets/images/guide-bg.png";

const Guide = ({isMobile, isIntersecting}) => {

  return (
    <section 
      id="guide-section"
      className="py-20 bg-contain relative overflow-hidden mt-[-2px]"
    >
      {/* LCP background - optimized with eager loading */}
      <img
        src={GuideBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        width="1920"
        height="1080"
      />

      {/* Top gradient - SVG is already optimized */}
      <div className="absolute top-[-1px] left-0 right-0 w-full z-[1]">
        <img
          src={GuideTop}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full"
          width="1920"
          height="150"
        />
      </div>

      <div className="container relative z-[2]">
        <div className="text-center mb-10 max-md:mb-8">
          <h2 className="text-[120px] font-bold leading-tight text-white tracking-[-4.8px] mb-5 max-xl:text-[92px] max-lg:text-7xl max-lg:leading-snug max-md:text-4xl max-md:tracking-[-1.2px]">
            We guide you through <span className="bg-heading-gradient">everything</span>.
          </h2>
          <p className="text-2xl leading-10 max-w-[1140px] mx-auto font-normal text-[#CCCDCD] max-lg:text-xl max-md:text-base">
            PropPicks Tech guides you every step of the way in building your dream prop firm—whether it's for sports, 
            forex, or futures. From concept to launch, we provide the tools, expertise, and support to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* === CARD 1 === */}
          <div
            className="col-span-12 bg-cover min-h-[150px] py-14 px-16 rounded-3xl relative max-lg:py-10 max-lg:px-10 max-md:px-0 max-md:pb-0 max-md:pt-7"
            style={{ backgroundImage: `url(${Card1Img})` }}
          >
            <div className="grid grid-cols-2 gap-7 items-center max-md:grid-cols-1">
              {!isMobile ? (
                <figure className="max-md:order-2 max-md:mr-auto max-md:max-w-[85%] max-md:max-h-[322px]">
                  {isIntersecting && (
                    <img
                      src={IdentificationImg}
                      alt="Face ID verification"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                  )}
                </figure>
              ) : (
                <figure className="max-md:order-2 max-md:mr-auto max-md:max-w-[85%] max-md:max-h-[322px]">
                  <img
                    src={FaceIdImg}
                    alt="Face ID verification"
                    loading="lazy"
                    decoding="async"
                    className="block max-md:max-h-[322px]"
                    width="600"
                    height="400"
                  />
                </figure>
              )}
              <div className="text-center max-md:order-1 max-md:px-8">
                <h3 className="text-5xl leading-none font-bold text-white mb-5 max-md:text-[28px]">Integrate & Guide Through the Essentials</h3>
                <p className="text-lg text-[#C5CEE6] max-md:text-base max-sm:text-sm">
                  We handle the integration of every essential tool and platform you need to run your prop firm, 
                  from trading systems and analytics to account management and client interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* === CARD 2 === */}
          <div
            className="col-span-6 bg-cover py-16 px-10 rounded-[36px] max-md:col-span-12 max-md:px-7 max-md:pt-8 max-md:pb-0 relative" 
            style={{ backgroundImage: `url(${Card2Img})` }}
          >
            {!isMobile && isIntersecting && (
              <video
                width="100%"
                height="100%"
                className="w-full object-cover mb-[125px]"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-label="Stats video demonstration"
              >
                <source src={StatsVid} type="video/webm" />
              </video>
            )}
            <div className="relative z-[1]">
              <h3 className="text-[38px] leading-none font-bold text-white mb-5 max-md:text-[28px] max-md:text-center">Launch & Scale Your Firm</h3>
              <p className="text-lg text-[#C5CEE6] max-md:text-base max-sm:text-sm max-md:text-center">With your firm ready to go, we support you through launch and beyond, helping you scale efficiently as your business reaches new heights.</p>
            </div>
            {isMobile && (
              <figure className="mt-[20px] -mx-6 relative z-[1]">
                <img 
                  src={StatsImg} 
                  alt="Statistics dashboard" 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                />
              </figure>
            )}
            <div className="absolute inset-0 w-full h-full bg-[#0000003c] hidden max-md:block"></div>
          </div>

          {/* === CARD 3 === */}
          <div
            className="col-span-6 bg-cover pt-4 rounded-[36px] max-md:col-span-12"
            style={{ backgroundImage: `url(${Card3Img})` }}
          >
            {!isMobile && isIntersecting && (
              <video
                width="100%"
                height="100%"
                className="w-full h-full object-cover max-h-[392px] my-[-10px] max-xl::max-h-[300px] max-lg:max-h-[220px]"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-label="Pricing video demonstration"
              >
                <source src={PricingVid} type="video/webm" />
              </video>
            )}
            <div className="p-10 max-md:p-7 max-md:text-center">
              <h3 className="text-[38px] leading-none font-bold text-white mb-5 max-md:text-[28px]">Develop Custom Plans with Risk Management</h3>
              <p className="text-lg text-[#C5CEE6] max-md:text-base max-sm:text-sm">Our team collaborates with you to create custom plans, embedding risk management strategies that align with your business goals and protect your capital.</p>
            </div>
            {isMobile && (
              <figure>
                <img
                  src={PricingImg}
                  alt="Pricing plans"
                  loading="lazy"
                  decoding="async"
                  className="max-h-[390px] w-full"
                  width="800"
                  height="450"
                />
              </figure>
            )}
          </div>

          {/* === CARD 4 === */}
          <div
            className="col-span-12 bg-cover pl-16 rounded-3xl max-lg:pl-0"
            style={{ backgroundImage: `url(${Card4Img})` }}
          >
            <div className="grid grid-cols-12 items-center max-md:grid-cols-1">
              <div className="text-center col-span-5 max-md:px-7 max-md:pt-7">
                <h3 className="text-5xl leading-none font-bold text-white mb-5 max-w-[400px] mx-auto max-md:text-[28px]">Design & Build Your Brand</h3>
                <p className="text-lg text-[#C5CEE6] max-md:text-base max-sm:text-sm">We bring your vision to life with custom Figma designs and a cohesive brand identity, setting the foundation for a distinctive and professional prop firm either forex or sports.</p>
              </div>
              <figure className="col-span-7 self-end max-md:-mt-10">
                {isIntersecting && (
                  <img 
                    src={DashboardImg} 
                    alt="Dashboard interface" 
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="675"
                  />
                )}
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

      {/* Bottom gradient - SVG is already optimized */}
      <div className="absolute bottom-[-2px] left-0 right-0 w-full z-[1]">
        <img
          src={GuideBtm}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto"
          width="1920"
          height="150"
        />
      </div>
    </section>
  );
};

export default Guide;