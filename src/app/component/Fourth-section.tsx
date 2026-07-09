"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Play, Users, UserCheck, TrendingUp, MapPin, Award } from "lucide-react";

export default function FourthSection() {
  const reviews = [
    { rating: 5, text: "Excellent treatment and very supportive staff. Highly recommended for cancer care.", author: "Anita Sharma", location: "Breast Cancer Patient" },
    { rating: 5, text: "Very good experience. Doctors explain every detail and guide the family with patience.", author: "Rohit Malhotra", location: "Patient" },
    { rating: 5, text: "Best cancer care center with advanced facilities and compassionate care.", author: "Meena Iyer", location: "Patient" },
    { rating: 5, text: "The care and attention my father received was exceptional throughout treatment.", author: "Amit Singh", location: "Delhi" },
  ];

  const stats = [
    { icon: Users, value: "20,000+", label: "Patients Assisted" },
    { icon: UserCheck, value: "15+", label: "Cancer Specialists" },
    { icon: TrendingUp, value: "98%", label: "Patient Satisfaction" },
    { icon: MapPin, value: "10+", label: "Cities Served" },
    { icon: Award, value: "25+", label: "Years of Excellence" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="testimonials" className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-9">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2547]">
              Stories of Hope & Recovery
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1.35fr_2fr] gap-5">
            <div className="card-shell rounded-xl p-3">
              <div className="grid sm:grid-cols-[190px_1fr] gap-4 items-center">
                <div className="relative h-48 overflow-hidden rounded-lg bg-slate-100">
                  <Image src="/doctor.png" alt="patient story" width={240} height={240} className="h-full w-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1a2547]/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#1a2547] shadow-lg">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-extrabold text-[#1a2547]">Mr. Suresh Verma</h3>
                  <p className="text-xs text-slate-500 mt-1">Lung Cancer Survivor</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    The doctors and staff here were like family. Their support and treatment helped me fight cancer and win.
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" className="text-amber-400" />)}
                  </div>
                </div>
              </div>
            </div>

            <Swiper
              spaceBetween={16}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="w-full pb-10"
              breakpoints={{ 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            >
              {reviews.map((item, i) => (
                <SwiperSlide key={i} className="flex">
                  <div className="card-shell flex min-h-[220px] w-full flex-col justify-between rounded-xl p-5">
                    <div>
                      <div className="mb-4 text-3xl font-serif leading-none text-[#1a2547]/30">&ldquo;</div>
                      <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                    <div>
                      <div className="flex gap-0.5 mt-5">
                        {[...Array(5)].map((_, j) => <Star key={j} size={13} fill={j < item.rating ? "#F59E0B" : "#E5E7EB"} className={j < item.rating ? "text-amber-400" : "text-slate-200"} />)}
                      </div>
                      <p className="mt-4 font-extrabold text-[#1a2547] text-sm">{item.author}</p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-12 md:py-14 soft-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#1a2547] mb-9">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`flex items-center justify-center gap-3 rounded-xl bg-white/70 p-4 text-[#1a2547] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <Icon size={30} className="text-[#31B8AC]" />
                  <div>
                    <p className="text-2xl font-extrabold">{item.value}</p>
                    <p className="text-[11px] font-medium text-slate-600">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
