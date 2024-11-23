import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/main_logo.svg";

const Header = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Development", path: "/" },
    { name: "Extra Services", path: "/" },
    { name: "Grow your firm", path: "/" },
  ];
  return (
    <header className="p-5 fixed left-0 top-0 w-full">
      <div className="max-w-fit w-full mx-auto rounded-[10px] bg-[rgba(36,37,40,0.6)] backdrop-blur-[80%] p-2.5">
        <div className="flex items-center gap-8">
          <Link className="w-9 h-9 flex items-center justify-center bg-[#1C3148] rounded-lg">
            <img src={Logo} alt="" />
          </Link>
          <ul className="flex items-center gap-2.5">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-normal leading-none py-2 px-2.5 text-white ${
                    location.pathname === item.path
                      ? "opacity-100"
                      : "text-white opacity-80"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            <Link className="contact-btn scale-0 w-0 h-9 flex items-center justify-center px-8 py-2 max-w-fit rounded-lg text-sm font-medium text-white leading-none bg-[rgba(255,255,255,0.1)]">
              Contact Us
            </Link>
            <Link className="h-9 flex items-center justify-center px-8 py-2 max-w-fit rounded-lg text-sm font-medium text-black leading-none bg-white">
              Firm Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
