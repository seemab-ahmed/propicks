import React from 'react'
import IconTop from "../assets/images/dev-icon-top.svg"
import DevelopBg from "../assets/images/develop-shadow.png"
import CardLeftBg from "../assets/images/develop-card-left.png"
import CardRightBg from "../assets/images/develop-card-right.png"
import DevelopShadow from "../assets/images/dev-card-bg.png"
import DevelopBtm from "../assets/images/develop-btm.png"
import { Link } from 'react-router-dom'

const Develop = () => {
    return (
        <section className='relative bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${DevelopBg})` }}>
            <div className="absolute top-0 left-0 right-0 w-full rotate-180">
                <img src={DevelopBtm} alt="dev top gradient" className="w-full" />
            </div>
            <div className='container'>
                <div className='flex items-center justify-center flex-col mb-[60px] text-center'>
                    <img src={IconTop} alt='icon' />
                    <h2 className='text-[36px] md:text-[80px] lg:text-[120px] xl:text-[180px] font-bold leading-none text-white -tracking-[1.44px] xl:-tracking-[7.2px] -mt-20 xl:-mt-28 mb-5'>&lt;<span className='bg-blue-gradient tracking-[0]'>/</span> <b className='text-[36px] md:text-[50px] lg:text-[80px] xl:text-[120px] -tracking-[1.44px] xl:-tracking-[4.8px]'>Develop</b> &gt;</h2>
                    <p className='text-base md:text-lg xl:text-2xl text-[#C5CEE6] font-normal leading-7 md:leading-8 xl:leading-10 max-w-[870px] w-full mx-auto'>When it comes to mobile development, PropPicks combines innovation with precision to keep your business at the forefront of technology.</p>
                </div>
                <div className='max-w-[1260px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8 pb-[140px] relative'>
                    <div className='min-h-[529px] xl:min-h-[789px] h-full bg-cover bg-no-repeat rounded-[20px] xl:rounded-[40px] border border-[rgba(255,255,255,0.00)] overflow-hidden' style={{ backgroundImage: `url(${CardLeftBg})` }}></div>
                    <div className='min-h-[529px] xl:min-h-[789px] h-full p-5 xl:p-10 flex flex-col justify-end bg-cover bg-no-repeat border border-[rgba(255,255,255,0.00)] rounded-[20px] xl:rounded-[40px] overflow-hidden' style={{ backgroundImage: `url(${CardRightBg})` }}>
                        <h3 className='text-[32px] md:text-[40px] xl:text-[60px] font-bold leading-none text-white -tracking-[1.2px] mb-5'>Technology <br /> Stack</h3>
                        <p className='text-sm md:text-lg xl:text-xl font-normal leading-7 xl:leading-8 text-[#C5CEE6] mb-8'>We create dashboards and websites with passion and precision, using top technologies like React and Node.js for outstanding results.</p>
                        <Link
                            to="/"
                            className="btn blue text-center py-3 xl:py-5 px-10 text-lg leading-none block text-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)]  max-md:text-base hover:text-white max-w-fit"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
                            }}
                        >
                            <span className="relative z-[2]">Read More</span>
                        </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 mx-auto right-0 w-full -z-[1]">
                        <img src={DevelopShadow} alt="dev shadow gradient" className="w-full object-cover object-center" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <img src={DevelopBtm} alt="dev bottom gradient" className="w-full" />
            </div>
        </section>
    )
}

export default Develop