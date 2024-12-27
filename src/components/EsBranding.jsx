import React from 'react'
import BrandingBg from "../assets/images/branding-shadow.webp"
import BdCard1 from "../assets/images/bd-card1.png"
import BdCard2 from "../assets/images/bd-card2.png"
import BdCard3 from "../assets/images/bd-card3.png"
import BdCard4 from "../assets/images/bd-card4.png"
import BdCard5 from "../assets/images/bd-card5.png"
import BdCard6 from "../assets/images/bd-card6.png"
import BsCard1 from "../assets/images/bs-card1.png"
import BsCard2 from "../assets/images/bs-card2.png"
import BsCard3 from "../assets/images/bs-card3.png"
import BsCard4 from "../assets/images/bs-card4.png"
import BrandingImg from "../assets/images/branding-img.png"
import WhtiteBtm from "../assets/images/white-btm.png"
import { Link } from 'react-router-dom'

const EsBranding = () => {
    const bsTabsLinks = [
        {
            text: "Design",
        },
        {
            text: "HTML",
        },
        {
            text: "Develop",
        },
        {
            text: "IOS / Android",
        },
        {
            text: "All platforms",
        },
        {
            text: "Make your clients remember",
        },
    ]
    return (
        <section className='pt-[96px] px-5'>
            <div className='bg-white rounded-[32px] md:rounded-[80px] overflow-hidden'>
                <div className='relative bg-cover bg-no-repeat py-[319px] max-md:py-[80px]' style={{ backgroundImage: `url(${BrandingBg})` }}>
                    <div className='container text-center'>
                        <h2 className='text-[60px] md:text-[80px] lg:text-[120px] xl:text-[180px] font-bold leading-none text-[#0F172A] -tracking-[1.44px] xl:-tracking-[7.2px] mb-[10px] md:mb-5'>Branding</h2>
                        <p className='text-2xl md:text-lg xl:text-[32px] text-[rgba(15,23,42,0.80)] font-normal leading-7 md:leading-8 xl:leading-10'>Let’s make your firm stand out.</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
                        <img src={WhtiteBtm} loading="lazy" alt="top gradient" className="w-full" />
                    </div>
                </div>
                <div className=' md:py-[80px] py-0'>
                    <div className='max-w-[1520px] w-[90%] mx-auto block max-md:hidden'>
                        <div className='grid grid-cols-12 gap-6 mb-6 max-md:gap-[10px]'>
                            <div className='grid grid-cols-1 gap-6 col-span-5'>
                                <figure className='branding-card bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img loading="lazy" src={BdCard1} alt='card-img' />
                                </figure>
                                <figure className='branding-card bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img loading="lazy" src={BdCard3} alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-7'>
                                <figure className='branding-card bg-[#010510] rounded-[40px] flex justify-center items-center pt-[90px] pl-[30px] overflow-hidden h-full'>
                                    <img src={BdCard2} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-6'>
                            <div className='col-span-5'>
                                <figure className='branding-card bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img src={BdCard4} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-5'>
                                <figure className='branding-card bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img src={BdCard5} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-2'>
                                <figure className='branding-card bg-[#010510] rounded-[40px] flex justify-center items-center p-4 overflow-hidden h-full'>
                                    <img src={BdCard6} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[1520px] w-[90%] mx-auto hidden max-md:block '>
                        <div className='grid grid-cols-12 gap-6 mb-6 max-md:gap-[10px]'>
                            <div className='grid grid-cols-1 gap-6 col-span-5'>
                                <figure className='bg-[#010510] rounded-[26px] flex justify-center 
                                items-center  overflow-hidden h-full pt-[42px] pb-5 max-h-[230px]'>
                                    <img src={BdCard1} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-7'>
                                <figure className='bg-[#010510] rounded-[26px] flex justify-center 
                                items-center pl-6 overflow-hidden h-full max-h-[230px]'>
                                    <img src={BdCard2} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-6'>
                                <figure className='bg-[#010510] rounded-[26px] flex justify-center
                                 items-center px-[0px] overflow-hidden h-full max-h-[230px]'>
                                    <img src={BdCard4} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-6'>
                                <figure className='bg-[#010510] rounded-[26px] flex justify-center 
                                items-center px-[10px] overflow-hidden h-full max-h-[230px]'>
                                    <img src={BdCard3} loading="lazy" alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-6'>
                                <figure className='bg-[#010510] rounded-[26px] flex justify-center 
                                items-center p-0 overflow-hidden h-full max-h-[230px]'>
                                    <img src={BdCard6} loading="lazy" alt='card-img' className='block max-h-[230px]' />
                                </figure>
                            </div>
                            <div className='col-span-6'>
                                <figure className='bg-[#010510] rounded-[26px] flex justify-center 
                                items-center py-[70px] px-[0px] overflow-hidden h-full max-h-[230px]'>
                                    <img src={BdCard5} loading="lazy" alt='card-img' />
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='py-[80px] max-md:pb-[22px] max-md:pt-4'>
                    <div className='container'>
                        <div className='text-center max-w-[1072px] mx-auto w-full mb-11 max-md:mb-6'>
                            <h2 className='text-[120px] font-bold leading-tight -tracking-[4..8px] mb-5 max-md:text-4xl'><span className='bg-purple-gradient'>A brand system equals higher value</span></h2>
                            <p className='max-w-[854px] w-full text-2xl font-medium leading-10 text-[#3E5462] mx-auto max-md:text-base'>A strong brand system translates to higher value consistency, recognition, and trust that drive success and elevate your propfirm.</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-3'>
                            <div
                                className='px-[60px] pt-20 rounded-[40px] border border-[rgba(255,255,255,0.40)] overflow-hidden max-md:pt-[38px]'
                                style={{
                                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972FF"
                                }}>
                                <div className='text-center mb-[70px] max-md:mb-[55px]'>
                                    <h3 className='text-[60px] font-bold leading-none text-white -tracking-[1.2px] mb-5 max-md:text-[28px] max-md:mb-[10px]'>Cool Emails?</h3>
                                    <p className='text-xl leading-8 text-white font-normal max-md:text-sm'>We do them for you!</p>
                                </div>
                                <figure>
                                    <img src={BsCard1} loading="lazy" alt='bs-card' />
                                </figure>
                            </div>
                            <div>
                                <div className='bg-light-purple-gradient rounded-[40px] border border-[rgba(255,255,255,0.40)] overflow-hidden px-9 py-8 mb-6 max-md:px-[17px] max-md:py-5 max-md:rounded-[20px] max-md:mb-[12px]'>
                                    <figure>
                                        <img src={BsCard2} loading="lazy" alt='bs-card' />
                                    </figure>
                                </div>
                                <ul className='grid grid-cols-2 gap-x-2 gap-y-6 max-md:gap-y-[10px]'>
                                    {bsTabsLinks.map((item) => (
                                        <li>
                                            <Link className='btn h-[85px] bg-[#F6F6F6] border border-[rgba(60,96,179,0.10)] 
                                        rounded-[100px] text-lg font-medium text-center leading-none text-[#040A1F] 
                                        flex items-center justify-center max-md:h-[60px] max-md:text-sm'>
                                                <span className='relative z-[2]'>{item.text}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='rounded-[40px] border border-[rgba(255,255,255,0.40)] overflow-hidden'>
                                <figure>
                                    <img src={BsCard3} loading="lazy" alt='bs-card' />
                                </figure>
                            </div>
                            <div className='border border-[rgba(255,255,255,0.40)] overflow-hidden'>
                                <figure>
                                    <img src={BsCard4} loading="lazy" alt='bs-card' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className="absolute top-0 left-0 right-0 w-full z-[1] rotate-180">
                        <img src={WhtiteBtm} alt="bottom gradient" loading="lazy" className="w-full" />
                    </div>
                    <figure>
                        <img src={BrandingImg} loading="lazy" alt='branding-img' />
                    </figure>
                    <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
                        <img src={WhtiteBtm} alt="top gradient" loading="lazy" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EsBranding