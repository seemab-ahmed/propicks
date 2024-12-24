import React from "react";
import BetShadow from "../assets/images/bet-shadow.png";
import AppleStoreIcon from "../assets/images/apple.svg";
import PlayStoreIcon from "../assets/images/play.svg";
import BetSide from "../assets/images/bet-phones.png";
import { Link } from "react-router-dom";

const ReadyToBet = () => {
  return (
    <section className="col-span-12 bg-contain bg-center">
      <div className="grid grid-cols-12 gap-8 w-[96%] mx-auto">
        <div className="col-span-12 ">
          <div
            className="grid grid-cols-2 gap-[142px] bg-no-repeat rounded-[40px] 
            bg-cover bg-center items-center px-[80px] pt-[74px] max-xl:gap-16 
            max-xl:px-12 max-lg:grid-cols-1 max-md:pt-10 bg-[#030818] relative
            max-md:p-0"
            style={
              {
                // background: `url(${BetBg}) no-repeat bottom right`,
                // backgroundSize: "cover",
              }
            }
          >
            <div className="pb-12 max-lg:px-10 max-md:px-5 max-md:text-center max-md:pb-0">
              <h2 className="text-[100px] font-bold leading-none text-white mb-6 
              tracking-[-4.8px] max-2xl:text-[86px] max-xl:text-[76px] max-lg:text-6xl 
              max-lg:tracking-normal max-md:tracking-[-1.2px] 
              max-md:mb-[10px] max-md:text-3xl">
                Ready to bet?
              </h2>
              <p className="text-2xl font-normal leading-[2.25] text-[#C5CEE6] 
              max-xl:text-lg max-xl:leading-[1.75] max-md:text-base mb-8 max-md:mb-5">
                Use our app for your prop firm and enjoy a seamless integration.
              </p>
              <div className="flex items-center justify-between gap-6 max-w-[532px] w-full max-md:mx-auto mb-[124px] max-md:gap-[10px] max-md:justify-center max-md:mb-0">
                <Link
                  to="/"
                  className="px-10 py-5 flex gap-5 bg-[#061838] rounded-[14px] border border-solid 
                   border-[rgba(255,255,255,0.15)] max-md:px-[20px] max-md:py-[10px] max-md:gap-[10px] max-md:w-[170px]"
                >
                  <img
                    src={AppleStoreIcon}
                    alt="Apple Store"
                    className="w-9 max-md:w-6"
                  />
                  <div>
                    <span className="text-white text-lg block leading-[1.2] mb-1 max-md:text-xs">
                      Download on the
                    </span>
                    <span className="text-white text-xl font-medium block leading-[1.2] max-md:text-sm">
                      App Store
                    </span>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="px-10 py-5 flex gap-5 bg-[#061838] rounded-[14px] border 
                    border-solid border-[rgba(255,255,255,0.15)] max-md:px-[20px] 
                    max-md:py-[10px] max-md:gap-[10px] max-md:w-[170px]"
                >
                  <img
                    src={PlayStoreIcon}
                    alt="Apple Store"
                    className="w-9 max-md:w-6"
                  />
                  <div>
                    <span className="text-white text-lg block leading-[1.2] mb-1 max-md:text-xs">
                      Get it on
                    </span>
                    <span className="text-white text-xl font-medium block leading-[1.2] max-md:text-sm">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>
              <div className="relative z-[1] grid grid-cols-2 max-w-[365px] gap-5 items-center 
              mt-10 max-md:mt-8 max-md:gap-[10px] max-md:mx-auto max-md:justify-center max-md:flex">
                <Link
                  to="/"
                  className="btn blue text-center py-5 text-xs leading-4 block text-white font-medium rounded-[10px] 
                  border border-[#3D7FDE] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] 
                  max-md:py-5 max-md:px-0 max-md:text-base  max-md:w-[170px] max-md:m-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
                  }}
                >
                  <span className="relative z-[2]">Firm Demo</span>
                </Link>
                <Link
                  to="/"
                  className="btn text-center py-5 text-xs leading-4 block text-black bg-white 
                  font-medium rounded-[10px] border border-[#3D7FDE] 
                  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] 
                  max-md:py-5 max-md:px-0 max-md:text-base hover:text-white max-md:w-[170px]"
                >
                  <span className="relative z-[2]">Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="relative self-end justify-self-end">
              <figure className="self-end justify-self-end">
                <img
                  src={BetSide}
                  alt="faceid"
                  className="max-lg:h-[450px] max-md:h-[289px]"
                />
              </figure>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full">
              <img src={BetShadow} alt="gradient" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBet;
