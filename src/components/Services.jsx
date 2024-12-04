import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ServicesBg from "../assets/images/service-bg.png";
import ServiceTop from "../assets/images/service-top.png";
import ServicesBtm from "../assets/images/service-btm.png";
import ServiceImg1 from "../assets/images/service-1.svg";
import ServiceBg1 from "../assets/images/service-card-bg-1.svg";
import ServiceImg2 from "../assets/images/service-2.svg";
import ServiceBg2 from "../assets/images/service-card-bg-2.png";
import ServiceImg3 from "../assets/images/service-3.png";
import ServiceBg3 from "../assets/images/service-card-bg-3.svg";
import ServiceImg4 from "../assets/images/service-4.png";
// import ServiceBg4 from "../assets/images/service-card-bg-4.svg";
import ServiceImg5 from "../assets/images/service-5.png";
import ServiceBg5 from "../assets/images/service-card-bg-5.svg";
import ServiceImg6 from "../assets/images/service-6.png";
import ServiceBg6 from "../assets/images/service-card-bg-6.svg";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Animate left column service cards individually
    document.querySelectorAll(".col-left .service-card").forEach((card) => {
      console.log("console.log is working as expected on services 1 ... >>>>");
      if(typeof window !== "undefined"){
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotate: -30,
          x: "-20%",
        },
        {
          opacity: 1,
          rotate: 0,
          x: "0%",
          // ease: "power2.out", // Smooth easing
          duration: 1.5,      // Controls animation duration for smoothness
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start when the top of the card is near the viewport
            end: "bottom 40%", // End when the bottom of the card enters
            scrub: true,
            // markers: true,       // Smooth animation synced with scroll
          },
        }
      );
    }
    });
  
    // Animate right column service cards individually
    document.querySelectorAll(".col-right .service-card").forEach((card) => {
      if(typeof window !== "undefined"){
        console.log("console.log is working as expected on services 2 ... >>>>");
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotate: 30,
          x: "20%",
        },
        {
          opacity: 1,
          rotate: 0,
          x: "0%",
          // ease: "power2.out", // Smooth easing
          duration: 1.5,      // Controls animation duration for smoothness
          scrollTrigger: {
            trigger: card,
            start: "top 80%",  // Start when the top of the card is near the viewport
            end: "bottom 30%", // End when the bottom of the card enters
            scrub: true,       // Smooth animation synced with scroll
          },
        }
      );
    }
    });
  }, []);
  


  return (
    <section
      className="pt-[142px] pb-[140px] bg-no-repeat bg-cover relative overflow-hidden max-lg:py-28 max-md:pt-10 max-md:pb-[106px]"
      style={{
        background: `url(${ServicesBg}) no-repeat center/cover `,
        backgroundPositionX: "center",
        backgroundPositionY: "0%",
      }}
    >
      <div className="absolute top-0 left-0 right-0 w-full">
        <img src={ServiceTop} alt="service top gradient" className="w-full" />
      </div>
      <div className="container max-w-[1260px] mx-auto relative z-[1]">
        <div className="text-center">
          <h2 className="text-[120px] text-white font-bold leading-none tracking-[-4.8px] mb-5 max-lg:text-7xl max-md:text-4xl max-md:tracking-[-1.44px]">
            Services
          </h2>
          <p className="text-2xl leading-9 text-center font-normal text-[#C5CEE6] max-w-[1170px] w-full mx-auto max-lg:text-xl max-md:text-base">
            PropPicks Tech guides you every step of the way in building your
            dream prop firm—whether it's for sports, forex, or futures. From
            concept to launch, we provide the tools, expertise, and support to
            bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-36 max-lg:mt-20 max-md:grid-cols-1 max-md:mt-6">
          {/* services left col */}
          <div id="col-left" className=" col-left grid grid-cols-1 gap-8">
            {servicesData
              .filter((_, index) => index % 2 === 0) // Odd indices
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  backgroundStyle={service.backgroundStyle}
                  imgClass={service.imgClass}
                />
              ))}
          </div>
          {/* col right */}
          <div id="col-right" className="col-right grid grid-cols-1 gap-8">
            {servicesData
              .filter((_, index) => index % 2 !== 0) // Even indices
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  backgroundStyle={service.backgroundStyle}
                  imgClass={service.imgClass}
                  imgRight={service.imgRight}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src={ServicesBtm} alt="service top gradient" className="w-full" />
      </div>
    </section>
  );
};

