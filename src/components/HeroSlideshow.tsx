import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Button } from './Button';
import { images, serviceImages } from '../data/images';
import { services } from '../data/services';
import { heroImage, heroCopy } from '../lib/motion';

const finance = services.find(service => service.slug === 'access-to-finance')!;
const software = services.find(service => service.slug === 'software-development')!;

const slides = [
  {
    eyebrow: 'Business & digital consulting',
    title: 'Your partner in business growth and financial success.',
    text: 'We provide financial solutions and business consulting services that help individuals, employees, and businesses access funding, investments, and strategic support for growth.',
    image: images.hero,
    primary: { label: 'Schedule a consultation', to: '/contact' },
    secondary: { label: 'Explore our services', to: '/services' },
  },
  {
    eyebrow: finance.title,
    title: finance.title,
    text: finance.intro,
    image: serviceImages[finance.slug],
    primary: { label: 'Schedule a consultation', to: `/contact?service=${finance.slug}` },
    secondary: { label: 'Explore this service', to: `/services/${finance.slug}` },
  },
  {
    eyebrow: 'Technology',
    title: software.title,
    text: software.intro,
    image: serviceImages[software.slug],
    primary: { label: 'Schedule a consultation', to: `/contact?service=${software.slug}` },
    secondary: { label: 'Explore this service', to: `/services/${software.slug}` },
  },
] as const;

export function HeroSlideshow() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const visible = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!reduced);
  const active = slides[index];

  useEffect(() => {
    if (!playing || reduced || !visible) return;
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [playing, reduced, visible]);

  return <section ref={ref} className="full-bleed-hero" aria-roledescription="carousel" aria-label="Orchid consulting services" onFocusCapture={() => setPlaying(false)} onPointerEnter={() => setPlaying(false)} onTouchStart={() => setPlaying(false)}>
    <motion.div className="hero-backdrop" style={{ y: reduced ? 0 : imageY }}>
      <AnimatePresence initial={false}>
        <motion.img key={active.image.src} src={active.image.src} alt={active.image.alt} variants={heroImage} initial={reduced ? false : 'enter'} animate="visible" exit={reduced ? undefined : 'exit'} fetchPriority={index === 0 ? 'high' : 'auto'} />
      </AnimatePresence>
    </motion.div>
    <div className="hero-shade" aria-hidden="true" />
    <div className="hero-editorial wrap">
      <motion.div className="hero-copy" style={{ y: reduced ? 0 : copyY }} aria-live={playing ? 'off' : 'polite'}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={index} variants={heroCopy} initial={reduced ? false : 'enter'} animate="visible" exit={reduced ? undefined : 'exit'}>
            <h1 className="hero-heading">{active.title}</h1>
            <p>{active.text}</p>
            <div className="hero-actions"><Button to={active.primary.to}>{active.primary.label}</Button><Button to={active.secondary.to} variant="outline">{active.secondary.label}</Button></div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  </section>;
}
