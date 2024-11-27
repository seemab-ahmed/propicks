import React from "react";
import FooterBg from "../assets/images/footer-bg.png";
import FooterCard from "../assets/images/footer-card-bg.png";
import Brand from "../assets/images/brand.svg";
import AppleStoreIcon from "../assets/images/apple.svg";
import PlayStoreIcon from "../assets/images/play.svg";
import MailIcon from "../assets/images/mail-icon.svg";
import InstaIcon from "../assets/images/fb-icon.svg";
import TwitterIcon from "../assets/images/twitter-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="pb-[274px] pt-[390px] bg-no-repeat bg-cover bg-center mt-[-500px]"
      style={{
        background: `url(${FooterBg}) no-repeat center/cover`,
      }}
    >
      <div
        className="container max-w-[1260px] mx-auto bg-no-repeat rounded-[60px] bg-cover bg-center items-center p-10 border-2 border-[#1996F5] border-b-transparent border-solid"
        style={{
          background: `url(${FooterCard}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-2 ">
          <div>
            <Link to="/">
              <img src={Brand} alt="propics" />
            </Link>
            <div className="max-w-[480px]">
              <p className="text-sm font-normal leading-[2.25] text-[#C5CEE6] mb-2">
                PropPicks Tech LLC is a dynamic and innovative financial
                technology company, revolutionizing sports proprietary trading.
              </p>
              <p className="text-sm font-normal leading-[2.25] text-[#C5CEE6] mb-5">
                we are committed to delivering exceptional trading solutions to
                sports proprietary firms across the globe.
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
            <div className="flex items-center gap-[10px] mb-[72px] ms-auto w-max">
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
            <div className="flex justify-between text-sm leading-none max-w-[488px] ms-auto mr-5 text-[rgba(255,255,255,0.80)]">
              <Link to="/" className="py-[6px] px-[10px] hover:underline">
                Development
              </Link>
              <Link to="/" className="py-[6px] px-[10px] hover:underline">
                Extra Services
              </Link>
              <Link to="/" className="py-[6px] px-[10px] hover:underline">
                Grow your firm
              </Link>
              <Link to="/" className="py-[6px] px-[10px] hover:underline">
                Terms of Service
              </Link>
            </div>
            <div className="flex justify-between max-w-[104px] mt-8 ms-auto">
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
          <div className="flex gap-6 mt-12 items-center">
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
            <div className="flex gap-3 items-center">
              <span className="text-[#C5CEE6] text-sm leading-0">
                See our mobile app
              </span>
              <Link
                to="/"
                className="py-[6px] px-5 bg-[rgba(255, 255, 255, 0.10)] text-white rounded-[100px]"
              >
                Propicks
              </Link>
            </div>
            <div className="ms-auto">
            <span className="text-[#C5CEE6] text-sm leading-0">
              © 2024 PropPicks Tech LLC
            </span>
          </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
