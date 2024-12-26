import React, { useEffect } from 'react';
import RevolutionBg from "../assets/images/revolution-bg.png";
import RvBtm from "../assets/images/banner-btm.svg";
import RvCard1 from "../assets/images/rv-card1.png";
import RvCard2 from "../assets/images/rv-card2.png";
import RvCard3 from "../assets/images/rv-card3.png";
import AppleStoreIcon from "../assets/images/apple.svg";
import PlayStoreIcon from "../assets/images/play.svg";
import IphoneImg from "../assets/images/rv-phones.svg";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Revolution = () => {
    useEffect(() => {
        const applyAnimations = () => {
          if (window.innerWidth > 768) {
            // Add animations
            const randomMovement = (element, xRange, yRange, duration) => {
              gsap.to(element, {
                x: () => gsap.utils.random(-xRange, xRange),
                y: () => gsap.utils.random(-yRange, yRange),
                duration: duration,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
              });
            };
      
            randomMovement(".card1", 10, 10, 3);
            randomMovement(".card2", 15, 15, 4);
            randomMovement(".card3", 10, 10, 3.5);
          } else {
            // Kill animations below 768px
            gsap.killTweensOf(".card1");
            gsap.killTweensOf(".card2");
            gsap.killTweensOf(".card3");
      
            // Reset styles for mobile view
            document.querySelectorAll(".card1, .card2, .card3").forEach((element) => {
              element.style.transform = "translate(0, 0)";
            });
          }
        };
      
        // Initial check
        applyAnimations();
      
        // Add resize listener
        window.addEventListener("resize", applyAnimations);
      
        // Cleanup
        return () => {
          window.removeEventListener("resize", applyAnimations);
          // Ensure all animations are killed on cleanup
          gsap.killTweensOf(".card1");
          gsap.killTweensOf(".card2");
          gsap.killTweensOf(".card3");
        };
      }, []);
      

    return (
        <section>
            <div
                className='relative pt-[140px] bg-cover bg-center bg-no-repeat max-md:pt-10'
                style={{ backgroundImage: `url(${RevolutionBg})` }}
            >
                <div className='container'>
                    <div className='max-w-[1072px] w-full text-center mx-auto'>
                        <h2 className='text-[36px] md:text-[80px] lg:text-[120px] font-bold leading-none text-white -tracking-[1.44px] xl:-tracking-[4.8px] mb-5'>
                            Join the <span className='bg-heading-gradient'>revolution</span> of sports application
                        </h2>
                        <p className='text-base md:text-lg xl:text-2xl text-[rgba(255,255,255,0.80)] font-medium leading-7 md:leading-8 xl:leading-10 max-w-[864px] mx-auto w-full mb-10'>
                            Experience a new era of innovation. Transform the way you play, connect, and strategize with cutting-edge technology designed to elevate your prop firm and redefine your sports experience!
                        </p>
                    </div>
                    <div className='flex items-center justify-between gap-6 max-w-[532px] w-full mx-auto mb-12 max-md:gap-[10px] max-md:justify-center max-md:mb-0'>
                        <Link
                            to="/"
                            className="px-10 py-5 flex gap-5 bg-[#061838] rounded-[14px] border border-solid 
                            border-[rgba(255,255,255,0.15)] max-md:px-[20px] max-md:py-[10px] max-md:gap-[10px]"
                        >
                            <img src={AppleStoreIcon} alt="Apple Store" className='w-9 max-md:w-6' />
                            <div>
                                <span className="text-white text-lg block leading-[1.2] mb-1 max-md:text-xs">
                                    Download on the
                                </span>
                                <span className="text-white text-xl font-medium block leading-[1.2] max-md:text-sm">
                                    App Store
                                </span>
                            </div>
                        </Link>
                        <Link
                            to="/"
                            className="px-10 py-5 flex gap-5 bg-[#061838] rounded-[14px] border 
                            border-solid border-[rgba(255,255,255,0.15)] max-md:px-[20px] max-md:py-[10px] max-md:gap-[10px]"
                        >
                            <img src={PlayStoreIcon} alt="Apple Store" className='w-9 max-md:w-6' />
                            <div>
                                <span className="text-white text-lg block leading-[1.2] mb-1 max-md:text-xs">
                                    Get it on
                                </span>
                                <span className="text-white text-xl font-medium block leading-[1.2] max-md:text-sm">
                                    Google Play
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-10 max-md:flex-col max-md:gap-0'>
                        <img src={RvCard1} alt='card1' className='card1 max-w-[318px] w-full' />
                        <img src={RvCard2} alt='card2' className='card2 max-w-[514px] w-full' />
                        <img src={RvCard3} alt='card3' className='card3 max-w-[339px] w-full' />
                    </div>
                </div>
            </div>
            <div className='relative '>
                <img src={IphoneImg} alt='iphones' className='mx-auto' />
                <div className="absolute bottom-0 left-0 right-0  w-full z-[1]">
                    <img src={RvBtm} alt="dev bottom gradient" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Revolution;