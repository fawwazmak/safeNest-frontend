import React from 'react'
import HeroSection from './HeroSection'
import AvailableProperties from './AvailableProperties'
import CoLiving from './CoLiving'
import Subscription from './Subscription'
import Services from './Services'
import Testimonials from './Testimonials'
import Faqs from './Faqs'
import Contact from './Contact'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AvailableProperties />
      <CoLiving />
      <Subscription />
      <Services />
      <Testimonials />
      <Faqs />
      <Contact />
    </div>
  )
}

export default LandingPage
