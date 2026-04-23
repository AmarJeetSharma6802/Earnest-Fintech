"use client";

import React, { useState } from "react";
import { PhoneOutgoing, Mail, ChevronDown } from "lucide-react";

function FivthSection() {

  const faq = [
    {
      qus: "Who needs transition care?",
      ans: "Patients discharged from hospital but still needing medical supervision, rehabilitation support, and continuous monitoring during recovery.",
    },
    {
      qus: "How long can a patient stay?",
      ans: "Patients can stay from a few days to several weeks depending on medical condition, recovery progress, and doctor recommendations.",
    },
    {
      qus: "Why not recover at home?",
      ans: "Home recovery lacks professional monitoring, emergency response, and structured rehabilitation essential for safe and faster healing.",
    },
    {
      qus: "Can family visit?",
      ans: "Yes, family visits are allowed under guidelines ensuring patient safety, hygiene, and minimal disturbance during recovery.",
    },
  ];
  const [active, setActive] = useState<string>(faq[0].qus);


  const handleClick = (qus: string) => {
    setActive(qus === active ? "" : qus);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-10 max-w-7xl mx-auto gap-6">

      {/* LEFT */}
      <div className="w-full md:w-[45%]">
        <h1 className="text-[#22497D] text-2xl md:text-3xl font-bold">
          FAQ Frequently Asked Questions
        </h1>

        <p className="py-6 text-gray-500">
          We provide expert transition care with medical supervision,
          rehabilitation, and support for safe recovery after hospital discharge.
        </p>

        {/* CONTACT BOX */}
        <div className="w-full">
          <h1 className="bg-[#31B8AC] p-2 text-xl text-center rounded-t-xl text-white">
            Let's Talk With Us
          </h1>

          <div className="flex">
            <div className="w-1/2 h-[120px] bg-[#22497D] border-r border-gray-500 p-6">
              <span className="flex gap-2 items-center text-white">
                <PhoneOutgoing size={18} /> Call Us:
              </span>
              <p className="text-white mt-2 text-sm">
                +91 88822233665
              </p>
            </div>

            <div className="w-1/2 h-[120px] bg-[#22497D] p-6">
              <span className="flex gap-2 items-center text-white">
                <Mail size={18} /> Email Us:
              </span>
              <p className="text-white mt-2 text-sm">
                info@transitioncarecenter.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[55%]">

        {faq.map((item, i) => {
          const isActive = active === item.qus;

          return (
            <div key={i} className="mb-3 border rounded-lg overflow-hidden">

              <div
                onClick={() => handleClick(item.qus)}
                className={`flex justify-between items-center cursor-pointer p-4 transition-all duration-300 ${
                  isActive
                    ? "bg-[#31B8AC] text-white"
                    : "bg-white"
                }`}
              >
                <p className="font-medium">{item.qus}</p>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 bg-[#22497D] text-white text-sm">
                  {item.ans}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default FivthSection;