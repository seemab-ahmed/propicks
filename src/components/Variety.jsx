import React from 'react';
import "swiper/css";
import "swiper/css/autoplay"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct import
import VarietyBg from "../assets/images/variety-bg.png";
import VarietyBtm from "../assets/images/banner-btm.svg";
import BoxingBtn from "../assets/images/boxing-btn.svg";
import SoccerBtn from "../assets/images/soccer-btn.svg";
import FootballBtn from "../assets/images/football-btn.svg";
import BaseballBtn from "../assets/images/baseball-btn.svg";
import UfcBtn from "../assets/images/ufc-btn.svg";
import InterfaceIcon from "../assets/images/interface-icon.svg";
import UpdateIcon from "../assets/images/update-icon.svg";
import SecureIcon from "../assets/images/secure-icon.svg";
import IntergrationIcon from "../assets/images/intergration.svg";
import DiverseIcon from "../assets/images/diverse.svg";
import SupportIcon from "../assets/images/support.svg";
import VarietyCardBg from "../assets/images/variety-card-bg.png";
import RvBtm from "../assets/images/banner-btm.svg";
import { Link } from 'react-router-dom';

const Variety = () => {
    const secret = [
        {
            icon: InterfaceIcon,
            title: 'User-Friendly Interface',
            para: 'Navigate effortlessly through our sleek and intuitive app. Whether youre a seasoned bettor or just getting started, our platform is designed for everyone.',
        },
        {
            icon: UpdateIcon,
            title: 'Real-Time Odds & Update',
            para: 'Stay ahead of the game with live odds and instant updates. Make informed decisions and place your bets with confidence.',
        },
        {
            icon: SecureIcon,
            title: 'Secure Transactions',
            para: 'Bet with peace of mind. Our advanced security measures ensure that your data and transactions are safe and protected.',
        },
        {
            icon: IntergrationIcon,
            title: 'Easy integration',
            para: 'We make integrating our mobile app for your clients a breeze. With the support of our top-tier development team, we ensure a seamless setup process.',
        },
        {
            icon: DiverseIcon,
            title: 'Diverse Betting Options',
            para: 'Navigate effortlessly through our sleek and intuitive app. Whether youre a seasoned bettor or just getting started, our platform is designed for everyone.',
        },
        {
            icon: SupportIcon,
            title: '24/7 Customer Support',
            para: '.We’re here for you anytime, anywhere. Our dedicated support team is ready to assist you with any questions or issues you might have.',
        },
    ];

    const buttons = [
        { id: 1, src: BoxingBtn },
        { id: 2, src: SoccerBtn },
        { id: 3, src: FootballBtn },
        { id: 4, src: BaseballBtn },
        { id: 5, src: UfcBtn },
    ];

    return (
        <section className='pt-[142px] bg-no-repeat bg-cover relative max-md:pt-10' style={{ backgroundImage: `url(${VarietyBg})` }}>
            <div className="absolute top-0 left-0 right-0 w-full z-[1] rotate-180">
                <img src={VarietyBtm} loading="lazy" alt="dev bottom gradient" className="w-full" />
            </div>
            <div className='max-w-[1520px] w-[90%] mx-auto max-md:overflow-hidden'>
                <h2 className='text-[36px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[120px] font-bold 
                leading-none text-white -tracking-[1.44px] xl:-tracking-[4.8px] 
                mb-[84px]  max-md:mb-[10px] text-center'>Choose from a variety sports</h2>
                <p className="hidden text-base text-white text-center max-md:block
                max-md:mb-10">Experience a new era of innovation. Transform the way you play, connect, and strategize with cutting-edge technology designed to elevate your prop firm and redefine your sports experience!</p>
                <div className="mb-[142px] max-md:mb-10">
                    {/* Desktop View */}
                    <ul className="grid grid-cols-5 gap-10 max-md:hidden">
                        {buttons.map((button) => (
                            <li key={button.id} className='2xl:h-[88px] xl:h-[76px] lg:h-16 md:h-14 h-10'>
                                <Link to="/" className='block h-full'> 
                                    <img src={button.src} alt="btn" loading="lazy" className='h-full w-full block' />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile View */}
                    <div className="hidden max-md:block max-md:overflow-hidden">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={2}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]} // Register the Autoplay module
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                640: { slidesPerView: 2 },
                            }}
                        >
                            {buttons.map((button) => (
                                <SwiperSlide key={button.id}>
                                    <Link to="">
                                        <img src={button.src} alt="btn" className='max-w-[164px] w-full h-[55px]' />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <h2 className='text-[28px] md:text-[32px] lg:text-[45px] xl:text-[90px] 
                leading-normal font-bold max-w-[1280px] w-full mx-auto text-center max-md:mb-10
                '>
                    <span className='bg-heading-gradient'>Here’s why you’ll love betting with our app</span></h2>
            </div>
            <div className='max-w-[1380px] w-[90%] mx-auto relative pb-[160px] max-md:pb-[90px]'>
                <div className='text-center'>
                    <h2 className='text-[36px] md:text-[80px] lg:text-[120px] font-bold leading-none 
                    text-white -tracking-[1.44px] xl:-tracking-[4.8px] mb-5 max-md:mb-[10px]'>What’s our secret?</h2>
                    <p className='text-base md:text-lg xl:text-2xl text-[rgba(255,255,255,0.80)] 
                    font-medium leading-7 md:leading-8 xl:leading-10 max-w-[854px] mx-auto w-full mb-10
                    max-md:mb-8 max-md:text-base'>At Proppicks, we’ve revolutionized the world of sports betting. Our state-of-the-art application brings you a seamless and thrilling betting experience like no other.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {secret.map((item, index) => (
                        <div key={index} className='p-8 bg-[#030818] border border-[rgba(255,255,255,0.10)] 
                        rounded-[32px] max-md:p-6 max-md:rounded-[20px]'>
                            <figure className='bg-[#070F29] p-6 w-20 h-20 rounded-[24px] flex 
                            item-center justify-center mb-[100px] max-md:mb-[60px] max-md:w-[60px] 
                            max-md:h-[60px] max-md:rounded-[18px] max-md:p-4'>
                                <img src={item.icon} loading="lazy" alt='icon' />
                            </figure>
                            <div>
                                <h5 className='text-[32px] font-bold leading-none text-white 
                                -tracking-[0.64px] mb-2.5 max-md:text-[26px] max-md:mb-[10px]'>{item.title}</h5>
                                <p className='text-[20px] font-normal leading-8 text-[#C5CEE6]
                                max-md:text-base'>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='absolute bottom-0 left-0 right-0 w-full -z-[1]'>
                    <img src={VarietyCardBg} loading="lazy" alt='variety-card-bg' className='w-full object-cover object-center' />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
                <img src={RvBtm} loading="lazy" alt="dev bottom gradient" className="w-full" />
            </div>
        </section>
    );
};

export default Variety;
