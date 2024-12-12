import React from "react";
import BannerBtm from "../assets/images/banner-btm.svg";
import { Link } from "react-router-dom";
import VideoIcon from "../assets/images/video-icon.svg";

const DreamFirm = () => {
  return (
    <section className="py-[214px] relative">
      <div className="container">
        <div className="flex items-center justify-between gap-10">
          <div className="max-w-[652px] w-full relative z-[1]">
            <h2 className="text-[80px] font-bold leading-tight -tracking-[3.2px] text-white mb-5">
              Let’s get to building your{" "}
              <span className="bg-heading-gradient">dream firm.</span>
            </h2>
            <p className="text-2xl leading-10 font-normal text-[#C5CEE6] mb-8">
              Let’s get to building your dream firm with precision and passion.
              From custom-built solutions to cutting-edge technology, we’re here
              to bring your vision to life and set your business on the path to
              success. The future of your firm starts now!
            </p>
            <Link
              to="/"
              className="border border-[rgba(255,255,255,0.10)] bg-[#1A2031] rounded-[10px] shadow-grey-inset max-w-[255px] w-full h-[52px] flex items-center justify-center gap-3.5 text-lg font-semibold leading-none text-white"
            >
              <img src={VideoIcon} alt="video-icon" />
              Watch Video
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src={BannerBtm} alt="dev top gradient" className="w-full" />
      </div>
    </section>
  );
};

export default DreamFirm;
