import React from "react";
import DevImg from "../assets/images/dev-img.png";
import DevTop from "../assets/images/dev-top.png";
import Reviews from "./Reviews";
import DevTabs from "./DevTabs";

const Development = () => {
  return (
    <section className="p-5 pt-36 relative">
      <div className="absolute top-0 left-0 right-0 w-full">
        <img src={DevTop} alt="dev top gradient" className="w-full" />
      </div>
      <div className="rounded-[80px] bg-white py-28 ">
        <div>
          <div className="max-w-[1180px] w-full mx-auto">
            <img src={DevImg} alt="dev-img" />
            <div className="text-center -mt-64">
              <h2 className="text-[120px] font-bold leading-tight mb-5 -tracking-[4.8px] max-xl:text-[92px]">
                <span className="bg-blue-gradient">Development</span>
              </h2>
              <p className="text-2xl leading-10 font-normal text-[#3E5462] max-w-[896px] mx-auto">
                PropPicks develops fully customized platforms using React and
                Node.js, delivering seamless, scalable solutions tailored to
                your prop firm’s unique needs.
              </p>
            </div>

          </div>
        </div>
        <div>
          <DevTabs/>
        </div>
        <div>
          <div>
            <Reviews />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
