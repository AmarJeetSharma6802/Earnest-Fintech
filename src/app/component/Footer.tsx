import React from "react";
import { Phone, CalendarDays, Clock, ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#22497D] text-white mt-16">

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
          <button className="bg-white text-[#22497D] px-5 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-gray-100 transition">
            Get in Touch
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-200">
        © 2026 Transition Care Center. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;