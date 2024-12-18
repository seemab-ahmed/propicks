import React from 'react'
import RevolutionBg from "../assets/images/revolution-bg.png"
import RvBtm from "../assets/images/banner-btm.svg";
import RvCard1 from "../assets/images/rv-card1.png"
import RvCard2 from "../assets/images/rv-card2.png"
import RvCard3 from "../assets/images/rv-card3.png"
import AppleStoreIcon from "../assets/images/apple.svg";
import PlayStoreIcon from "../assets/images/play.svg";
import IphoneImg from "../assets/images/rv-phones.svg"
import { Link } from 'react-router-dom'

const Revolution = () => {
    return (
        <section>
            <div className='relative pt-[140px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${RevolutionBg})` }}>
                <div className='container'>
                    <div className='max-w-[1072px] w-full text-center mx-auto'>
                        <h2 className='text-[36px] md:text-[80px] lg:text-[120px] font-bold leading-none text-white -tracking-[1.44px] xl:-tracking-[4.8px] mb-5'>Join the <span className='bg-heading-gradient'>revolution</span> of sports application</h2>
                        <p className='text-base md:text-lg xl:text-2xl text-[rgba(255,255,255,0.80)] font-medium leading-7 md:leading-8 xl:leading-10 max-w-[864px] mx-auto w-full mb-10'>Experience a new era of innovation. Transform the way you play, connect, and strategize with cutting-edge technology designed to elevate your prop firm and redefine your sports experience!</p>
                    </div>
                    <div className='flex items-center justify-between gap-6 max-w-[532px] w-full mx-auto mb-12'>
                        <Link
                            to="/"
                            className="px-10 py-5 flex gap-5 bg-[#061838] rounded-[14px] border border-solid border-[rgba(255,255,255,0.15)]"
                        >
                            <img src={AppleStoreIcon} alt="Apple Store" className='w-9' />
                            <div>
                                <span className="text-white text-lg block leading-[1.2] mb-1">
                                    Download on the
                                </span>
                                <span className="text-white text-xl font-medium block leading-[1.2]">
                                    App Store
                                </span>
                            </div>
                        </Link>
                        <Link
                            to="/"
                            className="px-10 py-5 flex gap-5 bg-[#061838] rounded-[14px] border border-solid border-[rgba(255,255,255,0.15)]"
                        >
                            <img src={PlayStoreIcon} alt="Apple Store" className='w-9' />
                            <div>
                                <span className="text-white text-lg block leading-[1.2] mb-1">
                                    Get it on
                                </span>
                                <span className="text-white text-xl font-medium block leading-[1.2]">
                                    Google Play
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-10'>
                        <img src={RvCard1} alt='card1' className='max-w-[318px] w-full' />
                        <img src={RvCard2} alt='card2' className='max-w-[514px] w-full' />
                        <img src={RvCard3} alt='card3' className='max-w-[339px] w-full' />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={IphoneImg} alt='iphones' />
                <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
                    <img src={RvBtm} alt="dev bottom gradient" className="w-full" />
                </div>
            </div>
        </section>
    )
}

export default Revolution