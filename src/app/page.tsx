import React from 'react'
import Nav from './component/Nav'
import FirstSection from './component/FirstSection'
import SecondSection from './component/Second-Section'
import FacilitySection from './component/Third-section'
import FourthSection from './component/Fourth-section'
import FivthSection from './component/Fivth-section'
import Footer from './component/Footer'
import ModelForm from './component/ModelForm'

export default function Page() {
  return (
    <div className='bg-white min-h-screen text-black'>
      <Nav />
      <FirstSection />
      <SecondSection />
      <FacilitySection />
      <FourthSection />
      <FivthSection />
      <Footer />
      <ModelForm />

      {/* Mobile bottom padding for sticky bar */}
      <div className="h-14 md:hidden" />
    </div>
  )
}
