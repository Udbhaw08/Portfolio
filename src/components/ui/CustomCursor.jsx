import { useEffect, useState } from 'react';
import './CustomCursor.css';

export function CustomCursor() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const onMouseDown = (e) => {
      const id = Date.now() + Math.random();
      setClicks(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== id));
      }, 450);
    };

    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  return (
    <>
      {clicks.map(c => (
        <div
          key={c.id}
          className="cursor-burst"
          style={{ left: c.x, top: c.y }}
        >
          <span /><span /><span /><span /><span /><span />
        </div>
      ))}
    </>
  );
}
