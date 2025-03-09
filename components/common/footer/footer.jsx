import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full py-10 lg:py-20 px-5 relative z-10 font-satoshi border-t border-transparent"
      style={{
        borderTop: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, #192235 0%, #0059FF 40%, #6FADFF 50%, #0059FF 60%, #192235 100%)",
        borderImageSlice: 1,
      }}
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Section - Logo & Contact Info */}
        <div className="w-full max-w-[223px]">
          <div className="flex items-center gap-3">
            <Link href={"#"}>
              <Image
                src={"/icons/logo.svg"}
                width={60}
                height={23}
                alt="footer-logo"
              />
            </Link>
            <span className="text-2xl font-bold text-white tracking-[0.0041em]">
              Animify
            </span>
          </div>
          <p className="text-white text-sm font-medium mt-6">
            1234 Innovation Blvd, Suite 567 <br />
            Tech City, TC 98765, United States.
          </p>
          <p className="text-white text-sm font-medium mt-3">(555) 123-4567</p>
          <p className="text-white text-sm font-medium mt-3">
            contact@animify.com
          </p>
        </div>

        {/* Center Sections - Links */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-[120px] items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Home</h3>
            <ul className="text-white font-medium text-base flex flex-col gap-5">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  404
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Other Pages</h3>
            <ul className="text-white font-medium text-base flex flex-col gap-5">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Log In
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Forgot Password
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Terms & Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">My Work</h3>
            <ul className="text-white font-medium text-base flex flex-col gap-5">
              <li>
                <Link href={"#"} className="hover:text-gray-300">
                  Dribbble
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:text-gray-300">
                  Upwork
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Awwwards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  X
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
