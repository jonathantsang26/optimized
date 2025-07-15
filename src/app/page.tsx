'use client'
import GlobalStyles             from '@/components/GlobalStyles'
import Header                   from '@/components/Header'
import HeroSection              from '@/components/HeroSection'
import FeaturesSection          from '@/components/FeaturesSection'
import HowItWorksSection        from '@/components/HowItWorksSection'

import Footer                   from '@/components/Footer'
import { useEffect, useState } from 'react'
import TestimonialsWithCTASection from '@/components/TestimonialsWithCTASection'

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header scrollY={scrollY} />
      <div className="bg-white">
        <HeroSection scrollY={scrollY} />
      </div>
      <div className="bg-[#f9fafb]">
        <FeaturesSection />
      </div>
      <div className="bg-white">
        <HowItWorksSection />
      </div>
      <div className="bg-white">
        <TestimonialsWithCTASection />
      </div>
      {/* Gradient transition into footer */}
      <div className="bg-white"/>
      <Footer />
    </>
  )
}
