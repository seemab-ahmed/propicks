import React from "react";
import Card1Img from "../assets/images/card-1-bg.jpg";
import Card2Img from "../assets/images/card-2-bg.jpg";
import Card3Img from "../assets/images/card-3-bg.jpg";
import Card4Img from "../assets/images/card-4-bg.jpg";
import FaceIdImg from "../assets/images/face-id.png";
import PricingImg from "../assets/images/pricing-img.png";
import DashboardImg from "../assets/images/dashboard-img.png";

const Guide = () => {
  return (
    <section className="py-20">
      <div className="container">
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
            className="col-span-12 bg-cover py-14 px-16 rounded-[20px]"
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
            className="col-span-6 bg-cover py-14 px-16 rounded-[20px]"
            style={{ backgroundImage: `url(${Card2Img})` }}
          >
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
          <div
            className="col-span-6 bg-cover py-14 px-16 rounded-[20px]"
            style={{ backgroundImage: `url(${Card3Img})` }}
          >
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
          <div
            className="col-span-12 bg-cover py-14 px-16 rounded-[20px]"
            style={{ backgroundImage: `url(${Card4Img})` }}
          >
            <div className="grid grid-cols-2 gap-5 items-center">
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
        </div>
      </div>
    </section>
  );
};

export default Guide;
