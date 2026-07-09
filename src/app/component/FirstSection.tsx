"use client";
import React, { useState } from "react";
import {
  Phone,
  User,
  MapPin,
  ShieldCheck,
  UserCheck,
  Stethoscope,
  HeartHandshake,
  CheckCircle,
  Star,
  Award,
  HeartPulse,
  Clock,
} from "lucide-react";
import api from "@/lib/api";
import toast from "react-hot-toast";

function FirstSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    cancerType: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post("/auth/book", formData);
      toast.success(res.data.message || "Consultation booked successfully!");
      setFormData({ fullName: "", phone: "", cancerType: "", city: "" });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const trustBadges = [
    { icon: ShieldCheck, text: "100% Confidential" },
    { icon: UserCheck, text: "Expert Oncologists" },
    { icon: Stethoscope, text: "Advanced Treatment" },
    { icon: HeartHandshake, text: "Insurance Support" },
  ];

  const bottomTrust = [
    {
      icon: Star,
      value: "4.8",
      label: "Google Rating",
      sub: "2400+ Reviews",
      iconColor: "text-amber-500",
    },
    {
      icon: Award,
      value: "NABH",
      label: "Accredited",
      sub: "Trusted care standards",
      iconColor: "text-emerald-600",
    },
    {
      icon: HeartPulse,
      value: "Cashless",
      label: "Insurance",
      sub: "All major insurers",
      iconColor: "text-sky-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Patient Support",
      sub: "Always here for you",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_48%,#edfdf7_100%)]">
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#31B8AC]/10 blur-3xl" />
      <div className="absolute right-[-10rem] top-16 h-80 w-80 rounded-full bg-[#1B8C5C]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-[1fr_370px] items-center gap-8 lg:gap-10">
          <div className="relative w-full pt-4 lg:min-h-[430px]">
            <span className="inline-flex items-center gap-2 text-[#1B8C5C] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
              <CheckCircle size={14} className="text-[#1B8C5C]" />
              First Consultation Free
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1a2547] leading-[1.08] tracking-[-0.03em] mb-5">
              Cancer Treatment <br className="hidden md:block" />
              Starts with the{" "}
              <span className="text-[#1B8C5C]">Right Expert</span>
            </h1>

            <p className="text-slate-600 text-sm md:text-[15px] max-w-xl mb-8 leading-relaxed font-medium">
              Get a free first consultation with our expert oncologists.
              <br className="hidden md:block" />
              Personalized treatment, advanced care & compassionate
              <br className="hidden md:block" />
              support - all under one roof.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="tel:+919986764471"
                className="flex items-center gap-2 bg-[#1B8C5C] text-white px-7 py-3 rounded-full font-bold text-[13px] shadow-[0_12px_28px_rgba(27,140,92,0.24)] hover:bg-[#157a4e] hover:-translate-y-0.5 transition-all"
              >
                <Phone size={16} fill="white" />
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/919986764471"
                target="_blank"
                className="flex items-center gap-2 border border-[#25D366] text-[#118c43] px-7 py-3 rounded-full font-bold text-[13px] hover:bg-[#25D366] hover:text-white transition-all bg-white shadow-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 max-w-3xl pb-4">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white/85 px-3 py-3 text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                  >
                    <Icon size={16} className="text-[#1B8C5C]" />
                    <span className="text-[11px] font-semibold leading-tight">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-[18px] shadow-[0_22px_60px_rgba(15,23,42,0.14)] border border-slate-100 overflow-hidden">
              <div className="px-6 pt-6 pb-3 text-center">
                <h2 className="text-[#1a2547] text-2xl font-extrabold leading-tight">
                  Book Your <span className="text-[#1B8C5C]">FREE</span>{" "}
                  Consultation
                </h2>
                <p className="text-slate-500 text-xs mt-2 font-medium">
                  Take the first step towards better health
                </p>
              </div>

              <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3.5">
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition"
                    required
                  />
                </div>

                <div className="relative">
                  <Stethoscope
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <select
                    name="cancerType"
                    value={formData.cancerType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition appearance-none"
                    required
                  >
                    <option value="">Cancer Type (Optional)</option>
                    <option>Breast Cancer</option>
                    <option>Lung Cancer</option>
                    <option>Blood Cancer</option>
                    <option>Oral Cancer</option>
                    <option>Liver Cancer</option>
                    <option>Colon Cancer</option>
                    <option>Cervical Cancer</option>
                    <option>Prostate Cancer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full bg-[#1B8C5C] text-white font-bold py-3.5 rounded-lg hover:bg-[#157a4e] shadow-[0_12px_28px_rgba(27,140,92,0.22)] hover:shadow-lg transition-all text-sm disabled:opacity-60"
                >
                  {loading ? "Booking..." : "Book Free Consultation"}
                </button>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <CheckCircle size={12} className="text-[#1B8C5C]" /> First
                    Consultation Free
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <CheckCircle size={12} className="text-[#1B8C5C]" /> Expert
                    Oncologists
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
            {bottomTrust.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 lg:border-r lg:border-slate-100 lg:last:border-r-0 lg:pr-4"
                >
                  <div className="w-11 h-11 rounded-full border border-slate-100 bg-white flex items-center justify-center shadow-sm">
                    <Icon size={21} className={item.iconColor} />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#1a2547] text-[13px] whitespace-nowrap">
                      {item.label} <span>{item.value}</span>
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
