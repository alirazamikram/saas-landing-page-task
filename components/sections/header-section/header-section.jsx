"use client";

const HeaderSection = () => {
  return (
    <header className="max-w-[872px] mx-auto pt-10 lg:pt-[90px] pb-10 lg:pb-[51px] text-white text-center font-satoshi flex flex-col items-center relative z-10">
      {/* Main Heading */}
      <h1
        data-aos="fade-up"
        className="text-[32px] lg:text-[64px] font-medium lg:leading-[71px] tracking-[-0.032em]"
      >
        Transform Concepts into, <br />
        <span className="bg-text-gradient bg-clip-text text-transparent">
          Dynamic
        </span>{" "}
        Animations
      </h1>

      {/* Subheading */}
      <p
        data-aos="fade-up"
        className="max-w-[574px] mt-[28px] text-lg font-medium leading-6 text-[#BEBEBE] tracking-[-0.014em] text-center"
      >
        Unleash your creativity with our intuitive animation tool. Create
        stunning videos and bring your vision to life in just a few clicks!
      </p>

      {/* CTA Buttons */}
      <div className="mt-[28px] flex flex-row justify-center gap-3">
        <button
          type="button"
          style={{ boxShadow: " 0px 0px 8px 0px #0099FF inset" }}
          className="w-[113px] h-[46px] rounded-[12px] border-[0.6px] border-[#E0F2FF66] border-opacity-40 text-sm font-semibold font-manrope leading-[19px] text-white"
        >
          Try it now
        </button>
        <button className="w-[162px] h-[46px] gradient-border rounded-[12px] text-white text-base font-semibold leading-[21px] font-manrope">
          Book your demo
        </button>
      </div>
    </header>
  );
};

export default HeaderSection;
