'use client'

import{useRef,useState, useEffect} from 'react'

export default function AnnouncementBar() {
    const bar = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(true)
    
    useEffect(() => {
      const hidden = sessionStorage.getItem('announcementHidden')
      if (hidden === 'true') setVisible(false)
    }, [])
    
    useEffect(() => {
      document.documentElement.style.setProperty(
        '--announcement-height',
        visible && bar.current ? `${bar.current.offsetHeight}px` : '0px'
      )
    }, [visible])
    
    if (!visible) return null
    
    return (
      <div ref={bar} className="announcement-bar fixed top-0 left-0 right-0 z-50 py-3 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 relative">
          <p className="text-white text-sm font-medium flex items-center gap-2">
             PhD Optimization Research 
            <a 
              href="https://arxiv.org/pdf/2407.19633" 
              className="underline ml-2 hover:text-blue-200 transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </p>
          <button 
            onClick={() => {
              setVisible(false)
              sessionStorage.setItem('announcementHidden', 'true')
            }}
            className="ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 text-white text-lg font-bold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close announcement"
          >
            ×
          </button>
        </div>
      </div>
    )
  }
  