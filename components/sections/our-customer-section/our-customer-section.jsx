"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "John M.",
    role: "Operations Lead",
    image: "/images/john.png",
    review:
      "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate. Highly recommended!",
  },
  {
    name: "Mike T.",
    role: "Product Designer",
    image: "/images/mike.png",
    review:
      "I've tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.",
  },
  {
    name: "Kevin B.",
    role: "Freelancer",
    image: "/images/david.png",
    review:
      "I can't imagine going back to the old way of doing things. This product has made everything smoother and more efficient. Game changer!",
  },
  {
    name: "Robert S.",
    role: "Project Manager",
    image: "/images/david.png",
    review:
      "Incredible tool! I was able to automate so many tasks that used to take hours. It's a real time-saver!",
  },
];

const OurCustomerSection = () => {
  return (
    <div className="relative w-full mt-10 lg:mt-[116px] overflow-hidden font-satoshi">
      <div className="w-full flex justify-center items-center relative">
        <Image
          src={"/images/heart-img.png"}
          width={533}
          height={525}
          alt="img"
        />
        <Image
          src={"/images/heart-gradinet.png"}
          width={371}
          height={84}
          alt="img"
          className="absolute top-[70px] lg:top-[100px]"
        />
        <div className="absolute top-[130px] lg:top-[140px]">
          <h2
            data-aos="fade-up"
            className="text-center text-[32px] lg:text-[48px] font-medium lg:leading-[111px] tracking-[-0.014em] text-white"
          >
            Our Customers
          </h2>
          <p
            data-aos="fade-up"
            className="text-center text-[#BEBEBE] text-lg font-medium leading-6 tracking-[-0.014em] mt-2 lg:mt-4"
          >
            What people say about us
          </p>
        </div>
      </div>

      <div className="mt-[-40%] md:mt-[-30%] lg:mt-[-16%] relative">
        {/* Fade Effect - Left */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* Top Row - Right to Left */}
        <div className="relative overflow-hidden mt-10 group">
          <div className="flex w-max animate-slide-left group-hover:paused">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Fade Effect - Right */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Bottom Row - Left to Right */}
        <div className="relative overflow-hidden mt-6 group">
          <div className="flex w-max animate-slide-right group-hover:paused">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="min-w-[380px] lg:min-w-[480px] max-w-[380px] lg:max-w-[480px] h-[183px] p-[2px] rounded-[14px] mx-2 lg:mx-4 bg-gradient-to-b from-[#3F325F] to-transparent font-satoshi">
    <div className="h-full w-full bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828] rounded-[12px] p-6 text-white">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      {/* Review */}
      <p className="mt-2 lg:mt-4 text-gray-300 text-sm">{testimonial.review}</p>
    </div>
  </div>
);

export default OurCustomerSection;
