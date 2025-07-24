import React, { useEffect, useRef } from 'react';

const pilotText = `We ran a 12-week pilot with a leading manufacturer. With our <br/> AI agents, our partners found<br/>
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
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
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
      const highlightProgress = Math.max(0, (clampedProgress - 0.2) / 0.3);
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
        if (clampedProgress > 0.6) {
          stats.classList.add('visible');
          setTimeout(() => stat1Ref.current?.classList.add('animate'), 200);
          setTimeout(() => stat2Ref.current?.classList.add('animate'), 400);
          setTimeout(() => stat3Ref.current?.classList.add('animate'), 600);
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
    <div className="scroll-container" style={{ height: '200vh' }}>
      <section className="pilot-section bg-black" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="text-content" style={{ maxWidth: 835, padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="pilot-text" ref={textRef} />
          <div className="stats-container" ref={statsRef}>
            <div className="stat-item">
              <span className="stat-number" ref={stat1Ref}>12</span>
              <div className="stat-label">Week Pilot</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" ref={stat2Ref}>3</span>
              <div className="stat-label">Key Benefits</div>
            </div>
            <div className="stat-item">
              <span className="stat-number" ref={stat3Ref}>100%</span>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 