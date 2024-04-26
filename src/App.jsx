import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyUs_2 from './components/WhyUs_2'
import Pricing from './components/Pricing'

function App() {

  return (
    <div className='bg-[#1A1625]' >
      <Nav/>
      <Hero/>
      <WhyUs_2/>
      <Pricing/>
    </div>
  )
}

export default App
