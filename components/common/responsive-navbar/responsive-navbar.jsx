import Link from "next/link";
import React from "react";

const ResponsiveNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute top-[83px] right-0 w-full h-[calc(100vh-117px)] bg-black p-6 flex flex-col items-center space-y-4 rounded-xl lg:hidden`}
    >
      <Link
        href="/"
        className="text-white text-lg"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/"
        className="text-white text-lg"
        onClick={() => setIsOpen(false)}
      >
        Template
      </Link>
      <Link
        href="/"
        className="text-white text-lg"
        onClick={() => setIsOpen(false)}
      >
        Pricing
      </Link>
      <Link
        href="/"
        className="text-white text-lg"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>

      {/* Mobile CTA Button */}
      <button
        type="button"
        style={{ boxShadow: "0px 0px 8px 0px #0099FF inset" }}
        className="w-[88px] h-[35px] rounded-[10px] border-[0.6px] border-[#E0F2FF66] border-opacity-40 text-sm font-semibold font-manrope leading-[19px] text-white"
        onClick={() => setIsOpen(false)}
      >
        Try it now
      </button>
    </div>
  );
};

export default ResponsiveNavbar;
