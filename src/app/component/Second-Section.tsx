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
    {
      image: "/Free_FirstConsultation.png",
      title: "Free First Consultation",
      desc: "Start with expert guidance without worrying about consultation cost.",
    },
    {
      image: "/Personalized_TreatmentPlan.png",
      title: "Personalized Treatment Plan",
      desc: "Every care plan is designed around your reports, stage and comfort.",
    },
    {
      image: "/Advanced_CancerCare.png",
      title: "Advanced Cancer Care",
      desc: "Modern diagnosis, treatment planning and specialist-led clinical support.",
    },
    {
      image: "/Multidisciplinary_ExpertTeam.png",
      title: "Expert Team Approach",
      desc: "Medical, surgical and radiation experts work together on your case.",
    },
    {
      image: "/Affordable_Treatment.png",
      title: "Affordable Treatment",
      desc: "Transparent care options built to reduce stress for patients and families.",
    },
    {
      image: "/Insurance_Assistance.png",
      title: "Insurance Assistance",
      desc: "Our team helps with cashless approvals and treatment paperwork.",
    },
    {
      image: "/Patient_Coordinator.png",
      title: "Patient Coordinator",
      desc: "A dedicated coordinator keeps appointments, reports and follow-ups simple.",
    },
    {
      image: "/Second_OpinionAvailable.png",
      title: "Second Opinion Available",
      desc: "Get clarity on diagnosis and treatment options from experienced oncologists.",
    },
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
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[#f8fbff] border border-slate-100 shadow-sm">
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

      <section className="py-12 md:py-16 soft-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Why Choose Us?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm font-medium text-slate-500">
              Complete cancer-care support from first consultation to recovery follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="group rounded-xl border border-slate-100 bg-white p-4 shadow-[0_14px_38px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.11)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="64px"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-extrabold leading-tight text-[#1a2547]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondSection;
