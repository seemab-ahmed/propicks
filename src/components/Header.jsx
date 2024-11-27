import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "../assets/images/main_logo.svg";

const Header = () => {
  const location = useLocation();
  const headerRef = useRef(null);
  const contactBtnRef = useRef(null);
  const navListRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Development", path: "/development" },
    { name: "Extra Services", path: "/extra-services" },
    { name: "Grow your firm", path: "/grow-your-firm" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY; // Track the last scroll position

    // Create a single timeline
    const timeline = gsap.timeline({ paused: true });

    // Define the animation sequence for scrolling down
    timeline
      .to(buttonWrapperRef.current, {
        width: "280px",
        // duration: 0.7,
        // ease: "power1.inOut",
      })
      .to(
        contactBtnRef.current,
        {
          scale: 1,
          opacity: 1,
          // duration: 0.7,
          // ease: "power1.inOut",
        },
        "<"
      )
      .to(
        navListRef.current,
        {
          opacity: 0,
          width: "0px",
          pointerEvents: "none",
          scale: 0.6,
          // duration: 0.7,
          // ease: "power1.inOut",
        },
        "<"
      );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down: play timeline
        timeline.play();
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: reverse timeline
        timeline.reverse();
      }

      lastScrollY = currentScrollY; // Update the last scroll position
    };

    const debounceScroll = () => {
      clearTimeout(handleScroll.timer);
      handleScroll.timer = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debounceScroll);

    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  return (
    <header className="p-5 fixed left-0 top-0 w-full z-[9999]" ref={headerRef}>
      <div className="max-w-fit w-full mx-auto rounded-[10px] bg-[rgba(36,37,40,0.6)] backdrop-blur-[80%] p-2.5">
        <div className="flex items-center gap-8">
          <Link className="w-9 h-9 flex items-center justify-center bg-[#1C3148] rounded-lg">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul
            ref={navListRef}
            className="flex items-center gap-2.5 w-[400px] overflow-hidden flex-none"
          >
            {navLinks.map((item) => (
              <li key={item.path} className="flex-none">
                <Link
                  to={item.path}
                  className={`text-sm font-normal leading-none py-2 px-2.5 text-white ${location.pathname === item.path
                    ? "opacity-100 flex-none"
                    : "text-white opacity-80"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="flex items-center justify-end overflow-hidden gap-2.5 w-[130px]"
            ref={buttonWrapperRef}
          >
            <Link
              ref={contactBtnRef}
              className="contact-btn h-9 opacity-0 scale-[0.6] origin-right flex items-center justify-center px-8 py-2 w-[135px] rounded-lg text-sm font-medium text-white leading-none bg-[rgba(255,255,255,0.1)] flex-none"
            >
              Contact Us
            </Link>
            <Link className="h-9 flex items-center justify-center px-8 py-2 rounded-lg text-sm font-medium text-black leading-none bg-white flex-none">
              Firm Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;