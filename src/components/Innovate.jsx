import React from "react";
import InnovativeBg from "../assets/images/innovative-bg.png";
import InnvativeSide from "../assets/images/innovative.png";
import { Link } from "react-router-dom";

const Innovative = () => {
  return (
    <section className="col-span-12 bg-contain bg-center">
      <div className="grid grid-cols-12 gap-8 w-[96%] mx-auto">
        <div className="col-span-12 ">
          <div
            className="grid grid-cols-2 gap-[142px] bg-no-repeat rounded-[55px] bg-cover bg-center items-center pl-[72px] pt-[74px] max-xl:gap-16 max-xl:pl-12 max-lg:pl-0 max-lg:grid-cols-1 max-md:pt-10"
            style={{
              background: `url(${InnovativeBg}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className="pb-12 max-lg:px-10 max-md:px-5 max-md:text-center max-md:pb-0">
              <h2 className="text-[100px] font-bold leading-none text-white mb-6 tracking-[-4.8px] max-2xl:text-[86px] max-xl:text-[76px] max-lg:text-6xl max-lg:tracking-normal max-md:text-4xl max-md:tracking-[-1.2px] max-md:mb-[10px]">
                Innovate with us
              </h2>
              <p className="text-2xl font-normal leading-[2.25] text-[#C5CEE6] max-xl:text-lg max-xl:leading-[1.75] max-md:text-base">
                Let us help you build and grow your new business, creating a
                foundation for lasting success. Our partnered firms have
                generated over 100m+ in revenue.
              </p>
              <div className="grid grid-cols-2 max-w-3xl gap-5 items-center mt-10 max-md:mt-8 max-md:gap-[10px]">
                <Link
                  to="/"
                  className="btn blue text-center py-10 text-2xl leading-4 block text-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] max-md:py-5  max-md:px-0 max-md:text-base "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
                  }}
                >
                  <span className="relative z-[2]">Firm Demo</span>
                </Link>
                <Link
                  to="/"
                  className="btn text-center py-10 text-2xl leading-4 block text-black bg-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] max-md:py-5 max-md:px-0 max-md:text-base hover:text-white"
                >
                  <span className="relative z-[2]">Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="relative self-end justify-self-end">
              <figure className="self-end justify-self-end">
                <img src={InnvativeSide} alt="faceid" className="max-lg:h-[450px]" />
              </figure>
              {/* <div className="w-[540px] h-[217px] flex items-center flex-col justify-center absolute bottom-[150px] left-[-100px] px-11 rounded-[44px] overflow-hidden border border-transparent border-solid max-xl:w-[400px] max-xl:h-[166px] max-xl:left-[-50px] max-lg:left-[-300px] max-lg:w-auto
              max-md:left-0 max-md:right-0 max-md:top-0"
              style={{
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), radial-gradient(186.25% 107.66% at 51.84% 0%, rgba(25, 114, 245, 0.10) 0%, rgba(25, 114, 245, 0.00) 50%, rgba(25, 114, 245, 0.00) 100%)",
                backdropFilter: "blur(108.18180847167969px)",
              }}>
                <span className="block text-center text-[#1972F5] text-[90px] font-medium leading-normal m-0 max-xl:text-6xl">+260%</span>
                <span className="text-[#C5CEE6] text-xl block font-medium leading-normal text-center m-0">Your firms increase with PropPicks</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovative;
