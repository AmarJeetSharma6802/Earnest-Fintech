"use client";

import React, { useState } from "react";
import { ChevronDown, Upload, FileText, Phone, Heart, Shield, Clock } from "lucide-react";
import { useModal } from "../ModalProvider";

function FivthSection() {
  const { openModal } = useModal();

  const faq = [
    { qus: "Is the first consultation really free?", ans: "Yes, your first consultation with our oncologists is absolutely free." },
    { qus: "Do you provide chemotherapy?", ans: "Yes, we provide comprehensive chemotherapy services with supportive care." },
    { qus: "What reports should I bring for consultation?", ans: "Please bring biopsy reports, imaging reports, previous prescriptions and current medication details." },
    { qus: "Is insurance accepted?", ans: "Yes, we accept major insurance providers and help with cashless treatment paperwork." },
    { qus: "Can I get a second opinion?", ans: "Yes. Our oncologists can review your case and share a clear second opinion." },
    { qus: "How soon can I meet the doctor?", ans: "Urgent cases can often be scheduled same day or next day, based on doctor availability." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="card-shell rounded-xl p-5 md:p-8 grid md:grid-cols-[1fr_1.35fr_auto] items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
                  <FileText size={24} className="text-[#1B8C5C]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#1a2547]">Upload Your Reports</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Share your medical reports with our experts and get personalized guidance.
              </p>
              <p className="text-[11px] text-slate-500 mt-3">We accept PDF, JPG, PNG (Max 10MB)</p>
            </div>

            <div className="rounded-lg border border-dashed border-slate-300 bg-[#f8fbff] p-7 text-center">
              <Upload size={34} className="text-[#1a2547] mx-auto mb-3" />
              <p className="text-sm font-bold text-[#1a2547]">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-500 mt-1">Your files are safe and secure with us.</p>
            </div>

            <button className="bg-[#1a2547] text-white px-7 py-3 rounded-md text-sm font-bold hover:bg-[#243156] transition-all shadow-[0_12px_28px_rgba(26,37,71,0.2)]">
              Upload & Submit
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3 max-w-6xl mx-auto">
            {faq.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <div key={i} className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <button onClick={() => setActiveIndex(isActive ? null : i)} className="w-full flex justify-between items-center px-5 py-4 text-left">
                    <span className="text-sm font-bold text-[#1a2547] pr-4">{item.qus}</span>
                    <ChevronDown size={17} className={`shrink-0 text-[#1a2547] transition-transform ${isActive ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{item.ans}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-7">
            <button className="bg-[#1a2547] text-white px-8 py-2.5 rounded-md font-bold text-sm hover:bg-[#243156] shadow-md transition-all">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1a2547] via-[#243156] to-[#142044] p-6 md:p-8 text-white shadow-[0_20px_50px_rgba(26,37,71,0.18)]">
            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 md:block opacity-25">
              <Heart size={130} className="text-[#31B8AC]" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <p className="text-white/80 text-lg font-medium mb-1">Don't Delay Cancer Treatment</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                Book Your FREE Consultation Today!
              </h2>
              <p className="text-slate-300 text-sm max-w-lg">Early diagnosis and right treatment can save lives.</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button onClick={openModal} className="flex items-center gap-2 bg-[#1B8C5C] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#157a4e] shadow-lg transition-all">
                  <Phone size={16} />
                  Book Free Consultation
                </button>
                <a href="https://wa.me/919986764471" target="_blank" className="flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[#1a2547] transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>

            <div className="absolute bottom-6 right-10 hidden lg:flex flex-col gap-1 text-sm font-semibold text-white/75">
              <span>Hope</span><span>Strength</span><span>Courage</span>
            </div>
            <Shield size={26} className="absolute bottom-7 right-40 hidden lg:block text-white/35" />
            <Clock size={26} className="absolute bottom-16 right-28 hidden lg:block text-white/35" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FivthSection;
