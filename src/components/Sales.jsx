import React from 'react'
import SalesImg from "../assets/images/sales-img.png"
import BannerBtm from "../assets/images/dev-banner-btm.png";
import SalesBg from "../assets/images/sales-bg.png";
import SalesIcon from "../assets/images/sale-icon.png";
import DevelopBtm from "../assets/images/develop-btm.png"

const Sales = () => {
    return (
        <section className='pt-[77px] md:pt-[150px] lg:pt-[250px] xl:pt-[386px] pb-[219px] md:pb-[300px] lg:pb-[500px] xl:pb-[690px] bg-no-repeat bg-cover relative' style={{ backgroundImage: `url(${SalesImg})` }}>
            <div className="absolute top-0 left-0 right-0 w-full rotate-180">
                <img src={BannerBtm} alt="dev top gradient" className="w-full" />
            </div>
            <div className='w-[90%] md:w-[85%] mx-auto'>
                <div
                    className="w-[309px] p-10 text-center bg-contain rounded-[40px] max-lg:py-5 max-md:p-10 max-md:w-[200px] max-md:rounded-3xl max-md:border-[rgba(255,255,255,0.1)] max-md:border-t max-md:border-r border-solid overflow-hidden"
                    style={{
                        background: `url(${SalesBg}) no-repeat center center`,
                    }}
                >
                    <div className="flex justify-center mx-auto mb-7 max-lg:mb-5 max-lg:w-14 max-md:w-[46px] max-md:mb-2">
                        <img src={SalesIcon} alt="sale Arrows" />
                    </div>
                    <div>
                        <h4 className="text-xl leading-normal text-white font-medium max-md:text-sm">
                            Sales This Month
                        </h4>
                        <span className="text-base leading-normal text-[#C5CEE6] block lg:mb-6 max-lg:mb-4 max-md:text-xs max-md:mb-5">
                            Your firms sales
                        </span>
                        <span className="text-[32px] text-white leading-normal font-bold max-md:text-xl">
                            +$1.2M
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full">
                <img src={DevelopBtm} alt="dev bottom gradient" className="w-full" />
            </div>
        </section>
    )
}

export default Sales