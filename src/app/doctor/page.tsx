import React from 'react'
import Nav from '../component/Nav'
import FirstSection from '../component/FirstSection'
import SecondSection from '../component/Second-Section'
import FacilitySection from '../component/Third-section'
import FourthSection from '../component/Fourth-section'
import FivthSection from '../component/Fivth-section'

function page() {
  return (
    <div className='bg-white h-full text-black '>
        <Nav/>
        <FirstSection/>
        <SecondSection/>
        <FacilitySection/>
        <FourthSection/>
        <FivthSection/>
    </div>
  )
}

export default page