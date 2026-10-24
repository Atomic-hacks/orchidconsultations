import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Plus } from 'lucide-react';
import { rise, transition } from '../lib/motion';
export function Accordion({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen); const id = useId(); const reduced = useReducedMotion();
  return <motion.div layout={!reduced} transition={transition} className="accordion">
    <h3><button aria-expanded={open} aria-controls={id} id={`${id}-trigger`} onClick={() => setOpen(!open)}><span>{title}</span><motion.span animate={{ rotate: open && !reduced ? 45 : 0 }} transition={transition}><Plus size={20} aria-hidden="true" strokeWidth={1.5} /></motion.span></button></h3>
    <AnimatePresence initial={false}>{open && <motion.div key="body" id={id} role="region" aria-labelledby={`${id}-trigger`} variants={rise} initial={reduced ? false : 'hidden'} animate="visible" exit={reduced ? undefined : { y: -12, opacity: 0 }} className="accordion-body">{children}</motion.div>}</AnimatePresence>
  </motion.div>;
}
