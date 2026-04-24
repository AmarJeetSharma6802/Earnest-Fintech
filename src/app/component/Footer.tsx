"use client"
import React from "react";
import { Phone, CalendarDays, Clock, ArrowRight } from "lucide-react";

 import { useModal } from "../ModalProvider";

 function Footer() {
   const { openModal } = useModal();

  return (
    <>
   <div className="w-full h-[300px] md:h-[450px] block">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.563813048574!2d77.21056767495368!3d28.54897308787126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce300740f6fc5%3A0xc1e6314d0af3219f!2sSmall%20box%20office!5e1!3m2!1sen!2sin!4v1776944194328!5m2!1sen!2sin"
    className="w-full h-full border-0 rounded-lg"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    <footer className="bg-[#22497D] text-white ">

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <Clock className="text-white" size={28} />
          <div>
            <p className="font-semibold">24/7 Care & Support</p>
            <p className="text-sm text-gray-200">
              Professional care round the clock
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="text-white" size={28} />
          <div>
            <p className="font-semibold">Book a Visit</p>
            <p className="text-sm text-gray-200">
              You can visit our center
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-white" size={28} />
          <div>
            <p className="font-semibold">+91 99999 12345</p>
            <p className="text-sm text-gray-200">
              We are here to help you
            </p>
          </div>
        </div>

        <div>
          <button onClick={openModal} className="bg-white text-[#22497D] px-5 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-gray-100 transition">
            Get in Touch
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-200">
        © 2026 Transition Care Center. All rights reserved.
      </div>

    </footer>
    </>
  );
}

export default Footer;