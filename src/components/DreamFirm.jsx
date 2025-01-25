import React, { useState } from "react";
import BannerBtm from "../assets/images/banner-btm.svg";
import DfBtm from "../assets/images/df-bg.png";
import PPLogo from "../assets/images/pp-logo-large2.png";
import LinesRight from "../assets/images/line-right.svg";
import LinesLeft from "../assets/images/line-left.svg";
import VectorImg from "../assets/images/form-vector.png";
import DfMblBg from "../assets/images/df-mbl-bg.png";
import { Link } from "react-router-dom";
import VideoIcon from "../assets/images/video-icon.svg";
import Typewriter from "typewriter-effect";
import Video from "../assets/video/laptop-unreal.webm";

const CustomDropdown = ({ options, name, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="h-11 border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] rounded-[10px] px-2.5 flex items-center justify-between outline-none text-sm lg:text-base font-medium leading-none text-[#C5CEE6] placeholder:text-[rgba(197,206,230,0.5)] w-full cursor-pointer"
        onClick={handleToggle}
      >
        <span>{selectedOption || placeholder}</span>
        <span className="text-[#C5CEE6]">&#9660;</span>
        {isOpen && (
          <ul
            className="absolute top-full left-0 w-full mt-1 bg-[rgba(255,255,255,1)] rounded-[10px] text-[#000] overflow-hidden shadow-lg z-[1]"
            style={{ backdropFilter: "blur(300px)" }}
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-2.5 py-2 cursor-pointer hover:bg-[rgba(0,0,0,0.10)]"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const formData = [
  {
    id: 1,
    title: "First name",
    name: "first-name",
    placeholder: "Derick",
    type: "text",
  },
  {
    id: 2,
    title: "Last Name",
    name: "last-name",
    placeholder: "Thompson",
    type: "text",
  },
  {
    id: 3,
    title: "Company",
    name: "company",
    placeholder: "PropPicks",
    type: "text",
  },
  {
    id: 4,
    title: "Job Title",
    name: "job",
    placeholder: "Head of Design",
    type: "text",
  },
  {
    id: 5,
    title: "Phone with area code",
    name: "phone",
    type: "text",
    placeholder: "",
  },
  {
    id: 6,
    title: "Subject",
    name: "subject",
    type: "dropdown",
    options: ["Sports", "Forex", "Futures"],
    placeholder: "Select subject",
  },
  {
    id: 7,
    title: "How can we help",
    name: "textarea",
    placeholder: "Give us a little heads up for the meeting.",
    type: "textarea",
  },
];

const DreamFirm = ({ isgrowPage = false }) => {
  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage popup visibility

  const handlePopupToggle = () => {
    setPopupOpen(!isPopupOpen); // Toggle the popup visibility
  };

  return (
    <section
      className={`pt-[140px] pb-[110px] ${
        !isgrowPage
          ? "lg:py-[214px]"
          : "lg:pb-[40px] max-lg:pb-[0] max-md:pt-10"
      } relative overflow-hidden`}
    >
      <div className="form-container container">
        <div className="flex items-center flex-col lg:flex-row justify-between gap-10 relative z-[2]">
          <div className="max-w-[652px] w-full relative z-[1] text-center lg:text-left">
            <h2 className="text-4xl lg:text-[48px] xl:text-[60px] 2xl:text-[80px] font-bold leading-tight -tracking-[1.44px] 2xl:-tracking-[3.2px] text-white mb-5">
              Let’s get to building your{" "}
              <span className="bg-heading-gradient-two">
                <span>
                  <Typewriter
                    options={{
                      strings: ["dream", "prop", "forex", "sports"],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 100,
                    }}
                  />
                </span>{" "}
                <span className="">firm.</span>
              </span>
            </h2>
            <p className="text-base lg:text-2xl leading-snug lg:leading-10 font-normal text-[#C5CEE6] mb-8">
              Let’s get to building your dream firm with precision and passion.
              From custom-built solutions to cutting-edge technology, we’re here
              to bring your vision to life and set your business on the path to
              success. The future of your firm starts now!
            </p>
            <div>
              <button
                className="border border-[rgba(255,255,255,0.10)] bg-[#1A2031] rounded-[10px] shadow-grey-inset max-w-[172px] lg:max-w-[255px] w-full h-[52px] flex items-center justify-center gap-3.5 text-base lg:text-lg font-semibold leading-none text-white mx-auto lg:mx-0 cursor-pointer"
                onClick={handlePopupToggle} // Trigger popup toggle on button click
              >
                <img src={VideoIcon} alt="video-icon" loading="lazy" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="max-w-[600px] w-full border-[rgba(255,255,255,0.10)] bg-form-gradient rounded-[20px] p-1 lg:p-2.5 relative">
            <div className="rounded-2xl bg-form-inner-gradient border-[rgba(255,255,255,0.00)] p-6">
              <h5 className="text-[28px] font-bold leading-none text-white -tracking-[0.56px] mb-5">
                Let’s get on a call
              </h5>
              <form className="grid grid-cols-12 gap-3.5">
                {formData.map((item) => (
                  <div
                    key={item.id}
                    className={
                      item.name === "subject" ||
                      item.name === "textarea" ||
                      item.name === "phone"
                        ? "col-span-12"
                        : "col-span-6"
                    }
                  >
                    <label
                      htmlFor={item.name}
                      className="block text-sm lg:text-sm font-medium leading-none text-white capitalize mb-2"
                    >
                      {item.title}
                    </label>
                    {item.type === "text" && (
                      <input
                        id={item.name}
                        type="text"
                        placeholder={item.placeholder}
                        className="h-11 border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] rounded-[10px] px-2.5 flex items-center justify-center outline-none text-sm lg:text-base font-medium leading-none text-[#C5CEE6] placeholder:text-[rgba(197,206,230,0.5)] w-full"
                        style={{ backdropFilter: "blur(50px)" }}
                      />
                    )}
                    {item.type === "dropdown" && (
                      <CustomDropdown
                        options={item.options}
                        name={item.name}
                        placeholder={item.placeholder}
                      />
                    )}
                    {item.type === "textarea" && (
                      <textarea
                        id={item.name}
                        placeholder={item.placeholder}
                        className="border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] rounded-[10px] p-2.5 flex items-center justify-center outline-none text-sm lg:text-base font-medium leading-none text-[#C5CEE6] placeholder:text-[rgba(197,206,230,0.5)] w-full"
                        style={{
                          backdropFilter: "blur(50px)",
                          height: "120px",
                          resize: "none",
                        }}
                      ></textarea>
                    )}
                  </div>
                ))}
                <Link
                  to=""
                  className="btn bg-white shadow-white-inset rounded-[10px] flex items-center justify-center h-12 lg:h-[52px] text-base lg:text-lg font-semibold leading-none text-[#010510] col-span-12 mt-3"
                >
                  <span className="relative z-[2]">Contact us</span>
                </Link>
              </form>
            </div>
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full -z-[1] scale-150">
              <img
                src={VectorImg}
                alt="vector"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        {!isgrowPage && (
          <div className="absolute top-0 left-0 w-full max-w-[42vw] h-auto -z-[1]">
            <img src={PPLogo} alt="top" loading="lazy" className="w-full" />
          </div>
        )}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 mx-w-[480px] max-md:max-w-[200px]">
          <img src={LinesRight} alt="lines" loading="lazy" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 mx-w-[480px] max-md:max-w-[200px]">
          <img src={LinesLeft} alt="lines" loading="lazy" />
        </div>
      </div>
      {!isgrowPage && (
        <div>
          <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
            <img src={BannerBtm} alt="btm" loading="lazy" className="w-full" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <img src={DfBtm} alt="btm" loading="lazy" className="w-full" />
          </div>
          <div className="block lg:hidden absolute top-0 left-0 right-0 mx-auto w-auto -z-[1]">
            <img src={DfMblBg} alt="top" loading="lazy" className="w-full" />
          </div>
        </div>
      )}
      {/* Popup */}
      {isPopupOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center py-40 bg-black bg-opacity-50 z-[9999]">
          <div className="container">
            <div className="bg-black rounded-lg relative">
              <video
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                autoPlay
                muted
                controls
                loop
                playsInline
              >
                <source src={Video} type="video/mp4" />
                <source src={Video} type="video/webm" />
                <source src={Video.replace(".webm", ".ogg")} type="video/ogg" />
              </video>
              <button
                onClick={handlePopupToggle}
                className="absolute -top-2 -right-2 text-white bg-[#1c3148] pb-2 rounded-lg h-8 w-8 md:h-10 md:w-10 flex justify-center items-center text-[24px] md:text-[32px] leading-8"
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DreamFirm;
