import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerImg from "../assets/images/dev-banner-img.png"
import CodeImg from "../assets/images/dev-code.png"
import BannerBtm from "../assets/images/dev-banner-btm.png";
import LinesLeft from "../assets/images/line-left.svg";
import LinesRight from "../assets/images/line-right.svg";
gsap.registerPlugin(ScrollTrigger);

const DevelopmentBanner = () => {
    // const macbookRef = useRef(null);
    const bannerRef = useRef(null);
    const headingRef = useRef(null);

    //   useEffect(() => {
    //     requestAnimationFrame(() => {
    //       // Animation for the heading
    //       gsap.fromTo(
    //         headingRef.current,
    //         { y: 0, opacity: 1 },
    //         {
    //           y: -100,
    //           opacity: 0,
    //           duration: 1.2,
    //           // ease: "power3.out",
    //           scrollTrigger: {
    //             trigger: bannerRef.current,
    //             start: "5% top",
    //             end: "20% top",
    //             scrub: true,
    //           },
    //         }
    //       );
    //       // Animation for the Cards
    //       gsap.fromTo(
    //         cardRef.current,
    //         { y: 0, opacity: 1 },
    //         {
    //           y: -200,
    //           opacity: 0,
    //           duration: 1.2,
    //           scrollTrigger: {
    //             trigger: bannerRef.current,
    //             start: "10% top",
    //             end: "20% top",
    //             scrub: true,
    //           },
    //         }
    //       );
    //       gsap.fromTo(
    //         cardTwoRef.current,
    //         { y: 0, opacity: 1 },
    //         {
    //           y: -200,
    //           opacity: 0,
    //           duration: 1.5,
    //           scrollTrigger: {
    //             trigger: bannerRef.current,
    //             start: "10% top",
    //             end: "20% top",
    //             scrub: 1,
    //           },
    //         }
    //       );
    //       gsap.fromTo(
    //         macbookRef.current,
    //         { width: "70%", height: "70vh", borderRadius: "16px" },
    //         {
    //           width: "100%",
    //           height: "100vh",
    //           duration: 2,
    //           borderRadius: 0,
    //           ease: "power3.out",
    //           scrollTrigger: {
    //             trigger: bannerRef.current,
    //             start: "30% top",
    //             end: "70% top",
    //             scrub: true,
    //           },
    //         }
    //       );
    //     });
    //   }, []);

    return (
        <section
            className="pt-[144px] bg-center bg-cover bg-no-repeat relative"
            ref={bannerRef}
        //   style={{
        //     // backgroundImage: `radial-gradient(circle at -30% 20%, #132436 10%, transparent 100%)`,
        //     // backgroundImage: `url(${HeroBg})`,
        //   }}
        >
            <div className="container relative z-[1]">
                <div className="text-center mb-10" ref={headingRef}>
                    <h1 className="text-[120px] text-white font-bold leading-none mb-5 max-xl:text-7xl max-lg:text-[3.5rem] max-md:text-4xl max-md:mb-2 ">
                        Development
                    </h1>
                    <p className="text-2xl leading-10 font-normal text-[#CCCDCD] max-w-[846px] w-full mx-auto max-lg:text-xl max-lg:leading-relaxed max-md:text-base">
                        At PropPicks, we prioritize excellence by utilizing top-tier technologies like React and Node.js to deliver the best results for our clients.
                    </p>
                    <figure className="mt-8 -mb-[150px] md:-mb-[220px] lg:-mb-[320px] xl:-mb-[450px]">
                        <img src={CodeImg} alt="code-img" className="max-w-[200px] md:max-w-[300px] lg:max-w-[500px] xl:max-w-[705px] w-full mx-auto" />
                    </figure>
                </div>
            </div>
            {/* video banner  */}
            <div
                // ref={macbookRef}
                className="macbook mx-auto"
            >
                <img
                    src={BannerImg}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Banner Lines */}
            <div className="absolute top-44 right-0 mx-w-[480px] max-md:max-w-[200px]">
                <img src={LinesRight} alt="lines" loading="lazy" />
            </div>
            <div className="absolute top-44 left-0 mx-w-[480px] max-md:max-w-[200px]">
                <img src={LinesLeft} alt="lines" loading="lazy" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <img src={BannerBtm} alt="dev top gradient" className="w-full" />
            </div>
        </section>
    );
};

export default DevelopmentBanner;
