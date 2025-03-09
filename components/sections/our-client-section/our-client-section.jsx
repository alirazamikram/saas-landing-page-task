import Image from "next/image";
import React from "react";

const logoData = [
  { src: "/images/logo1.png", width: 176, height: 40, alt: "Client Logo 1" },
  { src: "/images/logo2.png", width: 40, height: 40, alt: "Client Logo 2" },
  { src: "/images/logo3.png", width: 202, height: 40, alt: "Client Logo 3" },
  { src: "/images/logo4.png", width: 40, height: 40, alt: "Client Logo 4" },
  { src: "/images/logo5.png", width: 104, height: 40, alt: "Client Logo 5" },
];

const OurClientSection = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto mt-10 lg:mt-[140px] flex flex-col items-center gap-[28px] relative">
      {/* Title */}
      <h3 className="text-[20px] font-medium leading-6 text-[#BEBEBE] tracking-[-0.25px]">
        Our Clients
      </h3>

      {/* Logo Slider with Fade Effect */}
      <div className="relative w-full overflow-hidden">
        {/* Fade Effect on Sides */}
        <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden group">
          {/* Scrolling Logos */}
          <div className="flex w-max items-center gap-[100px] animate-scroll-logo group-hover:paused">
            {logoData.concat(logoData).map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSection;
