import React, { useState } from "react";
import FaqImg from "../assets/images/service-bg.png";
import DevTop from "../assets/images/dev-top.png";
import ChevronDown from "../assets/icons/chevron-down";
import { Link } from "react-router-dom";

const Faqs = ({ hideGradient = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="pt-32 pb-[125px] relative bg-no-repeat bg-cover max-xl:text-[92px] max-xl:pt-28 max-lg:pb-[100px] max-md:pt-20 max-md:pb-20"
      style={{
        background: `url(${FaqImg}) no-repeat center`,
        backgroundPositionX: "center",
        backgroundPositionY: "170%",
        backgroundSize: "90% 80%",
      }}
    >
      {/* Conditionally render the gradient */}
      {!hideGradient && (
        <div className="absolute top-[-2px] left-0 right-0 w-full">
          <img src={DevTop} alt="dev top gradient" loading="lazy" className="w-full" />
        </div>
      )}

      <div className="container max-w-[886px] mx-auto relative z-[2]">
        <div className="text-center">
          <h2 className="text-[120px] text-white font-bold leading-none tracking-[-4.8px] mb-5 max-xl:text-[92px] max-lg:text-7xl max-lg:tracking-[-2px] max-md:text-4xl max-md:tracking-[-1.44px] max-md:mb-[10px]">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl leading-9 text-center font-normal text-textLight max-w-[680px] w-full mx-auto mb-10 max-lg:text-xl max-md:text-base max-md:mb-9">
            We’ve gathered all the important info right here. Explore our FAQs
            and find the answers you need.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-[10px]">
          {faqData.map((item, index) => (
            <FaqCard
              key={index}
              isOpen={activeIndex === index}
              onClick={() => toggleFAQ(index)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-16 max-md:mt-8 max-md:hidden">
          <Link
            to="/extra-services"
            className="btn blue text-center py-5 px-10 text-lg leading-none block text-white font-medium rounded-[10px] border border-[#3D7FDE] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] max-md:text-base hover:text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
            }}
          >
            <span className="relative z-[2]">Extra services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FaqCard = ({ isOpen, onClick, question, answer }) => {
  return (
    <div
      className={`rounded-[30px] transition-all ease-in-out duration-500 ${isOpen ? "bg-[#060E27]" : "bg-transparent"
        }`}
      style={{
        boxShadow:
          "0px 1.652px 3.304px 0px rgba(0, 0, 0, 0.05), 0px 2.478px 20.652px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 12.391px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 165.217px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <div
        className={`flex justify-between items-center p-7 rounded-[30px] cursor-pointer transition-all ease-in-out duration-500 max-md:p-[14px] max-md:rounded-[20px] ${isOpen ? "text-[#010511] bg-white" : "text-white bg-transparent"
          }`}
        onClick={onClick}
      >
        <span className="text-xl font-medium flex-grow max-md:text-base">
          {question}
        </span>
        <ChevronDown isOpen={isOpen} />
      </div>

      <div
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-10%)",
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? "400px" : "0",
        }}
        className={`overflow-hidden transition-all ease-in-out duration-500`}
      >
        <p className="p-5 m-0 text-lg leading-8 text-[#ffffffcc] max-md:text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: "Is it possible to use any e-commerce platform?",
    answer:
      "Certainly! You have the flexibility to integrate with any provider, or you can opt for our in-house checkout and backend solutions for easier management.",
  },
  {
    question: "Do you offer a risk management system?",
    answer:
      "Yes, absolutely. Risk management is crucial in any business. That's why we offer our in-house solutions for all risk management needs, which you can manage directly on the manager dashboard we provide for you.",
  },
  {
    question: "What payout methods do you offer?",
    answer:
      "We provide you with a variety of top-tier payout options, seamlessly integrated into your dashboard. Additionally, we offer expert advice on selecting the best options for your needs.",
  },
  {
    question: "What KYC solutions are available?",
    answer:
      "We integrate with over 15 KYC providers, offering you a selection of the best options tailored to your needs and those of your clients.",
  },
  {
    question: "Can I customize my client dashboard?",
    answer:
      "Absolutely! We offer full customization with our team of over 25 full-time in-house developers. Whatever your idea is, we can bring it to life.",
  },
];

export default Faqs;
