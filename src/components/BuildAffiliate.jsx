import React from "react";
import SearchIcon from "../assets/icons/SearchIcon";
import searchIcon1 from "../assets/icons/propic-icon.png";
import searchIcon2 from "../assets/icons/pencil-ruler.png";
import searchIcon3 from "../assets/icons/startup.png";
import searchIcon4 from "../assets/icons/success.png";
import { Link } from "react-router-dom";

const BuildAffiliate = () => {
  const searchItems = [
    {
      id: 1,
      icon: searchIcon1,
      label: "PropPicks",
    },
    {
      id: 2,
      icon: searchIcon2,
      label: "Custom built for you",
    },
    {
      id: 3,
      icon: searchIcon3,
      label: "Launch & scale",
    },
    {
      id: 4,
      icon: searchIcon4,
      label: "We help the whole way",
    },
  ];
  return (
    <section className="px-5">
      <div className="rounded-[80px] relative z-[2] bg-white py-[100px] max-lg:py-16 max-lg:rounded-[40px] max-md:py-10">
        <div className="container">
          <div className="text-center mb-11 max-md:mb-8">
            <h2 className="text-[120px] font-bold leading-tight mb-5 -tracking-[4.8px] max-xl:text-[92px] max-lg:text-6xl  max-md:text-4xl max-lg:tracking-[-1.44px] max-md:mb-[10px]">
              {" "}
              <span className="bg-blue-gradient block leading-[1.1]"
              style={{
                backgroundImage: "linear-gradient(161.95deg, #E1C3FF 10.9%, #8B79FF 25.89%, #4830FF 84.01%)"
              }}>
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
            {/* search trigger */}
            <div className="text-[#FFFFFF99] text-xl relative max-md:text-[12px]">
              <div className="w-6 h-6 top-8 ms-[21px] absolute z-[2] max-md:w-3 max-md:h-3 max-md:top-[19px] max-md:ms-[10px]">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search Affiliate Plugins..."
                className="bg-[#010510] py-[30px] ps-14 pr-5 rounded-[30px] border border-solid 
              border-[#FFFFFF1A] w-full shadow-[0px_3.16px_23.48px_0px_#0000008F] max-md:py-[10px] 
              max-md:ps-[26px] max-md:rounded-lg"
              />
            </div>
            {/* search dropdown item list */}
            <ul className="rounded-[20px] bg-[#010510] py-7 mt-3 flex flex-col gap-[10px] shadow-[0px_3.16px_23.48px_0px_#0000008F]
            max-md:rounded-lg max-md:py-[10px] max-md:mt-1">
              {searchItems.map((item) => (
                <li
                  key={item.id}
                  className="rounded-[20px] text-white flex items-center gap-[10px] justify-between text-xl font-medium p-[10px] 
                bg-[#010510] border border-solid border-transparent opacity-[.6] transition-all duration-500 
                  ease-in-out hover:border-[#FFFFFF1A] hover:shadow-[0px_3.16px_23.48px_0px_#0000008F] 
                  hover:scale-[1.05] hover:opacity-100  group max-md:p-1 max-md:text-xs max-md:rounded-[7px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <div
                      className="p-6 bg-[#FFFFFF1A] border rounded-[20px] border-solid  
                    border-[#FFFFFF1A] max-md:rounded-lg max-md:p-2"
                    >
                      <img src={item.icon} alt="icon" className="w-8 h-8 max-md:w-3 max-md:h-3" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <Link to="/" className="text-base font-medium text-center text-white py-[10px] 
                  px-10 bg-[#FFFFFF1A] border border-solid border-[#FFFFFF1A] rounded-[100px] 
                  mr-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100 max-md:px-[15px] 
                  max-md:py-[2px] max-md:text-[10px] max-md:rounded-[15px]">Enter</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAffiliate;
