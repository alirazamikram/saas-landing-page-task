import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Intuitive User Experience",
    description:
      "Start quickly with a user-friendly interface designed for maximum efficiency.",
    width: 18,
    height: 26,
  },
  {
    title: "Boost Productivity",
    description: "Use pre-default transitions to save time and productivity.",
    width: 19,
    height: 26,
  },
  {
    title: "Customizable Templates",
    description: "Get ready-made customizable templates for your projects.",
    width: 22,
    height: 24,
  },
  {
    title: "24/7 Support",
    description:
      "Get instant assistance anytime with our intelligent, always-available assistant.",
    width: 26,
    height: 26,
  },
  {
    title: "Data Security & Compliance",
    description: "Safeguard your operations with industry-leading standards.",
    width: 20,
    height: 25,
  },
  {
    title: "High-Quality Export",
    description:
      "High-quality export options allow users to download their content in various formats.",
    width: 25,
    height: 24,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 lg:mt-[180px] px-5 lg:px-[140px]">
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-[36px] lg:text-[48px] font-medium lg:leading-[53px] tracking-[-0.014em] text-white text-center relative z-10"
      >
        Why choose{" "}
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          us
        </span>
      </h2>
      <p
        data-aos="fade-up"
        className="text-lg text-[#BEBEBE] text-center font-medium lg:leading-6 max-w-[550px] mt-2 lg:mt-4 relative z-10"
      >
        Unlock the full potential of your business with exceptional features and
        unmatched performance.
      </p>

      {/* Features Grid */}
      <div className="relative">
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[28px] gap-y-10 mt-10 p-5 lg:p-10 rounded-[14px] border border-white/10 shadow-lg relative z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(13, 11, 20, 0.9) 0%, rgba(11, 16, 20, 0.9) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)", // For Safari support
          }}
        >
          {features.map((feature, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col items-center justify-center relative w-fit lg:w-[341px] min-h-[160px] p-5 rounded-md text-center transition hover:scale-[1.02] cursor-pointer"
            >
              {/* Icon with Glow Effect */}
              <Image
                src={`/icons/icon-${index + 1}.svg`}
                width={feature.width}
                height={feature.height}
                alt="icon"
                className="w-fit h-fit"
              />

              {/* Feature Content */}
              <h3 className="text-[20px] font-bold leading-[28px] tracking-[-0.0041em] text-white">
                {feature.title}
              </h3>
              <p className="max-w-[259px] text-[#BEBEBE] text-xs font-normal leading-4 tracking-[-0.0041em] mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <Image
          src={"/images/gradient.png"}
          width={663}
          height={417}
          alt="gradient"
          className="absolute top-[-100px] right-[22%] hidden lg:block"
        />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
