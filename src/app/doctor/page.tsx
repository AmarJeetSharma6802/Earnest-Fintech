import React from 'react'
import Nav from '../component/Nav'
import FirstSection from '../component/FirstSection'
import SecondSection from '../component/Second-Section'

function page() {
  return (
    <div className='bg-white h-full text-black '>
        <Nav/>
        <FirstSection/>
        <SecondSection/>
    </div>
  )
}

export default page