export default Services;

const servicesData = [
  {
    title: "White Glove Service",
    description:
      "Personalized, seamless, and exceptional service tailored to your every need.",
    image: ServiceImg1,
    backgroundStyle: {
      background: `url(${ServiceBg1}) no-repeat center/cover`,
    },
  },
  {
    title: "Creative Design",
    description:
      "Making sure your firm is creating distinctive and impactful designs that bring your vision to life and make a lasting impression.",
    image: ServiceImg2,
    backgroundStyle: {
      background: `url(${ServiceBg2}) no-repeat center/cover`,
    },
  },
  {
    title: "Start-to-Finish Excellence",
    description:
      "From vision to launch, we manage every detail to build, scale, and ensure your prop firm's success.",
    image: ServiceImg3,
    backgroundStyle: {
      background: `url(${ServiceBg3}) no-repeat center/cover`,
    },
  },
  {
    title: "Dream Website",
    description:
      "We design custom-branded websites that bring your vision to life and surpass expectations, creating a lasting first impression for your customers.",
    image: ServiceImg4,
    backgroundStyle: {
      background: `url(${ServiceBg5}) no-repeat center/cover`,
    },
    imgClass: "mt-[-230px] ",
    imgRight: true,
  },
  {
    title: "Mobile Friendly",
    description:
      "We recognize the importance of engaging with mobile devices, which is why we also focus on ensuring every project is both mobile and tablet friendly.",
    image: ServiceImg5,
    backgroundStyle: {
      background: `url(${ServiceBg5}) no-repeat center/cover`,
    },
  },
  {
    title: "Top Line Work",
    description:
      "We create dashboards and websites with passion and precision, using top technologies like React and Node.js for outstanding results.",
    image: ServiceImg6,
    backgroundStyle: {
      background: `url(${ServiceBg6}) no-repeat top/contain`,
    },
    imgClass: "mt-[95px]",
  },
];
const ServiceCard = ({
  title,
  description,
  image,
  backgroundStyle,
  imgClass,
  imgRight,
}) => {
  const gradientRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Cursor X relative to the card
    const y = e.clientY - rect.top; // Cursor Y relative to the card

    // Move the gradient block with the mouse
    gsap.to(gradientRef.current, {
      x: x - 52, // Adjust for centering
      y: y - 600, // Adjust for centering
      duration: 0.3, // Smooth transition
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    // Make the gradient block visible on hover
    gsap.to(gradientRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    // Hide the gradient block when the mouse leaves
    gsap.to(gradientRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      id="service-card"
      className="service-card rounded-[32px] overflow-hidden border border-solid relative border-t-[rgba(255,255,255,0.09)] border-l-[rgba(255,255,255,0.09)] border-b-0 border-r-0 pt-14 max-md:pt-[30px]"
      style={{
        ...backgroundStyle,
        boxShadow:
          "0px 1.652px 3.304px 0px rgba(0, 0, 0, 0.05), 0px 2.478px 20.652px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 12.391px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 165.217px 0px rgba(0, 0, 0, 0.10)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[467px] w-[90%] text-center mx-auto mb-5 relative z-[2] ">
        <h4 className="text-6xl text-center font-bold leading-none tracking-[-1.2px] text-white mb-5 max-xl:text-4xl max-lg:text-3xl max-md:text-[28px] max-md:mb-[10px]">
          {title}
        </h4>
        <p className="text-xl text-[#C5CEE6] leading-normal text-center max-lg:text-lg max-md:text-sm">
          {description}
        </p>
      </div>
      <div
        className={`flex justify-center mx-auto w-full relative z-0 ${imgClass}`}
      >
        <img
          src={image}
          alt={title}
          className={`block ${imgRight === true ? "ms-auto" : "mx-auto"}`}
        />
      </div>
      <div
        ref={gradientRef}
        className="absolute w-0 h-0 rounded-[100%] pointer-events-none"
        style={{
          boxShadow: "0 0 154px 40px #ffffff",
          opacity: 0, // Initially hidden
          transition: "opacity 0.3s ease", // Fallback for non-GSAP users
        }}
      ></div>
    </div>
  );
};
