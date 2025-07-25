import { useIsMobile } from './useIsMobile';

export default function HeroSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center bg-gradient-to-b from-black to-gray-900 relative">
        <h1 className="text-3xl font-bold mb-4">AI Procurement</h1>
        <p className="text-lg mb-6 text-gray-300">Automation, data harmonization, and AI-driven insights.</p>
        <a href="/get-started" className="btn-primary px-8 py-3 text-lg font-semibold rounded-full">Get Started</a>
        {/* Scroll Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex flex-col items-center animate-bounce select-none">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white opacity-90 drop-shadow-lg md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="auto"
      >
        <source src="/videos/city-compressed.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50" />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"
      />
      
      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto">
        <h1 className="text-d1 font-bold font-display text-white leading-tight text-shadow mix-blend-difference">
          <span className="moving-gradient block mb-2 md:mb-4">AI-Powered</span>
          Procurement
        </h1>
        <p className="text-h2 font-display mt-4 md:mt-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
        Advancing global logistics through open research, data-centric models, and AI insights
        </p>
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        </div>
      </div>

      {/* Scroll Indicator - now visible on all screen sizes, with enhanced style */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 z-20 flex flex-col items-center animate-bounce select-none">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white opacity-90 drop-shadow-lg md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}