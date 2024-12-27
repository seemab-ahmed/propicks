import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DevImg from "../assets/images/items-dev.svg";
import DevTop from "../assets/images/dev-top.png";
import Dev1 from "../assets/images/dev-1.svg";
import Dev2 from "../assets/images/dev-2.svg";
import Dev3 from "../assets/images/dev-3.svg";
import Dev4 from "../assets/images/dev-4.svg";
import Dev5 from "../assets/images/dev-5.svg";
import Dev6 from "../assets/images/dev-6.svg";
import Dev7 from "../assets/images/dev-7.svg";
import Reviews from "./Reviews";
import DevTabs from "./DevTabs";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const DevelopmentPlatform = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const divs = containerRef.current.querySelectorAll(".dev");
  
      gsap.fromTo(
        divs,
        { opacity: 0, scale: 0 }, // Start with opacity 0 and scale 0
        {
          opacity: 1, // Fade in
          scale: 1, // Scale up to normal size
          duration: 1, // Duration of each animation
          ease: "elastic.out(1, 0.5)", // Elastic easing for bubble effect
          stagger: 0.2, // Delay between animations for each element
          scrollTrigger: {
            trigger: containerRef.current, // Trigger on the container
            start: "top 80%", // Start when the container is 80% in the viewport
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          },
        }
      );
    }
  }, []);
  
  return (
    <section className="p-5 pt-36 relative max-lg:pt-28">
      <div className="absolute top-[-2px] left-0 right-0 w-full">
        <img src={DevTop} alt="dev top gradient" loading="lazy" className="w-full" />
      </div>
      <div className="rounded-[80px] relative z-[2] bg-white py-28 max-lg:py-16 max-lg:rounded-[40px] max-md:py-10">
        <div>
          <div className="max-w-[1180px] w-full mx-auto relative">
            <div
              className="flex gap-[20px] absolute top-0 left-0 right-0 max-xl:gap-3 max-xl:justify-between max-xl:w-full max-lg:w-[90%] max-lg:mx-auto"
              ref={containerRef}
            >
              <div className="dev mt-[285px] max-xl:w-32 max-lg:mt-[140px] max-md:mt-[90px]">
                <img src={Dev1} alt="dev-tool" loading="lazy" />
              </div>
              <div className="dev mt-[130px] max-xl:w-32 max-lg:mt-[70px] max-md:mt-[40px]">
                <img src={Dev2} alt="dev-tool" loading="lazy" />
              </div>
              <div className="dev mt-[36px] max-xl:w-32 max-lg:mt-[20px] max-md:mt-[15px]">
                <img src={Dev3} alt="dev-tool" loading="lazy" />
              </div>
              <div className="dev max-xl:w-32">
                <img src={Dev4} alt="dev-tool" loading="lazy" />
              </div>
              <div className="dev mt-[36px] max-xl:w-32 max-lg:mt-[20px] max-md:mt-[15px]">
                <img src={Dev5} alt="dev-tool" loading="lazy" />
              </div>
              <div className="dev mt-[130px] max-xl:w-32 max-lg:mt-[70px] max-md:mt-[40px]">
                <img src={Dev6} alt="dev-tool" loading="lazy" />
              </div>
              <div className="dev mt-[285px] max-xl:w-32 max-lg:mt-[140px] max-md:mt-[90px]">
                <img src={Dev7} alt="dev-tool" loading="lazy" />
              </div>
            </div>
            <img src={DevImg} alt="dev-img" loading="lazy" />
            <div className="text-center -mt-64">
              <h2 className="text-[120px] font-bold leading-tight mb-5 -tracking-[4.8px] max-xl:text-[92px] max-lg:text-6xl max-lg:mt-6 max-md:mt-[172px] max-md:text-4xl max-md:tracking-[-1.44px] max-md:mb-[10px]">
                <span className="bg-blue-gradient">Development</span>
              </h2>
              <p className="text-2xl leading-10 font-normal text-[#3E5462] max-w-[896px] mx-auto max-lg:max-w-[500px] max-lg:text-xl max-md:text-base max-md:max-w-[312px]">
                PropPicks develops fully customized platforms using React and
                Node.js, delivering seamless, scalable solutions tailored to
                your prop firm’s unique needs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <DevTabs />
        </div>
        <div>
          <div>
            <Reviews />
            <div className="flex items-center justify-center mt-6">
              <Link
                to="/grow-your-firm"
                className="btn text-center py-[36px] text-2xl leading-none block text-[#010510] max-w-[329px] w-full bg-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] max-md:py-5 max-md:px-0 max-md:text-base max-md:max-w-[185px] hover:text-white"
              >
                <span className="relative z-[2]">Grow your firm</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPlatform;
