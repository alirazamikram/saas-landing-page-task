import Image from "next/image";

const GetStartedSection = () => {
  return (
    <div className="w-full mt-20 lg:mt-[130px] pb-[39px] lg:pb-[59px] font-satoshi relative">
      {/* bg gradient image  */}
      <Image
        src={"/images/get-started-bg-gradient.png"}
        width={1403}
        height={472}
        alt="gradient"
        className="absolute bottom-[-100px] hidden lg:block"
      />
      <div className="max-w-[440px] mx-auto flex flex-col items-center relative z-10">
        <h2
          data-aos="fade-up"
          className="text-[32px] lg:text-[48px] font-medium text-white tracking-[-0.014em] mb-2 lg:mb-4"
        >
          Get Started
        </h2>
        <p
          data-aos="fade-up"
          className="text-[#BEBEBE] text-base lg:text-lg font-medium leading-6 tracking-[-0.014em] text-center mb-2 lg:mb-4 px-3 lg:px-0"
        >
          {`Holds no opinions on what's and how’s. Build whatever makes sense to you.`}
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
      </div>
    </div>
  );
};

export default GetStartedSection;
