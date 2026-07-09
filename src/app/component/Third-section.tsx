"use client"
import React from "react";
import Image from "next/image";
import { useModal } from "../ModalProvider";
import {
  ClipboardList, FileSearch, ListChecks, Hospital, HeartPulse,
  ArrowRight, Stethoscope, CalendarCheck
} from "lucide-react";

export default function FacilitySection() {
  const { openModal } = useModal();

  const doctors = [
    { name: "Dr. Rajesh Kumar", qualification: "MD, DM Oncology", specialty: "Medical Oncology", experience: "15+ Years", image: "/doctor.png" },
    { name: "Dr. Amit Verma ", qualification: "MS, MCh Surgical Oncology", specialty: "Surgical Oncology", experience: "12+ Years", image: "/second_doctor.webp" },
    { name: "Dr. Neha Sharma", qualification: "MD, Radiation Oncology", specialty: "Radiation Oncology", experience: "10+ Years", image: "/third_doctor.jpg" },
    { name: "Dr. Pooja Mehta", qualification: "MD, Hematology", specialty: "Hematology Oncology", experience: "8+ Years", image: "/fourth_doctor.png" },
  ];

  const journeySteps = [
    { icon: ClipboardList, title: "Book Consultation" },
    { icon: FileSearch, title: "Doctor Reviews Your Reports" },
    { icon: ListChecks, title: "Personalized Treatment Plan" },
    { icon: Hospital, title: "Hospital Admission" },
    { icon: Stethoscope, title: "Treatment Begins" },
    { icon: HeartPulse, title: "Follow-up & Recovery Care" },
  ];

  return (
    <>
      <section id="doctors" className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-9">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Meet Our Expert Oncologists
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {doctors.map((doc, i) => (
              <div key={i} className="card-shell hover-lift rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                    <Image src={doc.image} alt={doc.name} width={120} height={120} className="h-full w-full object-contain" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-[#1a2547] text-sm leading-tight">{doc.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-1">{doc.qualification}</p>
                    <div className="mt-3 space-y-1.5 text-[11px] text-slate-500">
                      <p className="flex items-center gap-1.5"><CalendarCheck size={12} className="text-[#1B8C5C]" />{doc.experience} Experience</p>
                      <p className="flex items-center gap-1.5"><Stethoscope size={12} className="text-[#1B8C5C]" />{doc.specialty}</p>
                    </div>
                  </div>
                </div>

                <button onClick={openModal} className="mt-4 w-full rounded-md bg-[#1B8C5C] px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(27,140,92,0.2)] hover:bg-[#157a4e] transition-all">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-7">
            <button className="inline-flex items-center gap-1 rounded-md border border-[#1a2547]/20 px-6 py-2 text-[#1a2547] font-bold text-xs hover:bg-[#1a2547] hover:text-white transition-all">
              View All Doctors <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </section>

      <section id="treatment" className="py-12 md:py-14 soft-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Our Treatment Journey
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px border-t border-dashed border-slate-300" />
            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-3 shadow-[0_10px_26px_rgba(15,23,42,0.08)]">
                    <Icon size={24} className="text-[#1a2547]" />
                  </div>
                  <div className="mb-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#1B8C5C] text-[10px] font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-[11px] sm:text-xs font-extrabold text-[#1a2547] leading-tight max-w-[120px]">{step.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
