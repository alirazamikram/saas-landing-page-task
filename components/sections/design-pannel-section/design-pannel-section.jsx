import Image from "next/image";
import React from "react";

const DesignPannelSection = () => {
  return (
    <div className="w-full px-5 lg:px-[123px] relative">
      <Image
        src={"/images/gradient.png"}
        width={663}
        height={413}
        alt="gradient"
        className="absolute top-[-50px] lg:top-[-110px] left-[22%] w-[50%] lg:w-[663px]"
      />
      <div className="w-full relative z-10">
        <Image
          src={"/images/design_pannel_img.svg"}
          width={1193}
          height={610}
          alt="desgin_img"
        />
      </div>
      <Image
        src={"/images/gradient.png"}
        width={663}
        height={413}
        alt="gradient"
        className="absolute bottom-[-50px] lg:bottom-[-120px] left-[22%] w-[50%] lg:w-[663px]"
      />
    </div>
  );
};

export default DesignPannelSection;
