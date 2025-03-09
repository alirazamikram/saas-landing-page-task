import Image from "next/image";
import React from "react";

const FeaturesAndBenefitsSection = () => {
  return (
    <div className="w-full flex flex-col items-center text-center font-satoshi">
      {/* Badge */}
      <button
        type="button"
        className="w-[83px] h-[35px] mb-4 text-sm font-medium leading-[18px] text-white rounded-full border-[0.8px] flex justify-center items-center shadow-[0px_16px_32px_0px_rgba(0,0,0,0.2)]"
        style={{
          borderImageSource:
            "linear-gradient(180deg, rgba(107, 73, 255, 0.2) 44.93%, #6B49FF 100%)",
          boxShadow:
            "inset 0px -4px 12px 0px rgba(107, 73, 255, 0.6), 0px 16px 32px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        Amazing
      </button>

      {/* Title */}
      <h2
        data-aos="fade-up"
        className="text-[32px] lg:text-[48px] font-medium lg:leading-[53px] tracking-[-0.014em] text-white px-5 lg:px-0"
      >
        Features and{" "}
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          benefits
        </span>
      </h2>

      {/* Subtitle */}
      <p
        data-aos="fade-up"
        className="mt-2 lg:mt-4 text-base lg:text-lg font-medium leading-6 text-[#BEBEBE] tracking-[-0.014em] max-w-[600px] text-center px-5 lg:px-0"
      >
        Create, customize, and collaborate effortlessly with our intuitive
        platform. From simple edits to complex designs, bring your vision to
        life in no time.
      </p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      title: "Easy-to-Use Interface",
      description:
        "Users can quickly start using the platform without needing a steep learning curve.",
      image: "/images/feature1.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "Collaboration Tools",
      description:
        "If your product enables collaboration, emphasize the ability for teams to work together in real-time.",
      image: "/images/feature2.png",
      link: "#",
    },
    {
      title: "Secure Cloud Storage",
      description:
        "With cloud storage, users' projects are automatically saved, ensuring their data is never lost.",
      image: "/images/feature3.png",
      link: "#",
    },
    {
      title: "Wide Integration Support",
      description:
        "The ability to integrate with third-party apps (e.g., Google Drive, Dropbox, Slack) is essential.",
      image: "/images/feature4.png",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20 lg:mt-[138px] font-satoshi">
      <FeaturesAndBenefitsSection />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-5 lg:px-[170px] mt-12">
        {features.map((feature, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="max-w-[600px] max-h-[400px] relative transition hover:scale-[1.02]"
          >
            <Image
              width={600}
              height={400}
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />

            {/* Feature Content */}
            <div
              className={`px-2 lg:px-0 ${
                index === 0
                  ? "max-w-[298px]"
                  : index === 1
                  ? "max-w-[355px]"
                  : index === 2
                  ? "max-w-[312px]"
                  : "max-w-[380px]"
              }  text-white absolute ${
                index === 0 || index === 1
                  ? "top-3 lg:top-5 left-3 lg:left-5"
                  : "bottom-3 lg:bottom-5 left-3 lg:left-5 "
              } `}
            >
              <h3 className="text-base lg:text-lg font-bold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[#BEBEBE] mt-2 text-sm font-normal tracking-[-0.01em]">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="mt-2 lg:mt-4 inline-block text-[#5EBCFF] text-sm font-bold font-manrope hover:underline"
              >
                Try it now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
