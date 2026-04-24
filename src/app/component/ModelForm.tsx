"use client";
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useModal } from "../ModalProvider";

function ModelForm() {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-[#2A5795] to-[#31B8AC] p-6 text-white"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X />
        </button>

       <h2 className='text-center text-2xl font-semibold text-white mb-4'>
        Book a Free Consultation
      </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-white/20"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full p-3 rounded bg-white/20"
          />

          <select className="w-full p-3 rounded bg-white/20">
            <option className="text-black">Delhi</option>
            <option className="text-black">Gurugram</option>
            <option className="text-black">Noida</option>
          </select>

          <button className="w-full bg-white text-black py-2 rounded">
            Submit
          </button>
          <p className=' text-center text-white'>By proceeding, you accept Transition Care Center Privacy Policy & Disclaimer</p>
        </form>
      </div>
    </div>
  );
}

export default ModelForm;