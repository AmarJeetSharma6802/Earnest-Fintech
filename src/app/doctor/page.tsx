import React from 'react'
import Nav from '../component/Nav'
import FirstSection from '../component/FirstSection'
import SecondSection from '../component/Second-Section'
import FacilitySection from '../component/Third-section'
import FourthSection from '../component/Fourth-section'
import FivthSection from '../component/Fivth-section'
import { Phone, MessageCircle } from "lucide-react";
import Footer from '../component/Footer'

function page() {
  return (
    <div className='bg-white h-full text-black '>
        <Nav/>
        <FirstSection/>
        <SecondSection/>
        <FacilitySection/>
        <FourthSection/>
        <FivthSection/>
        <Footer/>


         <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      <a
        href="tel:+9188822233665"
        className="bg-[#31B8AC] hover:bg-[#1d9b90] text-white p-4 rounded-full shadow-lg transition"
      >
        <Phone size={20} />
      </a>

      <a
        href="https://wa.me/9188822233665"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <MessageCircle size={20} />
      </a>

    </div>
    </div>
  )
}

export default page