"use client";
import Footer from "@/components/common/footer/footer";
import Navbar from "@/components/common/navbar/navbar";
import DesignPannelSection from "@/components/sections/design-pannel-section/design-pannel-section";
import FAQSection from "@/components/sections/faq-section/faq-section";
import FeaturesAndBenefitsSection from "@/components/sections/features-and-benefits-section/features-and-benefits-section";
import GetStartedSection from "@/components/sections/get-started-section/get-started-section";
import HeaderSection from "@/components/sections/header-section/header-section";
import OurClientSection from "@/components/sections/our-client-section/our-client-section";
import OurCustomerSection from "@/components/sections/our-customer-section/our-customer-section";
import PricingPlansSection from "@/components/sections/pricing-plans-section/pricing-plans-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section/why-choose-us-section";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animations trigger once (disable for continuous animations)
      easing: "ease-out", // Animation easing
    });
  }, []);

  return (
    <main className="w-full flex flex-col items-center pt-8 relative font-satoshi">
      <Image
        src={"/images/navbar-gradient.png"}
        width={909}
        height={472}
        alt="gradient"
        className="absolute top-0"
      />
      <Navbar />
      <HeaderSection />
      <DesignPannelSection />
      <OurClientSection />
      <FeaturesAndBenefitsSection />
      <WhyChooseUsSection />
      <PricingPlansSection />
      <FAQSection />
      <OurCustomerSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
