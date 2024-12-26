import React from 'react'
import MbBg from "../assets/images/mb-bg-img.png"
import MbCard from "../assets/images/mb-cards.png"
import MbTop from "../assets/images/banner-btm.svg";
import { Link } from 'react-router-dom'

const MasterBetter = () => {
    return (
        <section className='relative pt-[160px] pb-[90px] max-md:pb-10 max-md:pt-10'>
            <div className='absolute left-0 top-0 right-0 w-full h-auto -z-[1]'>
                <img src={MbBg} alt='mb-bg' className='w-full object-cover' />
            </div>
            <div className="absolute top-0 left-0 right-0 w-full rotate-180 z-[1]">
                <img src={MbTop} alt="dev top gradient" className="w-full" />
            </div>
            <div className='max-w-[1400px] mx-auto w-[90%]'>
                <div className='text-center'>
                    <h2 className='text-[36px] md:text-[80px] lg:text-[120px] font-bold 
                    leading-none text-white -tracking-[1.44px] xl:-tracking-[4.8px] mb-5 max-md:mb-3'>Follow and <br /> copy <span className='bg-heading-gradient'>master betters</span></h2>
                    <p className='text-base md:text-lg xl:text-2xl text-[rgba(255,255,255,0.80)] 
                    font-medium leading-7 md:leading-8 xl:leading-10 max-w-[1040px] mx-auto 
                    w-full mb-6 max-md:text-base'>Propicks simplifies your betting experience. Select any professional better using the Propicks Social App, and start reproducing their results for yourself.</p>
                    <Link
                        to="/"
                        className="btn blue text-center py-3 xl:py-5 px-10 text-lg leading-none block text-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)]  max-md:text-base hover:text-white max-w-fit mx-auto"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
                        }}
                    >
                        <span className="relative z-[2]">Start Now</span>
                    </Link>
                </div>
                <div>
                    <img src={MbCard} alt='mb-bg' />
                </div>
                <Link
                    to="/grow-your-firm"
                    className="btn text-center py-[36px] text-2xl leading-none 
                    block text-white max-w-[329px] w-full bg-[rgba(61,127,222,0.10)] 
                    font-medium rounded-[10px] border border-[#3D7FDE]  
                    shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] max-md:py-5 
                    max-md:px-0 max-md:text-base max-md:max-w-[185px] hover:text-white mx-auto max-md:-mt-12 max-md:text-[#3D7FDE]"
                >
                    <span className="relative z-[2]">Grow your firm</span>
                </Link>
            </div>
        </section>
    )
}

export default MasterBetter