import React from "react";
import FooterBtm from "../assets/images/service-btm.png";
import FooterEnd from "../assets/images/dev-top.png";
import FooterCard from "../assets/images/footer-card-bg.png";
import Brand from "../assets/images/brand.svg";
import AppleStoreIcon from "../assets/images/apple.svg";
import PlayStoreIcon from "../assets/images/play.svg";
import MailIcon from "../assets/images/mail-icon.svg";
import InstaIcon from "../assets/images/fb-icon.svg";
import TwitterIcon from "../assets/images/twitter-icon.svg";
import PoweredIcon from "../assets/images/powered-by.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-[93px] pt-[131px] max-lg:pt-[100px] max-md:pb-8">
      <div className="relative">
        <div
          className="max-w-[1260px] w-[90%] mx-auto bg-no-repeat relative z-[2] rounded-[60px] bg-cover bg-center items-center p-10 border-2 border-[#1996F5] border-b-transparent border-solid max-xl:w-[95%] "
          style={{
            background: `url(${FooterCard}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:text-center">
            <div>
              <Link to="/">
                <img src={Brand} alt="propics" />
              </Link>
              <div className="max-w-[480px]">
                <p className="text-sm font-normal leading-[2.25] text-[#C5CEE6] mb-2">
                  PropPicks Tech LLC is a dynamic and innovative financial
                  technology company, revolutionizing sports proprietary
                  trading.
                </p>
                <p className="text-sm font-normal leading-[2.25] text-[#C5CEE6] mb-5">
                  we are committed to delivering exceptional trading solutions
                  to sports proprietary firms across the globe.
                </p>
                <p
                  className="text-sm font-normal leading-[2.25] text-[#C5CEE6]"
                  style={{
                    background:
                      "linear-gradient(90deg, #1C37E8 0%, #69F0F0 34.77%, #2898FF 64.53%, #E990FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Please note, our company does not provide financial services.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center flex-wrap text-sm gap-[10px] mb-[72px] ms-auto w-max max-xl:text-xs max-lg:flex-col max-lg:items-start max-lg:mb-11 max-md:mx-auto max-md:items-center">
                <Link
                  to="/"
                  className="flex gap-[10px] text-[#81B4FF] bg-[#061838] rounded-[100px] py-[10px] px-5 leading-8"
                >
                  <img src={MailIcon} alt="Mail Icon" />
                  <span>Tech@Proppicks.com</span>
                </Link>
                <Link
                  to="/"
                  className="flex gap-[10px] text-[#81B4FF] bg-[#061838] rounded-[100px] py-[10px] px-5 leading-8"
                >
                  Proppicks Tech LLC is Registered in Malta
                </Link>
              </div>
              <div className="flex justify-between flex-wrap text-sm leading-none max-w-[488px] ms-auto mr-5 text-[rgba(255,255,255,0.80)] max-xl:mr-0 max-xl:max-w-60 max-md:mx-auto">
                <Link
                  to="/"
                  className="py-[6px] px-[10px] hover:underline max-xl:px-[5px]"
                >
                  Development
                </Link>
                <Link
                  to="/"
                  className="py-[6px] px-[10px] hover:underline max-xl:px-[5px]"
                >
                  Extra Services
                </Link>
                <Link
                  to="/"
                  className="py-[6px] px-[10px] hover:underline max-xl:px-[5px]"
                >
                  Grow your firm
                </Link>
                <Link
                  to="/"
                  className="py-[6px] px-[10px] hover:underline max-xl:px-[5px]"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="flex justify-between max-w-[104px] mt-8 ms-auto max-md:mx-auto">
                <Link to="/">
                  <img src={InstaIcon} alt="Instagram" />
                </Link>
                <Link to="/">
                  <img src={TwitterIcon} alt="Instagram" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-6 mt-12 items-center max-md:justify-center">
              <Link
                to="/"
                className="px-5 py-[10px] flex gap-[10px] bg-[#061838] rounded-[14px] border border-solid border-[rgba(255,255,255,0.15)]"
              >
                <img src={AppleStoreIcon} alt="Apple Store" />
                <div>
                  <span className="text-white text-xs block leading-[1.2] mb-1">
                    Download on the
                  </span>
                  <span className="text-white text-sm font-medium block leading-[1.2]">
                    App Store
                  </span>
                </div>
              </Link>
              <Link
                to="/"
                className="px-5 py-[10px] flex gap-[10px] bg-[#061838] rounded-[14px] border border-solid border-[rgba(255,255,255,0.15)]"
              >
                <img src={PlayStoreIcon} alt="Apple Store" />
                <div>
                  <span className="text-white text-xs block leading-[1.2] mb-1">
                    Get it on
                  </span>
                  <span className="text-white text-sm font-medium block leading-[1.2]">
                    Google Play
                  </span>
                </div>
              </Link>
              <div className="flex gap-3 items-center ">
                <span className="text-[#C5CEE6] text-sm leading-0">
                  See our mobile app
                </span>
                <Link
                  to="/"
                  className="py-[6px] px-5 bg-[rgba(255,255,255,0.10)] text-white rounded-[100px]"
                >
                  Propicks
                </Link>
              </div>
              <div className="ms-auto max-lg:mx-auto">
                <span className="text-[#C5CEE6] text-sm leading-0">
                  © 2024 PropPicks Tech LLC
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* footer-btm-gradient */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img src={FooterBtm} alt="dev top gradient" className="w-full" />
        </div>
        
      </div>

      <div className="relative">
        <div className="max-w-[1260px] relative z-[2] w-[90%] mx-auto max-md:text-center pt-12">
          <p className="text-sm text-[rgba(255,255,255,0.69)] font-normal leading-7 max-md:text-xs max-md:leading-6">
            {" "}
            <span className="text-[#95A3FF] block font-medium">
              {" "}
              Disclaimer for PropPicks
            </span>
            PropPicks provides technology solutions and services tailored to the
            needs of forex and sports prop firms. While we are dedicated to
            delivering high-quality, custom-built systems, we do not offer
            financial advice, investment opportunities, or guarantees of
            profitability. Our services are designed to support operational
            efficiency, brand identity, and user engagement. The success of any
            prop firm using our technology depends on the strategies, risk
            management, and execution of its owners and participants. PropPicks
            is not responsible for the performance, management, or financial
            outcomes of any firm utilizing our software or platforms. Users are
            advised to conduct their own due diligence and ensure compliance
            with all applicable regulations in their respective jurisdictions.
            <br />
            <br />
            For more information, please review our full Terms & Conditions.
          </p>
        </div>
        <div className="pr-[27px] relative z-[2] flex items-center justify-end md:-mt-[50px] max-md:justify-center max-md:pr-0">
          <img src={PoweredIcon} alt="poweredIcon" />
        </div>
        <div className="absolute top-0 left-0 right-0 w-full">
          <img src={FooterEnd} alt="dev top gradient" className="w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
