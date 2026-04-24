"use client"
import React, { useEffect, useState } from 'react'
import { Phone } from "lucide-react";
import { useModal } from '../ModalProvider';

function Nav() {

  const [isScroll, setIsscroll] = useState<boolean>(false)
  const { openModal } = useModal();


  useEffect(() => {
    const handleScroll = () => {
      setIsscroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-[5rem] h-[70px] transition-all duration-300
  ${isScroll ? "bg-white shadow-md" : "bg-transparent"}
`}
    >

      {/* LEFT */}
      <div className='flex items-center gap-1'>
        <img src="/Screenshot 2026-04-21 152549.png" className='h-14' alt="" />
        <div className='flex flex-col'>
          <span className='text-[#283583] text-lg font-bold'>TRANSITION</span>
          <span className='text-sm'>CARE CENTER</span>
        </div>
      </div>

      {/* RIGHT */}
      <ul className='flex gap-4 items-center'>
        <a href="tel:+9188822233665" className='flex gap-2 bg-[#283583] text-white px-4 py-2 rounded-md items-center'>
          <Phone size={18} /> + {""}91 8884451784
        </a>

        <li className='bg-[#31B8AC] px-4 py-2 rounded-md text-white cursor-pointer' onClick={openModal}>
          Book Appointment
        </li>
      </ul>
    </div>
  )
}

export default Nav