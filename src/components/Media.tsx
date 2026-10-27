import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { CSSProperties } from 'react';
import type { MediaRatio } from '../data/images';
import { ease } from '../lib/motion';

interface MediaProps {
  src: string;
  alt: string;
  ratio?: MediaRatio;
  caption?: string;
  parallax?: boolean;
  reveal?: boolean;
  revealFrom?: 'bottom' | 'left';
  className?: string;
  position?: string;
  layoutId?: string;
  eager?: boolean;
}

export function Media({ src, alt, ratio = '16/9', caption, reveal = true, revealFrom = 'bottom', className = '', position = 'center', layoutId, eager = false }: MediaProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reduced = useReducedMotion();
  const hiddenClip = revealFrom === 'left' ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 100% 0%)';
  const openClip = 'inset(0% 0% 0% 0%)';
  const show = reduced || !reveal || (inView && loaded);
  const style = { '--media-ratio': ratio } as CSSProperties;
  return <figure ref={ref} className={`media ${loaded ? 'is-loaded' : ''} ${className}`} style={style}>
    <motion.div
      className="media-frame"
      layoutId={reduced ? undefined : layoutId}
    >
      <motion.span className="media-skeleton" aria-hidden="true" initial={false} animate={{ opacity: loaded ? 0 : 1 }} transition={{ duration: reduced ? 0 : 0.35 }} />
      <motion.img
        src={src}
        alt={alt}
        loading={eager || inView ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        initial={false}
        animate={{ clipPath: show ? openClip : hiddenClip, scale: show ? 1 : 1.075 }}
        transition={{ duration: reduced || !reveal ? 0 : 0.95, ease }}
        whileHover={reduced ? undefined : { scale: 1.035, transition: { duration: 0.5, ease } }}
        style={{ objectPosition: position }}
      />
    </motion.div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
