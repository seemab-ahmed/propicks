import React from "react";
import SearchIcon from "../assets/icons/SearchIcon";

const BuildAffiliate = () => {

  return (
    <section className="px-5">
      <div className="rounded-[80px] relative z-[2] bg-white py-[100px] max-lg:py-16 max-lg:rounded-[40px] max-md:py-10">
        <div className="container">
          <div className="text-center mb-11">
            <h2 className="text-[120px] font-bold leading-tight mb-5 -tracking-[4.8px] max-xl:text-[92px] max-lg:text-6xl max-lg:mt-6 max-md:mt-[172px] max-md:text-4xl max-md:tracking-[-1.44px] max-md:mb-[10px]">
              {" "}
              <span className="bg-blue-gradient">
                Build your own affiliate program with us.
              </span>
            </h2>
            <p className="text-2xl leading-10 font-normal text-[#010510] max-w-[846px] mx-auto max-lg:max-w-[500px] max-lg:text-xl max-md:text-base max-md:max-w-[312px]">
              Create fully customized affiliate programs tailored to your unique
              needs with PropPicks. We specialize in building systems that align
              perfectly with your business goals, ensuring seamless integration
              and maximum efficiency.
            </p>
          </div>
          {/* search dropdown  */}
          <div className="max-w-[850px] mx-auto">
            {/* search trigger  */}
            <div className="text-[#FFFFFF99] text-xl relative">
              <div className="w-6 h-6 top-8 ms-[21px] absolute z-[2]"><SearchIcon /></div>
              <input type="text" placeholder="Search Affiliate Plugins..." 
              className="bg-[#010510] py-[30px] ps-14 pr-5 rounded-[30px] border border-solid 
              border-[#FFFFFF1A] w-full shadow-[0px_3.16px_23.48px_0px_#0000008F]"/>
            </div>
            {/* search dropdown item list  */}
            <ul className="rounded-[20px] bg-[#010510] py-7 mt-3 flex flex-col shadow-[0px_3.16px_23.48px_0px_#0000008F]">
              <li className="rounded-[20px] text-white flex items-center gap-[10px] p-[10px]">
                <div className="p-6"><img src="" alt="" /></div>
                <span>PropPicks</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAffiliate;
