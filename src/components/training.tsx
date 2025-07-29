'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function generateParticleGrid() {
  const particles = [];
  const ROWS = 5;
  const COLS = 5;
  
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      particles.push({
        x: 10 + (i / (ROWS - 1)) * 80,
        y: 10 + (j / (COLS - 1)) * 80,
        size: 5 + ((i + j) % 3),
        delay: (i + j) * 0.08,
      });
    }
  }
  return particles;
}

export default function Training() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = useRef(generateParticleGrid());
  
  const boxScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const boxGlow = useTransform(scrollYProgress, [0, 0.3], [0, 20]);
  
  return (
    <section className="relative h-[300vh] bg-[#202426] rounded-t-3xl">
      <div className="sticky top-0 left-0 h-screen w-full flex">
        {/* Left side with information */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <motion.div
            style={{ y }}
            className="space-y-12"
          >
            <h1 className="text-d1 font-display text-gray-200 leading-relaxed">
              Real Research — Applied
            </h1>
            
            <div className="space-y-6">
              <p className="text-h3 text-white">
                OptiMUS-0.3 Trained on Proprietary NLP4LP Dataset comprised of hundreds of advanced procurement problems.
              </p>
              
              <p className="text-base font-display text-gray-200 max-w-2xl leading-relaxed">
                The only complex optimization model that can unify unstructured procurement data to keep production running.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right side with particles and dataset box */}
        <div className="w-1/2 h-screen relative overflow-hidden">
          {/* Central Dataset Box */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ 
              scale: boxScale,
              filter: useTransform(boxGlow, glow => `drop-shadow(0 0 ${glow}px #60A5FA)`)
            }}
          >
            <div className="w-48 h-48 border-2 border-blue-400 rounded-lg backdrop-blur-sm bg-blue-500/10 flex items-center justify-center">
              <span className="text-blue-400 text-base">NLP4LP</span>
            </div>
          </motion.div>

          {/* Particles */}
          <div className="absolute inset-0">
            {isClient && particles.current.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-400/80 rounded-full"
                initial={{ 
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  opacity: 1,
                  scale: 1
                }}
                animate={{
                  left: '50%',
                  top: '50%',
                  opacity: [1, 0.8, 0],
                  scale: [1, 0.8, 0],
                  transition: {
                    duration: 3,
                    delay: particle.delay,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  width: particle.size,
                  height: particle.size
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}