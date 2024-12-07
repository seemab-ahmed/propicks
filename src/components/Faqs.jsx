import React, { useState } from "react";
import FaqImg from "../assets/images/faq-bg.png";
import ChevronDown from "../assets/icons/chevron-down";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the open FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active FAQ
  };

  return (
    <section
    className="pt-[580px] bg-no-repeat bg-cover mb-[-200px] pb-[340px] max-xl:text-[92px] max-xl:pt-[420px] max-lg:pt-[340px] max-lg:pb-[180px] max-lg:mb-[-100px] max-md:pt-80 max-md:pb-40"
      style={{
        background: `url(${FaqImg}) no-repeat center/cover `,
        backgroundPositionX:"center",
        backgroundPositionY:"0%",
        
      }}
    >
      <div className="container max-w-[886px] mx-auto">
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
                  to="/"
                  className="btn blue text-center py-5 px-10 text-lg leading-none block text-white font-medium rounded-[10px] border border-[#3D7FDE]  shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.10)]  max-md:text-base hover:text-white"
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
      className={`rounded-[30px] transition-all ease-in-out duration-500 ${isOpen ? "bg-[#060E27]" : "bg-transparent"}`}
      style={{
        boxShadow:
          "0px 1.652px 3.304px 0px rgba(0, 0, 0, 0.05), 0px 2.478px 20.652px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 12.391px 0px rgba(0, 0, 0, 0.10), 0px 2.478px 165.217px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      {/* Header with Chevron Icon */}

      <div
        className={`flex justify-between items-center p-7 rounded-[30px] cursor-pointer transition-all ease-in-out duration-500 max-md:p-[14px] max-md:rounded-[20px] ${
          isOpen ? "text-[#010511] bg-white" : "text-white bg-transparent"
        }`}
        onClick={onClick}
      >
        <span className="text-xl font-medium flex-grow max-md:text-base">{question}</span>
        <ChevronDown isOpen={isOpen} />
      </div>

      {/* Collapsible Content */}
      <div
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-10%)",
          opacity: isOpen ? 1 : 0,
          maxHeight: isOpen ? "400px" : "0",
        }}
        className={` overflow-hidden transition-all ease-in-out duration-500`}
      >
        <p className="p-5 m-0 text-lg leading-8 text-[#ffffffcc] max-md:text-sm">{answer}</p>
      </div>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: "Is it possible to use any e-commerce platform?",
    answer:
      "AI-driven analysis uses advanced algorithms to process your data in real-time, identifying trends, patterns, and opportunities. This helps you make informed decisions quickly, optimize your strategies, and stay ahead of the competition.",
  },
  {
    question: "Do you offer a risk management system?",
    answer:
      "Yes, we provide a comprehensive risk management system to secure your operations.",
  },
    {
      question: "What payout methods do you offer?",
      answer:
        "We support multiple payout methods including bank transfers, PayPal, and others.",
    },
    {
      question: "What KYC solutions are available?",
      answer:
        "Our platform supports advanced KYC verification to ensure compliance and security.",
    },
    {
      question: "Can I customize my client dashboard?",
      answer:
        "Yes, our platform allows extensive customization options for client dashboards.",
    },
];

export default Faqs;
