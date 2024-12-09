import React from "react";
import DevImg from "../assets/images/dev-img.png";
import DevTop from "../assets/images/dev-top.png";
import Reviews from "./Reviews";
import DevTabs from "./DevTabs";
import { Link } from "react-router-dom";

const Development = () => {
  return (
    <section className="p-5 pt-36 relative max-lg:pt-28">
      <div className="absolute top-[-2px] left-0 right-0 w-full">
        <img src={DevTop} alt="dev top gradient" className="w-full" />
      </div>
      <div className="rounded-[80px] relative z-[2] bg-white py-28 max-lg:py-16 max-lg:rounded-[40px] max-md:py-10">
        <div>
          <div className="max-w-[1180px] w-full mx-auto">
            <img src={DevImg} alt="dev-img" />
            <div className="text-center -mt-64">
              <h2 className="text-[120px] font-bold leading-tight mb-5 -tracking-[4.8px] max-xl:text-[92px] max-lg:text-6xl max-lg:mt-6 max-md:mt-[172px] max-md:text-4xl max-md:tracking-[-1.44px] max-md:mb-[10px]">
                <span className="bg-blue-gradient">Development</span>
              </h2>
              <p className="text-2xl leading-10 font-normal text-[#3E5462] max-w-[896px] mx-auto max-lg:max-w-[500px] max-lg:text-xl max-md:text-base max-md:max-w-[312px]">
                PropPicks develops fully customized platforms using React and
                Node.js, delivering seamless, scalable solutions tailored to
                your prop firm’s unique needs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <DevTabs />
        </div>
        <div>
          <div>
            <Reviews />
            <div className="flex items-center justify-center mt-6">
              <Link
                to="/"
                className="btn text-center py-[36px] text-2xl leading-none block text-[#010510] max-w-[329px] w-full bg-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] max-md:py-5 max-md:px-0 max-md:text-base max-md:max-w-[185px] hover:text-white"
              >
                <span className="relative z-[2]">Grow your firm</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
