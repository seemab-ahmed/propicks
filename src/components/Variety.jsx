import React from 'react'
import VarietyBg from "../assets/images/variety-bg.png"
import VarietyBtm from "../assets/images/banner-btm.svg";
import BoxingBtn from "../assets/images/boxing-btn.svg"
import SoccerBtn from "../assets/images/soccer-btn.svg"
import FootballBtn from "../assets/images/football-btn.svg"
import BaseballBtn from "../assets/images/baseball-btn.svg"
import UfcBtn from "../assets/images/ufc-btn.svg"
import { Link } from 'react-router-dom'

const Variety = () => {
    return (
        <section className='pt-[142px] bg-no-repeat bg-cover relative' style={{ backgroundImage: `url(${VarietyBg})` }}>
            <div className="absolute top-0 left-0 right-0 w-full z-[1] rotate-180">
                <img src={VarietyBtm} alt="dev bottom gradient" className="w-full" />
            </div>
            <div className='max-w-[1520px] w-[90%] mx-auto'>
                <h2 className='text-[36px] md:text-[80px] lg:text-[120px] font-bold leading-none text-white -tracking-[1.44px] xl:-tracking-[4.8px] mb-[84px]'>Choose from a variety sports</h2>
                <ul className='grid grid-cols-5 gap-10 mb-[142px]'>
                    <li>
                        <Link to="">
                            <img src={BoxingBtn} alt='btn' />
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img src={SoccerBtn} alt='btn' />
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img src={FootballBtn} alt='btn' />
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img src={BaseballBtn} alt='btn' />
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img src={UfcBtn} alt='btn' />
                        </Link>
                    </li>
                </ul>
                <h2 className='text-[28px] md:text-[32px] lg:text-[45px] xl:text-[90px] leading-normal font-bold max-w-[1280px] w-full mx-auto text-center'><span className='bg-heading-gradient'>Here’s why you’ll love betting with our app</span></h2>
            </div>
        </section>
    )
}

export default Variety