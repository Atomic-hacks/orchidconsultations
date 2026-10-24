import { useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { CSSProperties } from 'react';
import type { MediaRatio } from '../data/images';
import { transition } from '../lib/motion';

interface MediaProps {
  src: string;
  alt: string;
  ratio?: MediaRatio;
  caption?: string;
  parallax?: boolean;
  reveal?: boolean;
  className?: string;
  position?: string;
  layoutId?: string;
  eager?: boolean;
}

export function Media({ src, alt, ratio = '16/9', caption, parallax = false, reveal = true, className = '', position = 'center', layoutId, eager = false }: MediaProps) {
  const [loaded, setLoaded] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const style = { '--media-ratio': ratio } as CSSProperties;
  return <figure className={`media ${loaded ? 'is-loaded' : ''} ${className}`} style={style}>
    <motion.div
      className="media-frame"
      layoutId={reduced ? undefined : layoutId}
      initial={reveal && !reduced ? { clipPath: 'inset(0 0 100% 0)' } : false}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ ...transition, duration: 0.82 }}
    >
      <motion.span className="media-skeleton" aria-hidden="true" initial={false} animate={{ opacity: loaded ? 0 : 1 }} transition={{ duration: reduced ? 0 : 0.35 }} />
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        initial={reveal && !reduced ? { scale: 1.16 } : false}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ ...transition, duration: 0.9 }}
        style={{ objectPosition: position, y: parallax && !reduced ? y : 0 }}
      />
    </motion.div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
