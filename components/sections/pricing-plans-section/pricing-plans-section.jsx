import Image from "next/image";
import React from "react";

const PricingPlansSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 lg:mt-[165px] font-satoshi">
      <div className="text-center mb-8 lg:mb-10 relative">
        <h2
          data-aos="fade-up"
          className="absolute top-[55px] lg:top-10 left-20 lg:left-[30px] text-[32px] lg:text-[48px] font-medium tracking-[-0.014em] text-white whitespace-nowrap"
        >
          Explore all plans
        </h2>
        <Image
          src={"/images/plans-gradient.png"}
          width={371}
          height={89}
          alt="gradient"
          className="w-fit h-fit"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div
          data-aos="fade-up"
          className="relative min-w-[360px] max-w-[360px] min-h-[435px] rounded-lg overflow-hidden"
        >
          {/* Border Gradient Layer */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
            }}
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg z-10"
          ></div>

          {/* Inner Content with Background */}
          <div
            style={{
              background:
                "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)",
            }}
            className="relative w-full h-full rounded-lg p-6"
          >
            <Image
              src={"/images/plan-card-top-gradient.png"}
              width={240}
              height={240}
              alt="gradient"
              className="absolute top-0"
            />
            <Image
              src={"/images/plan-card-bottom-gradient.png"}
              width={426}
              height={240}
              alt="gradient"
              className="absolute bottom-0"
            />
            <div className="relative z-10">
              <h3 className="text-[20px] font-medium tracking-[-0.014em] text-white">
                Starter
              </h3>
              <p className="text-[36px] font-medium mt-3 text-white">
                $0{" "}
                <span className="text-[20px] font-normal text-[#FFFFFFB2]">
                  /monthly
                </span>
              </p>
              <p
                className="text-sm font-normal text-[#FFFFFFCC] mt-2"
                style={{ letterSpacing: "-0.41%" }}
              >
                Perfect for custom animation and motion graphics.
              </p>
              <button
                type="button"
                className="w-full mt-6 bg-white text-[#010101] text-sm font-bold font-manrope py-2 rounded-lg cursor-pointer"
              >
                Sign Up with Enterprise
              </button>
              <ul className="mt-6 flex flex-col gap-5 text-[#FFFFFFCC] font-medium text-sm tracking-[-0.014em]">
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Unlimited files</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Unlimited editors</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Export video, GIF, Lottie</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>720p, 30fps</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Import from Figma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Plan */}
        <div
          data-aos="fade-up"
          className="relative min-w-[360px] max-w-[360px] min-h-[435px] rounded-lg overflow-hidden"
        >
          {/* Border Gradient Layer */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
            }}
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg z-10"
          ></div>

          {/* Inner Content with Background */}
          <div
            style={{
              background:
                "linear-gradient(180deg, #1B1430 0%, #0F0D16 50%, #1B1430 100%)",
            }}
            className="relative w-full h-full rounded-lg p-6"
          >
            <Image
              src={"/images/plan-card-top-gradient.png"}
              width={240}
              height={240}
              alt="gradient"
              className="absolute top-0"
            />
            <Image
              src={"/images/plan-card-bottom-gradient.png"}
              width={426}
              height={240}
              alt="gradient"
              className="absolute bottom-0"
            />
            <div className="relative z-10">
              {/* Popular Tag */}
              <button
                type="button"
                className="w-[70px] h-[32px] rounded-[200px] flex justify-center items-center absolute top-0 right-0 text-xs text-white 
    shadow-[0px_16px_32px_0px_#00000033] overflow-hidden"
              >
                <span className="relative z-10">Popular</span>
                <div className="absolute inset-0 bg-[radial-gradient(77.66%_77.66%_at_50%_50%,#211A42_15.9%,#261C55_50.9%,#332C4F_100%)] shadow-[inset_0px_-2px_8px_0px_#6B49FFCC] rounded-[200px]"></div>
              </button>

              <h3 className="text-[20px] font-medium tracking-[-0.014em] text-white">
                Professional
              </h3>
              <p className="text-[36px] font-medium mt-3 text-white">
                $20{" "}
                <span className="text-[20px] font-normal text-[#FFFFFFB2]">
                  /monthly
                </span>
              </p>
              <p
                className="text-sm font-normal text-[#FFFFFFCC] mt-2"
                style={{ letterSpacing: "-0.41%" }}
              >
                Perfect for custom animation and motion graphics.
              </p>
              <button
                type="button"
                className="w-full mt-6 bg-white text-[#010101] text-sm font-bold font-manrope py-2 rounded-lg cursor-pointer"
              >
                Sign Up with Professional
              </button>
              <ul className="mt-6 flex flex-col gap-5 text-[#FFFFFFCC] font-medium text-sm tracking-[-0.014em]">
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Unlimited folders</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>No watermark</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>HD export in 4K, 120fps</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Team libraries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div
          data-aos="fade-up"
          className="relative min-w-[360px] max-w-[360px] min-h-[435px] rounded-lg overflow-hidden"
        >
          {/* Border Gradient Layer */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
            }}
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg z-10"
          ></div>

          {/* Inner Content with Background */}
          <div
            style={{
              background:
                "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)",
            }}
            className="relative w-full h-full rounded-lg p-6"
          >
            <Image
              src={"/images/plan-card-top-gradient.png"}
              width={240}
              height={240}
              alt="gradient"
              className="absolute top-0"
            />
            <Image
              src={"/images/plan-card-bottom-gradient.png"}
              width={426}
              height={240}
              alt="gradient"
              className="absolute bottom-0"
            />
            <div className="relative z-10">
              <h3 className="text-[20px] font-medium tracking-[-0.014em] text-white">
                Enterprise
              </h3>
              <p className="text-[36px] font-medium mt-3 text-white">Custom</p>
              <p
                className="text-sm font-normal text-[#FFFFFFCC] mt-2"
                style={{ letterSpacing: "-0.41%" }}
              >
                Perfect for custom animation and motion graphics.
              </p>
              <button
                type="button"
                className="w-full mt-6 bg-white text-[#010101] text-sm font-bold font-manrope py-2 rounded-lg cursor-pointer"
              >
                Let’s Chat!
              </button>
              <ul className="mt-6 flex flex-col gap-5 text-[#FFFFFFCC] font-medium text-sm tracking-[-0.014em]">
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Everything in Studio</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Single sign-on (SSO)</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Pre-release features</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Personalized demo</span>
                </li>
                <li className="flex items-center gap-2 ">
                  <Image
                    src={"/icons/tick-icon.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlansSection;
