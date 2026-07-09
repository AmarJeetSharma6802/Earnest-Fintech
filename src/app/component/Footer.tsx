"use client"
import React from "react";
import { Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";
import { useModal } from "../ModalProvider";

function Footer() {
  const { openModal } = useModal();

  return (
    <>
      <footer id="contact" className="bg-white text-[#1a2547] pb-16 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-extrabold mb-5">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:+919986764471" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#1B8C5C] transition-colors"><Phone size={16} className="text-[#1B8C5C]" />+91 99867 64471</a>
                <a href="tel:+919986764472" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#1B8C5C] transition-colors"><Phone size={16} className="text-[#1B8C5C]" />+91 99867 64472</a>
                <a href="mailto:care@cancercare.in" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#1B8C5C] transition-colors"><Mail size={16} className="text-[#1B8C5C]" />care@cancercare.in</a>
                <div className="flex items-start gap-3 text-sm text-slate-600"><MapPin size={16} className="text-[#1B8C5C] mt-0.5" /><span>Saket, New Delhi - 110017</span></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold mb-5">Our Center</h3>
              <div className="rounded-lg overflow-hidden h-[150px] border border-slate-200 shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.563813048574!2d77.21056767495368!3d28.54897308787126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce300740f6fc5%3A0xc1e6314d0af3219f!2sSmall%20box%20office!5e1!3m2!1sen!2sin!4v1776944194328!5m2!1sen!2sin" className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold mb-5">Timings</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-slate-600"><Clock size={17} className="text-[#1B8C5C] mt-0.5" /><div><p className="font-bold text-[#1a2547]">Monday - Saturday</p><p>9:00 AM - 7:00 PM</p></div></div>
                <div className="flex items-start gap-3 text-sm text-slate-600"><CalendarCheck size={17} className="text-[#1B8C5C] mt-0.5" /><div><p className="font-bold text-[#1a2547]">Sunday</p><p>10:00 AM - 2:00 PM</p></div></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold mb-5">Follow Us</h3>
              <div className="flex gap-3 mb-6">
                {["f", "ig", "yt", "in"].map((label) => (
                  <a key={label} href="#" className="w-10 h-10 bg-[#1a2547] text-white rounded-full flex items-center justify-center text-xs font-extrabold hover:bg-[#1B8C5C] transition-all">
                    {label}
                  </a>
                ))}
              </div>
              <button onClick={openModal} className="bg-[#1B8C5C] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-[#157a4e] transition-all shadow-[0_12px_28px_rgba(27,140,92,0.2)]">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <p>Copyright 2026 CancerCare. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#1B8C5C] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1B8C5C] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#1B8C5C] transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 shadow-[0_-8px_24px_rgba(15,23,42,0.18)] md:hidden">
        <div className="grid grid-cols-3">
          <a href="tel:+919986764471" className="flex items-center justify-center gap-2 py-3.5 bg-[#1B8C5C] text-white font-bold text-sm"><Phone size={16} />Call Now</a>
          <a href="https://wa.me/919986764471" target="_blank" className="flex items-center justify-center gap-2 py-3.5 bg-[#169c4b] text-white font-bold text-sm">WhatsApp</a>
          <button onClick={openModal} className="flex items-center justify-center gap-2 py-3.5 bg-[#1a2547] text-white font-bold text-xs">Book Free</button>
        </div>
      </div>
    </>
  );
}

export default Footer;
