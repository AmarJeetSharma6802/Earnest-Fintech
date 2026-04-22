import React from 'react'
import Nav from '../component/Nav'
import FirstSection from '../component/FirstSection'
import SecondSection from '../component/Second-Section'
import FacilitySection from '../component/Third-section'

function page() {
  return (
    <div className='bg-white h-full text-black '>
        <Nav/>
        <FirstSection/>
        <SecondSection/>
        <FacilitySection/>
    </div>
  )
}

export default page