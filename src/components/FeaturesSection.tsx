import { useState, useEffect, useRef, useCallback } from 'react'

import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { KeenSliderPlugin } from 'keen-slider/react'
import Image from 'next/image'
import { useIsMobile } from './useIsMobile'

interface Feature {
    label: string
    tag: string
    title: string
    img: string
    href: string
  }
  
  const FEATURES: Feature[] = [
    {
      label: 'Data Harmonization',
      tag: 'Automated Processing',
      title: 'Automated Data Harmonization & Canonicalization',
      img: '/Automated Data Harmonization Photo.jpg',
      href: '#'
    },
    {
      label: 'Attribute Enrichment',
      tag: 'Hybrid ML/LLM',
      title: 'Attribute Enrichment via Hybrid ML/LLM Pipelines',
      img: '/attributeEnrichment.jpg',
      href: '#'
    },
    {
      label: 'Commodity Classification',
      tag: 'Transformer Models',
      title: 'Transformer-Based Commodity Classification',
      img: '/commodityClassification.jpg',
      href: '#'
    },
    {
      label: 'AI-Driven Sourcing',
      tag: 'LLM Workflows',
      title: 'AI-Driven Sourcing & Quotation Workflows',
      img: '/aiDriven.jpg',
      href: '#'
    },
    {
      label: 'Multi-Objective Scoring',
      tag: 'Decision Optimization',
      title: 'Multi-Objective Bid Scoring & Decision Optimization',
      img: '/multiObjective.jpg',
      href: '#'
    },
    {
      label: 'Predictive Risk Analytics',
      tag: 'Obsolescence Detection',
      title: 'Predictive Risk and Obsolescence Analytics',
      img: '/obsolescence.jpg',
      href: '#'
    },
    {
      label: 'Continuous Learning',
      tag: 'Human-in-the-Loop',
      title: 'Human-in-the-Loop Continuous Learning',
      img: '/continous.jpg',
      href: '#'
    },
    {
      label: 'Procurement Telemetry',
      tag: 'End-to-End Analytics',
      title: 'End-to-End Procurement Telemetry',
      img: '/endToEnd.jpg',
      href: '#'
    },
  ]
  
  const CenterFocus: KeenSliderPlugin = (slider) => {
    const update = () => {
      const centerPoint = slider.size / 2
      slider.slides.forEach((slide, index) => {
        const details = slider.track.details.slides[index]
        const center = details.abs + details.size / 2 - slider.track.details.position
        const distance = Math.abs(centerPoint - center)
        const scale = Math.max(0.8, 1 - (distance / slider.size) * 0.3)
        const opacity = Math.max(0.3, 1 - (distance / slider.size) * 0.8)
        // Set CSS variables for smooth transition
        slide.style.setProperty('--scale', scale.toString())
        slide.style.setProperty('--opacity', opacity.toString())
      })
    }
    
    slider.on('created', update)
    slider.on('detailsChanged', update)
    slider.on('slideChanged', update)
  }
  
  export default function Features() {
    const [current, setCurrent] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const isMobile = useIsMobile(768)
    const [ref, slider] = useKeenSlider<HTMLDivElement>({
      loop: true,
      mode: 'snap',
      slides: isMobile
        ? { origin: 'center', perView: 1, spacing: 8 }
        : { origin: 'center', perView: 1.3, spacing: 32 },
      slideChanged: (s: KeenSliderInstance) => setCurrent(s.track.details.rel),
      created: (s) => {
        s.container.style.height = isMobile ? '38vh' : '70vh'
      },
      // Key changes for seamless looping
      renderMode: 'performance',
      drag: true,
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 1, spacing: 8 },
        },
      },
    }, [CenterFocus])

    // Function to reset the auto-scroll interval
    const resetAutoScroll = useCallback(() => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (slider.current) {
        intervalRef.current = setInterval(() => {
          slider.current?.next()
        }, 4000)
      }
    }, [slider])

    // Function to pause the auto-scroll interval
    const pauseAutoScroll = useCallback(() => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }, [])

    // Auto-scroll functionality
    useEffect(() => {
      resetAutoScroll()
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, [slider, resetAutoScroll])

    // Keyboard navigation with auto-scroll reset
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
          slider.current?.prev()
          resetAutoScroll()
        }
        if (e.key === 'ArrowRight') {
          slider.current?.next()
          resetAutoScroll()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [slider, resetAutoScroll])


  
    return (
      <><section id="features" className="relative pt-32 pb-0 overflow-hidden bg-[#f9fafb] bg-light">
        <div className={`max-w mx-auto ${isMobile ? 'px-2' : 'px-16'}`}>
          <div className="highlighted-features bordered has-heading mb-12">
            <div className={`heading mb-8 text-left md:text-left ml-4 md:ml-10`} style={{ marginLeft: '0', marginRight: '0' }}>
              <h3 className="text-d1 text-gray-900">Research Foci</h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            {!isMobile && (
              <div className="flex justify-center md:justify-start mb-6" style={{ marginLeft: '0', marginRight: '0' }}>
                <ul className="flex flex-wrap items-start space-x-2 md:space-x-4 min-w-max px-2 md:px-4">
                  {FEATURES.map((feature, index) => (
                    <li key={feature.label} className="flex-shrink-0 min-w-[4rem] max-w-[12rem]">
                      <button
                        onClick={() => {
                          slider.current?.moveToIdx(index)
                          resetAutoScroll()
                        } }
                        className={`icon-icon item flex flex-col items-center p-2 md:p-4 rounded-lg transition-all duration-300 border-2 w-auto ${index === current
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-600'}`}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                            <path
                              d="M20 6.20312L20 33.7939M20 6.20312L12 14.2031M20 6.20312L28 14.2031"
                              stroke="currentColor"
                              strokeWidth="2.29"
                              strokeLinecap="round"
                              strokeLinejoin="round" />
                            <path
                              d="M8 20.2031H32M8 26.2031H32"
                              stroke="currentColor"
                              strokeWidth="2.29"
                              strokeLinecap="round"
                              strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="text-center leading-tight px-1 break-words whitespace-normal text-sm line-clamp-2 flex flex-col justify-center h-[2.4em]">{feature.label}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section><div className="relative">
          {/* Background overlay to hide slides during loop transition */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: isMobile
                ? 'linear-gradient(90deg, #f9fafb 0%, transparent 5%, transparent 95%, #f9fafb 100%)'
                : 'linear-gradient(90deg, #f9fafb 0%, transparent 15%, transparent 85%, #f9fafb 100%)',
            }} />

          <div
            ref={ref}
            key={isMobile ? 'mobile' : 'desktop'}
            className={`keen-slider ${isMobile ? 'h-[38vh]' : 'h-[50vh] md:h-[70vh]'} px-4`}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resetAutoScroll}
            style={{
              // Ensure smooth transitions and hide overflow during loop
              overflow: 'hidden',
              willChange: 'transform',
            }}
          >
            {FEATURES.map((feature) => (
              <a
                key={feature.label}
                className="keen-slider__slide group relative h-full rounded-3xl overflow-hidden transition-all duration-300 border border-gray-200 shadow-md"
                style={{
                  transform: 'scale(var(--scale, 1))',
                  opacity: 'var(--opacity, 1)',
                  transition: 'transform 0.4s cubic-bezier(.17,.98,1,.99), opacity 0.6s cubic-bezier(.17,.98,1,.99)',
                  // Ensure slides are properly positioned during transitions
                  willChange: 'transform, opacity',
                }}
              >
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-10 bg-gradient-to-t from-black/50 to-transparent transition-transform duration-300">
                  <p className="text-base text-white mb-1 md:mb-2 uppercase tracking-wider drop-shadow-sm">
                    {feature.tag}
                  </p>
                  <h3
                    className={`${isMobile ? 'text-h3' : 'text-d1'} text-white leading-tight drop-shadow-sm`}
                  >
                    {feature.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* Hide navigation arrows on mobile */}
          {!isMobile && (
            <>
              <button
                onClick={() => {
                  slider.current?.prev()
                  resetAutoScroll()
                } }
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black text-white border border-gray-300 p-2 md:p-4 hover:bg-gray-800 transition-colors shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => {
                  slider.current?.next()
                  resetAutoScroll()
                } }
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black text-white border border-gray-300 p-2 md:p-4 hover:bg-gray-800 transition-colors shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>
      </>
    )
  }