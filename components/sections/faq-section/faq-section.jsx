"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Import Plus and Minus icons
import Image from "next/image";

const faqs = [
  {
    question: "Can I use Animify for free?",
    answer: "Yes, Animify offers a free plan with limited features.",
  },
  {
    question: "Why should I upgrade to the Starter plan?",
    answer: "Upgrading unlocks premium features and priority support.",
  },
  {
    question: "How does workspace billing work?",
    answer: "Billing is calculated based on the number of active users.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime from the account settings page.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee on all plans.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[748px] mx-auto mt-10 lg:mt-[180px] relative">
      {/* bg gradient image  */}
      <Image
        src={"/images/faq-bg-gradient.png"}
        width={834}
        height={548}
        alt="gradinet"
        className="w-full h-full absolute"
      />
      <h2
        data-aos="fade-up"
        className="text-[36px] lg:text-[48px] font-medium tracking-[-0.014em] text-white text-center mb-5 lg:mb-10 relative z-10"
      >
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <div className="w-full flex flex-col gap-6 relative z-10 px-3 lg:px-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              position: "relative", // Needed for absolute pseudo-element
              borderRadius: "12px", // Ensures rounded corners
              //   background:
              //     "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C1018 50%, #0A1017 100%)",
            }}
            className="w-full min-h-fit lg:min-h-[72px] p-5"
          >
            {/* Gradient Border as a Pseudo Element */}
            <div
              style={{
                position: "absolute",
                inset: 0, // Covers the entire parent
                borderRadius: "12px",
                padding: "1px", // 1px border
                background:
                  "radial-gradient(100% 100% at 50% 0%, rgba(104, 114, 131, 0.4) 0%, rgba(104, 114, 131, 0.2) 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
                pointerEvents: "none", // ✅ Fix: Allows clicks to pass through
              }}
            ></div>
            <button
              onClick={() => toggleFAQ(index)}
              className="min-w-full flex justify-between items-center text-white text-base lg:text-xl font-medium tracking-[-0.1px] text-start"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="py-3 text-gray-300 text-sm">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
