import { useEffect, useRef } from 'react';
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react';
import type { AnimationPlaybackControls } from 'motion';
import { Asterisk } from 'lucide-react';
const names = ['Access to Market', 'Entrepreneurship Training', 'Business Advisory and Support', 'Access to Finance'];
export function Marquee() {
  const reduced = useReducedMotion(); const ref = useRef<HTMLDivElement>(null); const controls = useRef<AnimationPlaybackControls | null>(null); const speedControl = useRef<AnimationPlaybackControls | null>(null);
  const x = useMotionValue(0); const speed = useMotionValue(1);
  useEffect(() => { if (reduced || !ref.current) return; const start = () => { controls.current?.stop(); const width = ref.current?.getBoundingClientRect().width ?? 0; if (width) controls.current = animate(x, [0, -width], { duration: width / 38, ease: 'linear', repeat: Infinity }); };
    const observer = new ResizeObserver(start); observer.observe(ref.current); start(); return () => { observer.disconnect(); controls.current?.stop(); speedControl.current?.stop(); };
  }, [reduced, x]);
  const slow = (hover: boolean) => { if (reduced) return; speedControl.current?.stop(); speedControl.current = animate(speed, hover ? 0.25 : 1, { duration: 0.7, onUpdate: v => { if (controls.current) controls.current.speed = v; } }); };
  const content = names.map(name => <span className="marquee-item" key={name}>{name}<Asterisk aria-hidden="true" strokeWidth={1.2} size={30} /></span>);
  return <div className={`marquee ${reduced ? 'marquee-static' : ''}`} onMouseEnter={() => slow(true)} onMouseLeave={() => slow(false)} aria-label={names.join(', ')}><motion.div className="marquee-track" style={{ x: reduced ? 0 : x }} aria-hidden="true"><div ref={ref}>{content}</div>{!reduced && <div>{content}</div>}</motion.div></div>;
}
