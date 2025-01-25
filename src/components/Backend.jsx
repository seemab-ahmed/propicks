import React from "react";
import IconTop from "../assets/images/backend-icon-top.svg";
import BackendBg from "../assets/images/backend-bg.png";
import BackendBgVideo from "../assets/video/backend-video.webm";
import OptimizeImg from "../assets/images/optimize-card-btm.png";
import CardBgVideo from "../assets/video/coding-card-bg.webm";
import BannerBtm from "../assets/images/dev-banner-btm.png";
import DevelopBtm from "../assets/images/develop-btm.png";

const Backend = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 w-full rotate-180">
        <img
          src={DevelopBtm}
          alt="dev top gradient"
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="container">
        <div className="flex items-center justify-center flex-col mb-[60px] text-center">
          <img src={IconTop} loading="lazy" alt="icon" />
          <h2 className="text-[36px] md:text-[80px] lg:text-[120px] xl:text-[180px] font-bold leading-none text-white -tracking-[1.44px] xl:-tracking-[7.2px] -mt-20 xl:-mt-28 mb-5">
            <span className="bg-blue-gradient">Backend</span>
          </h2>
          <p className="text-base md:text-lg xl:text-2xl text-[#C5CEE6] font-normal leading-7 md:leading-8 xl:leading-10 max-w-[896px] w-full mx-auto">
            Our coding architecture is designed for maximum scalability, speed,
            and reliability. Our systems can handle complex data processing and
            high traffic volumes effortlessly, ensuring your prop firm operates
            smoothly under any circumstances.
          </p>
        </div>
      </div>
      <div className="relative bg-cover bg-no-repeat pb-[205px] md:pb-[600px] xl:pb-[894px] bg-right">
        {/* style={{ backgroundImage: `url(${BackendBg})` }} */}
        <div className="container">
          <div
            className="max-w-[400px] min-h-[404px] md:min-h-[870px] relative md:max-w-[690px] mx-auto md:mx-0 w-full rounded-[30px] 
                    border-t-2 border-solid border-[#FFFFFF1A] bg-[#030818] overflow-hidden"
          >
            <div className="px-5 md:px-10 xl:px-20 py-5 md:py-10 xl:pt-[90px] xl:pb-[51px] text-center relative z-[2]">
              <h3 className="text-lg md:text-[30px] xl:text-[57px] font-bold leading-none -tracking-[0.36px] xl:-tracking-[1.14px] text-white mb-2 md:mb-5">
                Efficient Coding
              </h3>
              <p className="text-[12px] md:text-lg xl:text-[21px] font-normal leading-[18px] md:leading-7 xl:leading-10 text-[#C5CEE6]">
                Efficiency drives our coding. Every line is crafted for speed,
                reliability, and scalability, ensuring seamless performance for
                your prop firm.
              </p>
            </div>
            <figure className="block md:hidden">
              <img src={OptimizeImg} loading="lazy" alt="optimize" />
            </figure>
            <video
              width="100%"
              height="100%"
              className="w-full h-full object-cover align-top absolute inset-0 hidden md:block"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={CardBgVideo} type="video/mp4" />
          <source src={CardBgVideo} type="video/webm" />
          <source src={CardBgVideo.replace(".webm", ".ogg")} type="video/ogg" />
            </video>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 pl-0 w-full -z-[1]">
          <img
            src={BackendBg}
            loading="lazy"
            alt="optimize"
            className="w-full block md:hidden"
          />
          <video
            width="100%"
            height="100%"
            className="w-full h-full object-cover hidden md:block"
            autoPlay
            muted
            loop
          >
            <source src={BackendBgVideo} type="video/mp4" />
            <source src={BackendBgVideo} type="video/ogg" />
          </video>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img
          src={BannerBtm}
          loading="lazy"
          alt="dev top gradient"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Backend;
