import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { Button } from './Button';
import { images, serviceImages } from '../data/images';
import { services } from '../data/services';
import { ease, heroImage, heroCopy } from '../lib/motion';

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
  const select = (next: number) => {
    setPlaying(false);
    setIndex(next);
  };
  const step = (amount: number) => {
    setPlaying(false);
    setIndex(current => (current + amount + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!playing || reduced || !visible) return;
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [playing, reduced, visible]);

  return <section ref={ref} className="full-bleed-hero" aria-roledescription="carousel" aria-label="Orchid consulting services" onFocusCapture={() => setPlaying(false)}>
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
      <div className="hero-bottom-rail">
        <a className="hero-scroll-link" href="#services"><motion.span whileHover={reduced ? undefined : { y: 4 }}><ArrowDown size={19} strokeWidth={1.5} /></motion.span><span>Explore our services</span></a>
        <div className="hero-controls">
          <button className="icon-button" onClick={() => step(-1)} aria-label="Previous hero slide"><ArrowLeft size={18} /></button>
          <div className="hero-pagination" aria-label="Choose hero slide">{slides.map((slide, slideIndex) => <button key={slide.title} aria-label={`Show slide ${slideIndex + 1}: ${slide.title}`} aria-current={slideIndex === index ? 'true' : undefined} onClick={() => select(slideIndex)}><span>{String(slideIndex + 1).padStart(2, '0')}</span><motion.i initial={false} animate={{ scaleX: slideIndex === index ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.5, ease }} /></button>)}</div>
          <button className="icon-button" onClick={() => step(1)} aria-label="Next hero slide"><ArrowRight size={18} /></button>
          <button className="icon-button" onClick={() => setPlaying(value => !value)} aria-label={playing ? 'Pause hero slideshow' : 'Play hero slideshow'}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
        </div>
        <p className="hero-location">Port Harcourt, Nigeria</p>
      </div>
    </div>
  </section>;
}
