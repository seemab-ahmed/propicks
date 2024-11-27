import React from "react";
import InnovativeBg from "../assets/images/innovative-bg.png";
import InnvativeSide from "../assets/images/innovative-side.png";
import { Link } from "react-router-dom";

const Innovative = () => {
  return (
    <section className="col-span-12 bg-contain bg-center py-[340px]">
      <div className="grid grid-cols-12 gap-8 w-[96%] mx-auto">
        <div className="col-span-12 ">
          <div
            className="grid grid-cols-2 gap-[142px] bg-no-repeat rounded-[55px] bg-cover bg-center items-center pl-[72px] pt-[74px]"
            style={{
              background: `url(${InnovativeBg}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className="pb-12">
              <h2 className="text-[120px] font-bold leading-none text-white mb-6 tracking-[-4.8px]">
                Innovate with us
              </h2>
              <p className="text-2xl font-normal leading-[2.25] text-[#C5CEE6]">
                Let us help you build and grow your new business, creating a
                foundation for lasting success. Our partnered firms have
                generated over 100m+ in revenue.
              </p>
              <div className="grid grid-cols-2 max-w-3xl gap-5 items-center mt-10">
                <Link
                  to="/"
                  className=" text-center py-10 text-2xl leading-4 block text-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
                  }}
                >
                  Firm Demo
                </Link>
                <Link
                  to="/"
                  className="text-center py-10 text-2xl leading-4 block text-black bg-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative self-end justify-self-end">
              <figure className="self-end justify-self-end">
                <img src={InnvativeSide} alt="faceid" />
              </figure>
              <div className="w-[540px] h-[217px] flex items-center flex-col justify-center absolute bottom-[150px] left-[-100px] px-11 rounded-[44px] overflow-hidden border border-transparent border-solid"
              style={{
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), radial-gradient(186.25% 107.66% at 51.84% 0%, rgba(25, 114, 245, 0.10) 0%, rgba(25, 114, 245, 0.00) 50%, rgba(25, 114, 245, 0.00) 100%)",
                backdropFilter: "blur(108.18180847167969px)",
              }}>
                <span className="block text-center text-[#1972F5] text-[90px] font-medium leading-normal m-0">+260%</span>
                <span className="text-[#C5CEE6] text-xl block font-medium leading-normal text-center m-0">Your firms increase with PropPicks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovative;
