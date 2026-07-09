"use client"
import React from "react";
import Image from "next/image";
import { useModal } from "../ModalProvider";

function SecondSection() {
  const { openModal } = useModal();

  const cancerTypes = [
    { image: "/breastcancer.png", label: "Breast Cancer" },
    { image: "/lung.png", label: "Lung Cancer" },
    { image: "/bloodCancer.png", label: "Blood Cancer" },
    { image: "/oralCancer.png", label: "Oral Cancer" },
    { image: "/liverCancer.png", label: "Liver Cancer" },
    { image: "/colonCancer.png", label: "Colon Cancer" },
    { image: "/CervicalCancer.png", label: "Cervical Cancer" },
    { image: "/ProstateCancer.png", label: "Prostate Cancer" },
  ];

  const whyChoose = [
    { image: "/Free_FirstConsultation.png", title: "Free First Consultation" },
    { image: "/Personalized_TreatmentPlan.png", title: "Personalized Treatment Plan" },
    { image: "/Advanced_CancerCare.png", title: "Advanced Cancer Care & Technology" },
    { image: "/Multidisciplinary_ExpertTeam.png", title: "Multidisciplinary Expert Team" },
    { image: "/Affordable_Treatment.png", title: "Affordable Treatment" },
    { image: "/Insurance_Assistance.png", title: "Insurance Assistance" },
    { image: "/Patient_Coordinator.png", title: "Patient Coordinator" },
    { image: "/Second_OpinionAvailable.png", title: "Second Opinion Available" },
  ];

  return (
    <>
      <section id="cancer-types" className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Cancer Types We Treat
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Comprehensive care for all major types of cancer
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-6xl mx-auto">
            {cancerTypes.map((item, i) => (
              <div
                key={i}
                className="card-shell hover-lift flex min-h-[138px] flex-col items-center justify-center gap-3 rounded-xl p-3 text-center"
              >
                <div className="relative h-18 w-18 overflow-hidden rounded-full bg-[#f8fbff] border border-slate-100 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="64px"
                    className="object-contain p-1.5"
                  />
                </div>
                <p className="text-[12px] font-extrabold text-[#1a2547] leading-tight">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-7">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-[#1a2547] text-white px-8 py-2.5 rounded-md font-bold text-sm hover:bg-[#243156] shadow-[0_10px_24px_rgba(26,37,71,0.18)] transition-all"
            >
              Talk to Our Specialist
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 soft-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-9">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white border border-emerald-100 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="76px"
                    className="object-contain p-1.5"
                  />
                </div>
                <p className="text-[11px] sm:text-xs font-extrabold text-[#1a2547] leading-tight max-w-[110px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondSection;
