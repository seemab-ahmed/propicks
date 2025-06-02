import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ServicesBg from "../assets/images/service-bg.png";
import ServiceTop from "../assets/images/dev-top.png";
import ServiceImg1 from "../assets/images/service-1.svg";
import ServiceImg2 from "../assets/images/service-2.svg";
import ServiceBg1 from "../assets/images/service-card-bg-1.svg";
import ServicesVideo1 from "../assets/video/services-vid1.webm";
import ServicesVideo1Mp4 from "../assets/video/services-vid1.webm";
import ServicesVideo2 from "../assets/video/services-vid2.webm";
import ServicesVideo2Mp4 from "../assets/video/services-vid2.webm";
import ServicesVideo3 from "../assets/video/services-vid3.webm";
import ServicesVideo3Mp4 from "../assets/video/services-vid3.webm";
import ServicesVideo4 from "../assets/video/services-vid4.webm";
import ServicesVideo4Mp4 from "../assets/video/services-vid4.webm";
import ServicesVideo6 from "../assets/video/services-vid6.webm";
import ServicesVideo6Mp4 from "../assets/video/services-vid6.webm";
import ServiceBg2 from "../assets/images/service-card-bg-2.png";
import ServiceImg3 from "../assets/images/service-3.svg";
import ServiceBg3 from "../assets/images/service-card-bg-3.svg";
import ServiceImg4 from "../assets/images/service-4.png";
import ServiceImg5 from "../assets/images/service-5.png";
import ServiceGif5 from "../assets/images/services-5_new.gif";
import ServiceBg5 from "../assets/images/service-card-bg-5.svg";
import ServiceImg6 from "../assets/images/service-6.png";
import ServiceBg6 from "../assets/images/service-card-bg-6.svg";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ isMobile, isIntersecting }) => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  // Preload important media on component mount
  useEffect(() => {
    // Preload background image
    const bgImg = new Image();
    bgImg.src = ServicesBg;

    // Preload videos (both webm and mp4)
    const videoUrls = [
      ServicesVideo1, ServicesVideo1Mp4,
      ServicesVideo2, ServicesVideo2Mp4,
      ServicesVideo3, ServicesVideo3Mp4,
      ServicesVideo4, ServicesVideo4Mp4,
      ServicesVideo6, ServicesVideo6Mp4
    ];
    videoUrls.forEach(url => {
      const video = document.createElement('video');
      video.src = url;
      video.preload = 'auto';
    });

    // Preload critical mobile images
    const mobileImages = [
      ServiceImg1, ServiceImg2, ServiceImg3, 
      ServiceImg4, ServiceImg5, ServiceImg6
    ];
    mobileImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Preload GIF
    const gif = new Image();
    gif.src = ServiceGif5;
  }, []);

  // Animation setup remains the same
  useEffect(() => {
    const setupAnimations = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (isDesktop) {
        // Animate left column cards
        document.querySelectorAll(".col-left .service-card").forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, rotate: -30, x: "-20%" },
            {
              opacity: 1,
              rotate: 0,
              x: "0%",
              duration: 1.5,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
              },
            }
          );
        });

        // Animate right column cards
        document.querySelectorAll(".col-right .service-card").forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, rotate: 30, x: "20%" },
            {
              opacity: 1,
              rotate: 0,
              x: "0%",
              duration: 1.5,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      } else {
        document.querySelectorAll(".col-left .service-card, .col-right .service-card").forEach((card) => {
          gsap.set(card, { opacity: 1, rotate: 0, x: "0%" });
        });
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };

    setupAnimations();
    const resizeListener = () => setupAnimations();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-[142px] pb-[0px] bg-no-repeat bg-cover relative overflow-hidden max-lg:py-28 max-md:pt-10 max-md:pb-[106px]"
      style={{
        background: `url(${ServicesBg}) no-repeat center/cover`,
        backgroundPositionX: "center",
        backgroundPositionY: "0%",
      }}
    >
      {/* Top gradient - loaded eagerly as it's above the fold */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <img 
          src={ServiceTop} 
          alt="" 
          loading="eager"
          className="w-full" 
          width="1920" 
          height="150"
        />
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
          {/* Left column */}
          <div className="col-left grid grid-cols-1 gap-8">
            {servicesData
              .filter((_, index) => index % 2 === 0)
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  gifImg={service.gifImg}
                  image={service.image}
                  video={service.video}
                  videoMp4={service.videoMp4}
                  backgroundStyle={service.backgroundStyle}
                  imgClass={service.imgClass}
                  isVideo={service.isVideo}
                  isMobile={isMobile}
                  isIntersecting={isIntersecting}
                  ref={(el) => (videoRefs.current[index] = el)}
                />
              ))}
          </div>
          
          {/* Right column */}
          <div className="col-right grid grid-cols-1 gap-8">
            {servicesData
              .filter((_, index) => index % 2 !== 0)
              .map((service, index) => (
                <ServiceCard
                  key={index + 10}
                  title={service.title}
                  description={service.description}
                  gifImg={service.gifImg}
                  image={service.image}
                  video={service.video}
                  videoMp4={service.videoMp4}
                  backgroundStyle={service.backgroundStyle}
                  imgClass={service.imgClass}
                  isVideo={service.isVideo}
                  isMobile={isMobile}
                  isIntersecting={isIntersecting}
                  ref={(el) => (videoRefs.current[index + 10] = el)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = React.forwardRef(({
  title,
  description,
  image,
  gifImg,
  backgroundStyle,
  imgClass,
  imgRight,
  video,
  videoMp4,
  isVideo = false,
  isMobile,
  isIntersecting
}, ref) => {
  const gradientRef = useRef(null);
  const videoElementRef = useRef(null);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Combine forwarded ref with local ref
  React.useImperativeHandle(ref, () => ({
    video: videoElementRef.current
  }));

  // Start playing videos when they come into view
  useEffect(() => {
    if (isVideo && videoElementRef.current && isIntersecting) {
      const playVideo = () => {
        videoElementRef.current.play()
          .catch(e => {
            console.log("Autoplay prevented:", e);
            // Fallback for Safari
            videoElementRef.current.muted = true;
            videoElementRef.current.play()
              .catch(e => console.log("Fallback autoplay failed:", e));
          });
      };

      if (isSafari && videoElementRef.current.readyState < 3) {
        videoElementRef.current.load();
        videoElementRef.current.onloadeddata = playVideo;
      } else {
        playVideo();
      }
    }
  }, [isIntersecting, isVideo, isSafari]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(gradientRef.current, {
      x: x - 52,
      y: y - 600,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    gsap.to(gradientRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    gsap.to(gradientRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="service-card min-h-[200px] rounded-[32px] overflow-hidden border border-solid relative border-t-[rgba(255,255,255,0.09)] border-l-[rgba(255,255,255,0.09)] border-b-0 border-r-0 pt-14 max-md:pt-[30px]"
      style={{
        ...backgroundStyle,
        boxShadow: "0px 1.652px 3.304px 0px rgba(0, 0, 0, 0.05), 0px 2.478px 20.652px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 12.391px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 165.217px 0px rgba(0, 0, 0, 0.10)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[467px] w-[90%] text-center mx-auto mb-5 relative z-[2]">
        <h4 className="text-6xl text-center font-bold leading-none tracking-[-1.2px] text-white mb-5 max-xl:text-4xl max-lg:text-3xl max-md:text-[28px] max-md:mb-[10px]">
          {title}
        </h4>
        <p className="text-xl text-[#C5CEE6] leading-normal text-center max-lg:text-lg max-md:text-sm">
          {description}
        </p>
      </div>
      
      <div className={`flex justify-center mx-auto w-full relative z-0 ${imgClass}`}>
        {/* Desktop content */}
        {!isMobile && (
          <div className="hidden md:block">
            {isVideo ? (
              <video
                ref={videoElementRef}
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                aria-label={`${title} demonstration`}
              >
                <source src={video} type="video/webm" />
                <source src={videoMp4} type="video/mp4" />
              </video>
            ) : (
              <img
                src={gifImg}
                alt={title}
                loading="eager"
                decoding="async"
                width="auto"
                height="auto"
                className={`block ${imgRight ? "ms-auto" : "mx-auto"}`}
              />
            )}
          </div>
        )}
        
        {/* Mobile content */}
        <div className="block md:hidden">
          <img
            src={image}
            alt={title}
            loading="eager"
            decoding="async"
            width="auto"
            height="auto"
            className={`block ${imgRight ? "ms-auto" : "mx-auto"}`}
          />
        </div>
      </div>
      
      {/* Gradient effect - disabled on mobile */}
      {!isMobile && (
        <div
          ref={gradientRef}
          className="absolute w-0 h-0 rounded-[100%] pointer-events-none"
          style={{
            boxShadow: "0 0 154px 40px #ffffff",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        ></div>
      )}
    </div>
  );
});

const servicesData = [
  {
    title: "White Glove Service",
    description: "Personalized, seamless, and exceptional service tailored to your every need.",
    image: ServiceImg1,
    video: ServicesVideo1,
    videoMp4: ServicesVideo1Mp4,
    isVideo: true,
    imgClass: "md:-my-6",
    backgroundStyle: { background: `url(${ServiceBg1}) no-repeat center/cover` },
  },
  {
    title: "Creative Design",
    description: "Making sure your firm is creating distinctive and impactful designs that bring your vision to life.",
    image: ServiceImg2,
    video: ServicesVideo2,
    videoMp4: ServicesVideo2Mp4,
    isVideo: true,
    backgroundStyle: { background: `url(${ServiceBg2}) no-repeat center/cover` },
  },
  {
    title: "Start-to-Finish Excellence",
    description: "From vision to launch, we manage every detail to build, scale, and ensure your prop firm's success.",
    image: ServiceImg3,
    video: ServicesVideo3,
    videoMp4: ServicesVideo3Mp4,
    isVideo: true,
    backgroundStyle: { background: `url(${ServiceBg3}) no-repeat center/cover` },
  },
  {
    title: "Dream Website",
    description: "We design custom-branded websites that bring your vision to life and surpass expectations.",
    image: ServiceImg4,
    video: ServicesVideo4,
    videoMp4: ServicesVideo4Mp4,
    isVideo: true,
    backgroundStyle: { background: `url(${ServiceBg5}) no-repeat center/cover` },
    imgClass: "md:m-[-100px_0_-20px] md:max-h-[480px] laptop-img sm:m-[-300px_0_-40px] m-[-150px_0_-60px]",
    imgRight: true,
  },
  {
    title: "Mobile Friendly",
    description: "We recognize the importance of engaging with mobile devices.",
    gifImg: ServiceGif5,
    image: ServiceImg5,
    imgClass: "md:m-[-285px_0_-20px]",
    backgroundStyle: { background: `url(${ServiceBg5}) no-repeat center/cover` },
  },
  {
    title: "Top Line Work",
    description: "We create dashboards and websites with passion and precision.",
    image: ServiceImg6,
    video: ServicesVideo6,
    videoMp4: ServicesVideo6Mp4,
    isVideo: true,
    backgroundStyle: { background: `url(${ServiceBg6}) no-repeat top/contain` },
    imgClass: "md:mt-[-44px]",
  },
];

export default Services;