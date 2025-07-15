import { useEffect, useRef } from 'react'



interface TestimonialCard {
    org: string
    quote: string
    image: string
    person: string
    role: string
  }
  
  const TESTIMONIALS: TestimonialCard[] = [
    {
      org: 'Global Industrial OEM',
      quote: 'My buyers spend most of the week stitching RFQs and spreadsheets—strategic work never happens.',
      image: '',
      person: 'Michael K.',
      role: 'Director of Supply Chain'
    },
    {
      org: 'Tier 1 Automotive Supplier',
      quote: 'We discover a supplier slipped only when the line grinds to a halt—rush freight starts burning cash.',
      image: '',
      person: 'Deepak P.',
      role: 'VP Procurement'
    },
    {
      org: 'Medical Device OEM',
      quote: 'One drawing change triggers days of email ping-pong; wrong-rev parts end up as expensive scrap.',
      image: '',
      person: 'Sarah G.',
      role: 'Head of Strategic Sourcing'
    },
    {
      org: 'Aerospace Tier-2',
      quote: 'It takes us three weeks to normalise bids because every supplier sends a different template.',
      image: '',
      person: 'Luis R.',
      role: 'Sourcing Manager'
    },
    {
      org: 'Consumer Electronics',
      quote: 'Forecast swings kill us—we have zero visibility into which suppliers can flex and which cannot.',
      image: '',
      person: 'Emma S.',
      role: 'Planning Director'
    },
  ]
  
  export default function TestimonialsCarousel() {
    const wrapRef = useRef<HTMLDivElement>(null)
    const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
  
    useEffect(() => {
      const wrap = wrapRef.current
      if (!wrap) return
  
      const handleMouseEnter = () => {
        wrap.style.animationPlayState = 'paused'
      }
      
      const handleMouseLeave = () => {
        wrap.style.animationPlayState = 'running'
      }
  
      wrap.addEventListener('mouseenter', handleMouseEnter)
      wrap.addEventListener('mouseleave', handleMouseLeave)
  
      return () => {
        wrap.removeEventListener('mouseenter', handleMouseEnter)
        wrap.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [])
  
    return (
      <section className="py-100 top-10 overflow-hidden bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Leading companies trust us to transform their procurement operations
          </p>
        </div>
  
        <div className="relative">
          <div 
            ref={wrapRef}
            className="carousel-track flex"
            style={{ '--rotation-duration': '20s' } as React.CSSProperties}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="carousel-card group">
                <p className="text-blue-600 text-xs uppercase tracking-widest mb-4 font-medium">
                  {testimonial.org}
                </p>
                <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-900 font-medium">{testimonial.person}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }