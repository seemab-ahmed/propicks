import React from 'react'
import BrandingBg from "../assets/images/branding-shadow.png"
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
            <div className='bg-white rounded-[80px] overflow-hidden'>
                <div className='relative bg-cover bg-no-repeat py-[319px]' style={{ backgroundImage: `url(${BrandingBg})` }}>
                    <div className='container text-center'>
                        <h2 className='text-[36px] md:text-[80px] lg:text-[120px] xl:text-[180px] font-bold leading-none text-[#0F172A] -tracking-[1.44px] xl:-tracking-[7.2px] mb-5'>Branding</h2>
                        <p className='text-base md:text-lg xl:text-[32px] text-[rgba(15,23,42,0.80)] font-normal leading-7 md:leading-8 xl:leading-10'>Let’s make your firm stand out.</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 w-full z-[1]">
                        <img src={WhtiteBtm} alt="top gradient" className="w-full" />
                    </div>
                </div>
                <div className='py-[80px]'>
                    <div className='max-w-[1520px] w-[90%] mx-auto'>
                        <div className='grid grid-cols-12 gap-6 mb-6'>
                            <div className='grid grid-cols-1 gap-6 col-span-5'>
                                <figure className='bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img src={BdCard1} alt='card-img' />
                                </figure>
                                <figure className='bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img src={BdCard3} alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-7'>
                                <figure className='bg-[#010510] rounded-[40px] flex justify-center items-center pt-[90px] pl-[30px] overflow-hidden h-full'>
                                    <img src={BdCard2} alt='card-img' />
                                </figure>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-6'>
                            <div className='col-span-5'>
                                <figure className='bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img src={BdCard4} alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-5'>
                                <figure className='bg-[#010510] rounded-[40px] flex justify-center items-center py-[70px] px-[60px] overflow-hidden h-full'>
                                    <img src={BdCard5} alt='card-img' />
                                </figure>
                            </div>
                            <div className='col-span-2'>
                                <figure className='bg-[#010510] rounded-[40px] flex justify-center items-center p-4 overflow-hidden h-full'>
                                    <img src={BdCard6} alt='card-img' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-[80px]'>
                    <div className='container'>
                        <div className='text-center max-w-[1072px] mx-auto w-full mb-11'>
                            <h2 className='text-[120px] font-bold leading-tight -tracking-[4..8px] mb-5'><span className='bg-purple-gradient'>A brand system equals higher value</span></h2>
                            <p className='max-w-[854px] w-full text-2xl font-medium leading-10 text-[#3E5462] mx-auto'>A strong brand system translates to higher value consistency, recognition, and trust that drive success and elevate your propfirm.</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div
                                className='px-[60px] pt-20 rounded-[40px] border border-[rgba(255,255,255,0.40)] overflow-hidden'
                                style={{
                                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972FF"
                                }}>
                                <div className='text-center mb-[70px]'>
                                    <h3 className='text-[60px] font-bold leading-none text-white -tracking-[1.2px] mb-5'>Cool Emails?</h3>
                                    <p className='text-xl leading-8 text-white font-normal'>We do them for you!</p>
                                </div>
                                <figure>
                                    <img src={BsCard1} alt='bs-card' />
                                </figure>
                            </div>
                            <div>
                                <div className='bg-light-purple-gradient rounded-[40px] border border-[rgba(255,255,255,0.40)] overflow-hidden px-9 py-8 mb-6'>
                                    <figure>
                                        <img src={BsCard2} alt='bs-card' />
                                    </figure>
                                </div>
                                <ul className='grid grid-cols-2 gap-x-2 gap-y-6'>
                                    {bsTabsLinks.map((item) => (
                                        <li className='h-[85px] bg-[#F6F6F6] border border-[rgba(60,96,179,0.10)] rounded-[100px] text-lg font-medium leading-none text-[#040A1F] flex items-center justify-center'>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='rounded-[40px] border border-[rgba(255,255,255,0.40)] overflow-hidden'>
                                <figure>
                                    <img src={BsCard3} alt='bs-card' />
                                </figure>
                            </div>
                            <div className='border border-[rgba(255,255,255,0.40)] overflow-hidden'>
                                <figure>
                                    <img src={BsCard4} alt='bs-card' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className="absolute top-0 left-0 right-0 w-full z-[1] rotate-180">
                        <img src={WhtiteBtm} alt="bottom gradient" className="w-full" />
                    </div>
                    <figure>
                        <img src={BrandingImg} alt='branding-img' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default EsBranding