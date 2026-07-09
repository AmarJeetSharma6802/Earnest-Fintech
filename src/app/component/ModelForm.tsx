"use client";
import React, { useEffect, useRef, useState } from "react";
import { X, User, Phone, Stethoscope, MapPin } from "lucide-react";
import { useModal } from "../ModalProvider";
import api from "@/lib/api";
import toast from "react-hot-toast";

function ModelForm() {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    cancerType: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeModal]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post("/auth/book", formData);
      toast.success(res.data.message || "Consultation booked successfully!");
      setFormData({ fullName: "", phone: "", cancerType: "", city: "" });
      setTimeout(() => closeModal(), 2000);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[60] px-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-xl bg-white overflow-hidden shadow-2xl animate-fade-in-up"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a2547] to-[#243156] px-6 py-5 text-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer"
          >
            <X size={18} />
          </button>
          <h2 className="text-xl font-bold text-white">
            Book a <span className="text-[#31B8AC]">FREE</span> Consultation
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Our experts will get back to you within 24 hours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-black outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition"
              required
            />
          </div>

          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-black outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition"
              required
            />
          </div>

          <div className="relative">
            <Stethoscope size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              name="cancerType"
              value={formData.cancerType}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-black outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition appearance-none"
            >
              <option value="" className="text-gray-400">Cancer Type (Optional)</option>
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
            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-black outline-none focus:border-[#1B8C5C] focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-[#1B8C5C] text-white font-bold py-3.5 rounded-lg hover:bg-[#157a4e] shadow-md hover:shadow-lg transition-all text-sm disabled:opacity-60"
          >
            {loading ? "Booking..." : "Submit"}
          </button>

          <p className="text-center text-[10px] text-gray-400">
            By proceeding, you accept CancerCare Privacy Policy & Disclaimer
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModelForm;

