import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mx = 0, my = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
      setTimeout(() => {
        if(trail) {
          trail.style.left = mx + 'px';
          trail.style.top = my + 'px';
        }
      }, 80);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
      cursor.style.mixBlendMode = 'exclusion';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.mixBlendMode = 'normal';
    };

    document.addEventListener('mousemove', onMouseMove);
    
    const attachHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverEvents();

    // Re-attach when DOM mutations happen (poor man's generic fix)
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef}></div>
      <div id="custom-cursor-trail" ref={trailRef}></div>
    </>
  );
}
