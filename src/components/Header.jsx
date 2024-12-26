import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "../assets/images/main_logo.svg";

const Header = () => {
  // const location = useLocation();
  const headerRef = useRef(null);
  const contactBtnRef = useRef(null);
  const navListRef = useRef(null);
  const buttonWrapperRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Development", path: "/development" },
    { name: "Extra Services", path: "/extra-services" },
    { name: "Grow your firm", path: "/grow-your-firm" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return; // Exit if screen width is 767px or smaller

    let lastScrollY = window.scrollY;

    // Create a single timeline
    const timeline = gsap.timeline({ paused: true });

    // Define the animation sequence for scrolling down
    timeline
      .to(buttonWrapperRef.current, {
        width: "280px",
      })
      .to(
        contactBtnRef.current,
        {
          scale: 1,
          opacity: 1,
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
        },
        "<"
      );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        timeline.play();
      } else if (currentScrollY < lastScrollY) {
        timeline.reverse();
      }

      lastScrollY = currentScrollY;
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
    <header className="py-5 md:p-5 fixed left-0 top-0 w-full z-[9999]" ref={headerRef}>
      <div className="max-w-[90%] md:max-w-fit w-full mx-auto rounded-[10px] bg-[rgba(36,37,40,0.6)] backdrop-blur-[80%] p-2.5">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="w-9 h-9 flex items-center justify-center bg-[#1C3148] rounded-lg">
            <img src={Logo} alt="Logo" />
          </Link>

          <button
            className="hamburger-menu md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <ul
            ref={navListRef}
            className={`nav-list md:flex items-center gap-2.5 ${isMenuOpen
                ? "block absolute top-20 left-0 right-0 bg-[rgba(36,37,40,0.6)] backdrop-blur-[80%] p-5 rounded-md z-50 w-[90%] max-w-[727px] mx-auto"
                : "hidden"
              } md:block`}
          >
            {navLinks.map((item) => (
              <li
                key={item.path}
                className="flex-none flex justify-center items-center py-2 px-2.5"
              >
                <Link
                  to={item.path}
                  className="text-sm font-normal leading-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="item1">{item.name}</span>
                  <span className="item2">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="hidden md:flex items-center justify-end overflow-hidden gap-2.5 w-[130px]"
            ref={buttonWrapperRef}
          >
            <Link to="/contact-us"
              ref={contactBtnRef}
              className="btn contact-btn h-9 opacity-0 scale-[0.6] origin-right flex items-center justify-center px-8 py-2 w-[135px] rounded-lg text-sm font-medium text-white leading-none bg-[rgba(255,255,255,0.1)] flex-none"
            >
              <span className="relative z-[2]">Contact Us</span>
            </Link>
            <Link to="/firm-demo" className="btn h-9 flex items-center justify-center px-8 py-2 rounded-lg text-sm font-medium text-black leading-none bg-white flex-none">
              <span className="relative z-[2]">Firm Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
