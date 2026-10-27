import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { transition } from '../lib/motion';
import { process } from '../data/site';
import { images } from '../data/images';
import { IconBadge } from './IconBadge';
import { Container, SectionHeader } from './SectionLayout';

function Step({ item, index, active, onActive }: { item: typeof process[number]; index: number; active: boolean; onActive: (index: number) => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: .55 });
  useEffect(() => { if (inView) onActive(index); }, [inView, index, onActive]);
  return <article ref={ref} className={`process-step${active ? ' is-active' : ''}`}>
    <div className="process-step-head"><IconBadge icon={item.icon} dark /><span>0{index + 1}</span></div>
    <h3>{item.title}</h3><p>{item.text}</p>
  </article>;
}

export function Process() {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start center', 'end center'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return <section ref={section} className="process-section-v2">
    <img className="process-backdrop" src={images.process[0].src} alt="" aria-hidden="true" />
    <span className="process-backdrop-shade" aria-hidden="true" />
    <Container><SectionHeader index="04" label="How we work" icon="Workflow" title="A clear path from insight to delivery." lead="Ensuring successful project delivery and client satisfaction every time." dark />
      <div className="process-grid">
        <div className="process-visual-sticky">
          <AnimatePresence mode="sync" initial={false}>{images.process.map((image, index) => index === active && <motion.img key={image.src} src={image.src} alt={image.alt} initial={reduced ? false : { opacity: 1, scale: 1.04, clipPath: 'inset(0% 100% 0% 0%)' }} animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }} exit={{ opacity: 0, scale: .99 }} transition={reduced ? { duration: 0 } : transition} />)}</AnimatePresence>
          <div className="process-progress" aria-hidden="true"><motion.span style={{ scaleX: reduced ? 1 : progress }} /></div>
          <p><span>0{active + 1}</span> / 04</p>
        </div>
        <div className="process-step-list">{process.map((item, index) => <Step key={item.title} item={item} index={index} active={index === active} onActive={setActive} />)}</div>
      </div>
    </Container>
  </section>;
}
