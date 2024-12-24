import React from "react";
import MobileDevTop from "../assets/images/mobile-dev-top.svg";
// import IphoneImg from "../assets/images/iphones.png";
import IphoneVideo from "../assets/video/dev-bg.webm";
import MdBtm from "../assets/images/mobile-dev-btm.png";

const MobileDev = () => {
  return (
    <section className="px-5">
      <div className="relative rounded-[32px] md:rounded-[40px] xl:rounded-[80px] bg-white overflow-hidden">
        <div className="max-w-[1140px] w-[90%] mx-auto mb-[65px]">
          <div className="text-center flex items-center justify-center flex-col relative z-[2]">
            <img src={MobileDevTop} alt="mobile-dev-top" className="max-md:max-w-[275px] max-md:-mt-12" />
            <h2 className="text-[36px] md:text-[80px] lg:text-[120px] xl:text-[180px] font-bold leading-none -tracking-[1.44px] xl:-tracking-[7.2px] -mt-20 xl:-mt-28 mb-5">
              <span className="bg-heading-gradient">Mobile Dev</span>
            </h2>
            <p className="text-base md:text-lg xl:text-2xl leading-7 md:leading-8 xl:leading-10 text-[#3E5462] font-normal">
              Using cutting-edge frameworks and tools, we craft mobile solutions
              that ensure top-notch performance across all devices, whether
              smartphones or tablets. With a focus on user-friendly interfaces
              and seamless functionality, our mobile apps empower your clients
              to access your services anytime, anywhere, enhancing engagement
              and satisfaction.
            </p>
          </div>
        </div>
        <video
          width="100%"
          height="100%"
          className="w-full h-full object-cover  -mt-[750px]  relative z-0 max-2xl:mt-[-550px] max-xl:mt-[-480px] max-lg:mt-[-350px] max-md:mt-[-250px] max-sm:mt-[-200px]"
          autoPlay
          muted
          loop
        >
           <source src={IphoneVideo} type="video/mp4" />
           <source src={IphoneVideo} type="video/ogg" />
          {" "}
        </video>
        {/* <figure>
                    <img src={IphoneImg} alt='iphone' />
                </figure> */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img src={MdBtm} alt="dev btm gradient" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default MobileDev;
