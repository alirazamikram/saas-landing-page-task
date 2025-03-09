import { Menu, X } from "lucide-react"; // Import Menu & Cross Icons
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ResponsiveNavbar from "../responsive-navbar/responsive-navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full max-w-[668px] h-[63px] flex justify-between items-center border-[0.8px] border-opacity-15 border-white rounded-[200px] px-5 lg:px-8">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          width={60}
          height={23}
          alt="logo"
          className="relative z-10"
        />
      </Link>

      {/* Desktop Navigation (Hidden on Small Screens) */}
      <ul className="hidden lg:flex gap-8 items-center text-white relative z-10">
        <li>
          <Link
            href="/"
            className="text-sm font-medium leading-[18px] text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-sm font-medium leading-[18px] text-white"
          >
            Template
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-sm font-medium leading-[18px] text-white"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-sm font-medium leading-[18px] text-white"
          >
            About
          </Link>
        </li>
      </ul>

      {/* CTA Button (Hidden on Small Screens) */}
      <button
        type="button"
        style={{ boxShadow: "0px 0px 8px 0px #0099FF inset" }}
        className="hidden lg:block w-[88px] h-[35px] rounded-[10px] border-[0.6px] border-[#E0F2FF66] border-opacity-40 text-sm font-semibold font-manrope leading-[19px] text-white relative z-10"
      >
        Try it now
      </button>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <button
        className="lg:hidden z-20 text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}{" "}
        {/* Toggle Menu / Cross Icon */}
      </button>

      {/* Mobile Menu */}
      {isOpen && <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
