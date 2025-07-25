import React, { useEffect, useRef, useState } from 'react';

const pilotText = `We ran a 12-week pilot with a leading manufacturer. With our <br/> AI agents, our partner found<br/>
<strong class="highlight-word">hidden volume discounts, </strong> <br/>
<strong class="highlight-word">reduced tail spend,</strong> <br/> 
<strong class="highlight-word"> and cut duped SKUs.</strong>`;

export default function PilotResultsScroll() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const wordsRef = useRef<HTMLElement[]>([]);
  const highlightWordsRef = useRef<HTMLElement[]>([]);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Helper to split text into word spans, preserving HTML tags
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = pilotText;
    let wordIndex = 0;
    const words: HTMLElement[] = [];
    const highlightWords: HTMLElement[] = [];
    const processNode = (node: ChildNode) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const splitWords = node.textContent?.split(/(\s+)/) || [];
        const fragment = document.createDocumentFragment();
        splitWords.forEach(word => {
          if (word.trim()) {
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = word;
            span.style.transitionDelay = `${wordIndex * 0.05}s`;
            fragment.appendChild(span);
            words.push(span);
            wordIndex++;
          } else {
            fragment.appendChild(document.createTextNode(word));
          }
        });
        node.parentNode?.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (el.classList.contains('highlight-word')) {
          // For highlight-word, split its text into .word spans for animation, but keep them inside the parent for group underline
          const newChildren: Node[] = [];
          el.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              const splitWords = child.textContent?.split(/(\s+)/) || [];
              splitWords.forEach(word => {
                if (word.trim()) {
                  const span = document.createElement('span');
                  span.className = 'word'; // Only .word, not .highlight-word
                  span.textContent = word;
                  span.style.transitionDelay = `${wordIndex * 0.05}s`;
                  newChildren.push(span);
                  words.push(span);
                  wordIndex++;
                } else {
                  newChildren.push(document.createTextNode(word));
                }
              });
            } else {
              processNode(child);
            }
          });
          // Replace children
          while (el.firstChild) el.removeChild(el.firstChild);
          newChildren.forEach(child => el.appendChild(child));
          // Add the parent to highlightWords for group underline
          highlightWords.push(el);
        } else {
          Array.from(node.childNodes).forEach(processNode);
        }
      }
    };
    Array.from(tempDiv.childNodes).forEach(processNode);
    textElement.innerHTML = tempDiv.innerHTML;
    // Save refs
    wordsRef.current = Array.from(textElement.querySelectorAll('.word'));
    highlightWordsRef.current = Array.from(textElement.querySelectorAll('.highlight-word'));
  }, []);

  // Scroll handler
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);

      // Hide scroll indicator when reaching the end
      if (clampedProgress >= 0.95) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }

      // Animate words
      const words = wordsRef.current;
      const wordsToShow = Math.floor(words.length * clampedProgress * 2.5);
      words.forEach((word, idx) => {
        if (idx < wordsToShow) {
          word.classList.add('visible');
        } else {
          word.classList.remove('visible');
        }
      });

      // Animate highlight words
      const highlights = highlightWordsRef.current;
      const highlightProgress = Math.max(0, (clampedProgress - 0.2) / 0.2);
      const highlightsToShow = Math.floor(highlights.length * highlightProgress);
      highlights.forEach((word, idx) => {
        if (idx < highlightsToShow) {
          setTimeout(() => word.classList.add('underline'), idx * 200);
        } else {
          word.classList.remove('underline');
        }
      });

      // Animate stats
      const stats = statsRef.current;
      if (stats) {
        if (clampedProgress > 0.45) {
          stats.classList.add('visible');
          setTimeout(() => stat1Ref.current?.classList.add('animate'), 100);
          setTimeout(() => stat2Ref.current?.classList.add('animate'), 200);
          setTimeout(() => stat3Ref.current?.classList.add('animate'), 300);
        } else {
          stats.classList.remove('visible');
          [stat1Ref, stat2Ref, stat3Ref].forEach(ref => ref.current?.classList.remove('animate'));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container" style={{ height: '150vh' }}>
      <div className={`scroll-indicator fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 duration-500 bg-black/20 backdrop-blur-sm p-2 rounded-sm ${!showScrollIndicator ? 'hidden' : ''}`}>
        <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-200 ease-out rounded-full"
            style={{ 
              width: `${Math.min(scrollProgress * 100, 100)}%`
            }}
          />
        </div>
        <span className="text-s1">Scroll to explore</span>
      </div>

      <section className="pilot-section bg-black">
        <div className="text-content">
          <p className="pilot-text" ref={textRef} />
          <div className="stats-container" ref={statsRef}>
            <div className="stat-item">
              <span className="stat-number" ref={stat1Ref}>380</span>
              <div className="stat-label">SKUs Shifted</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" ref={stat2Ref}>1.8 Million</span>
              <div className="stat-label">PO Lines Scanned</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" ref={stat3Ref}>$4.7 Million</span>
              <div className="stat-label">Consolidation Upside</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 