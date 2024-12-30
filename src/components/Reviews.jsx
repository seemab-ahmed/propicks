import React, { useEffect, useRef } from "react";
// import ProfileImg from "../assets/images/profile.png";
// import GermanyImg from "../assets/images/germany.svg";
import StarImg from "../assets/images/star.svg";

const Reviews = () => {
    const reviewsList = [
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
        {
            title: "Prop Owner",
            hobby: "Forex",
            para: "Working with PropPicks has been a game-changer for my prop firm. Their custom-built solutions and seamless integrations have streamlined our operations, and their team is always ready to provide exceptional support. I couldn’t be happier with the partnership!",
            star: StarImg,
        },
    ];

    // // Divide reviews into three columns
    // const columnOne = reviewsList.filter((_, index) => index % 3 === 0);
    // const columnTwo = reviewsList.filter((_, index) => index % 3 === 1);
    // const columnThree = reviewsList.filter((_, index) => index % 3 === 2);

    return (
        <section className="py-10 xl:py-20 max-md:pt-16">
            <div className="container">
                <div
                    className="mb-10 xl:mb-[60px] w-full mx-auto text-center"
                >
                    <h2 className="text-[120px] font-bold leading-none text-[#0F172A] mb-5 max-xl:text-[92px] max-lg:text-7xl max-md:text-4xl max-md:mb-[10px]">Clients Big Results.</h2>
                    <p className="text-2xl leading-8 font-normal text-[#3E5462] max-w-[854px] mx-auto w-full max-lg:text-xl max-md:text-base">Our technology is consistently lauded by users for its exceptional quality, intuitive design, and unparalleled customer support.</p>
                </div>
                <div className="relative">
                    <div className="bg-white-gradient h-[321px] w-full absolute left-0 top-0 z-[1] rotate-180"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 overflow-hidden">
                        <ScrollingColumn reviewsList={reviewsList} speed={1} />
                        <ScrollingColumn reviewsList={reviewsList} speed={1.8} className="hidden md:block" />
                        <ScrollingColumn reviewsList={reviewsList} speed={1.4} className="hidden md:block" />
                    </div>
                    <div className="bg-white-gradient h-[321px] w-full absolute left-0 bottom-0 z-[1]"></div>
                </div>
            </div>
        </section>
    );
};

const ScrollingColumn = ({ reviewsList, speed , className }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let animationFrame;

        const scrollContent = () => {
            if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
                scrollContainer.scrollTop = 0; // Reset scroll to create loop
            }
            scrollContainer.scrollTop += speed; // Scroll incrementally based on speed
            animationFrame = requestAnimationFrame(scrollContent);
        };

        animationFrame = requestAnimationFrame(scrollContent);

        return () => cancelAnimationFrame(animationFrame);
    }, [speed]);

    return (
        <div ref={scrollRef} className={`overflow-hidden h-[800px] ${className}`}>
            <div className="flex flex-col">
                {reviewsList.concat(reviewsList).map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ review }) => (
    <div className="border border-[rgba(255,255,255,0.10)] bg-custom-gradient-two p-5 xl:p-8 rounded-[40px] bg-[#F6F6F6] relative mb-5">
        <div className="flex items-center gap-2 mb-8">
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <img key={i} src={review.star} alt="star" className="w-6 h-6" />
                ))}
        </div>
        <p className="text-sm xl:text-base font-normal leading-8 text-[#3E5462] mb-5 xl:mb-8">
            {review.para}
        </p>
        <span className="text-sm font-medium leading-tight text-[#0F172A]">
            {review.title} <br />
            {review.hobby}
        </span>
    </div>
);

export default Reviews;