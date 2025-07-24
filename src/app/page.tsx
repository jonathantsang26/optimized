'use client'
import Header                   from '@/components/Header'
import HeroSection              from '@/components/HeroSection'
import FeaturesSection          from '@/components/FeaturesSection'
import HowItWorksSection        from '@/components/HowItWorksSection'

import Footer                   from '@/components/Footer'
import TestimonialsWithCTASection from '@/components/TestimonialsWithCTASection'

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <HeroSection />
      </div>
      <div className="bg-[#f9fafb]">
        <FeaturesSection />
      </div>
      <div className="bg-white">l
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
