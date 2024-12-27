import React from 'react'
import ExcellenceBg from "../assets/images/excellence-bg.webp"
import TextureBg from "../assets/images/texture.png"
import ExcellenceCard from "../assets/images/excellence-inner.png"

const Excellence = () => {
    return (
        <section className='px-5 pb-[140px] max-md:pb-0'>
            <div className='bg-cover bg-no-repeat rounded-[36px] lg:rounded-[80px] pt-[332px] lg:pt-[500px] xl:pt-[774px] pb-2 lg:pb-[170px]' style={{ backgroundImage: `url(${ExcellenceBg})` }}>
                <div className='container'>
                    <div className='bg-[#030818] bg-cover bg-no-repeat max-w-[206px] md:max-w-[614px] 
                    rounded-[20px] shadow-light-black pt-5 md:pt-20 px-5 md:px-16 pb-2.5 md:pb-6 ml-auto' style={{ backgroundImage: `url(${TextureBg})` }}>
                        <h4 className="text-6xl text-center font-bold leading-[120%] md:tracking-[-1.2px] text-white mb-5 max-xl:text-[36px] max-lg:text-[30px] max-md:text-[14px] max-md:mb-[10px] max-md:max-w-[150px] max-md:mx-auto">
                            Start-to-Finish Excellence
                        </h4>
                        <p className="text-[20px] text-[#C5CEE6] max-md:leading-[14px] leading-none text-center max-lg:text-[18px] max-md:text-[7.5px] max-md:mb-[7px] mb-6">
                            From vision to launch, we manage every detail to build, scale, and ensure your prop firm's success.
                        </p>
                        <img src={ExcellenceCard} alt='card' loading="lazy" className='max-md:max-w-[120px] max-w-auto max-md:mx-auto mx-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Excellence