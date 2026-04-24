"use client";
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useModal } from "../ModalProvider";
import api from "@/lib/api"; // 👈 tumhara axios instance

function ModelForm() {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 👉 Outside click close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeModal]);

  if (!isOpen) return null;

  // 👉 Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 👉 Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const res = await api.post("/auth/book", formData);

      setMessage(res.data.message || "Booking successful ✅");

      // reset form
      setFormData({
        fullName: "",
        phone: "",
        city: "",
        date: "",
        time: "",
      });

      // auto close after 2 sec
      setTimeout(() => {
        closeModal();
      }, 2000);

    } catch (error: any) {
      console.error(error);
      setMessage(error?.response?.data?.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-[#2A5795] to-[#31B8AC] p-6 text-white"
      >
        {/* ❌ Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X />
        </button>

        <h2 className="text-center text-2xl font-semibold mb-4">
          Book a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 rounded bg-white/20"
            required
          />

          {/* Phone */}
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full p-3 rounded bg-white/20"
            required
          />

          {/* City */}
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/20"
            required
          >
            <option value="" disabled className="text-black">
              Select City
            </option>
            <option className="text-black">DELHI</option>
            <option className="text-black">GURUGRAM</option>
            <option className="text-black">NOIDA</option>
            <option className="text-black">BANGALORE</option>
            <option className="text-black">KOLKATA</option>
            <option className="text-black">CHANDIGARH</option>
            <option className="text-black">UP</option>
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/20"
            required
          />

          {/* Time */}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/20"
            required
          />

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-white text-black py-2 rounded font-semibold"
          >
            {loading ? "Booking..." : "Submit"}
          </button>

          {/* Message */}
          {message && (
            <p className="text-center text-sm mt-2">{message}</p>
          )}

          <p className="text-center text-xs mt-2">
            By proceeding, you accept Transition Care Center Privacy Policy &
            Disclaimer
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModelForm;