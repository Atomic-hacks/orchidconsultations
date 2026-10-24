import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import { Button, TextLink } from "./Button";
import { menu, rise, transition } from "../lib/motion";
function MobileMenu({ close }: { close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
    };
  }, []);
  return (
    <motion.dialog
      ref={ref}
      className="mobile-menu"
      variants={menu}
      initial={reduced ? false : "hidden"}
      animate="visible"
      exit={reduced ? undefined : "exit"}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      aria-label="Navigation"
    >
      <div className="menu-top">
        <Link className="wordmark" to="/" onClick={close} aria-label="Orchid Consultations home">
          <img src="/logo-dark.svg" alt="Orchid Consultations" />
        </Link>
        <button onClick={close} aria-label="Close menu" className="icon-button">
          <X strokeWidth={1.5} />
        </button>
      </div>
      <nav aria-label="Mobile navigation">
        {[
          { label: "Home", to: "/" },
          ...navigation,
          { label: "Contact", to: "/contact" },
        ].map((item, i) => (
          <motion.div variants={rise} key={item.to}>
            <Link to={item.to} onClick={close}>
              <span className="menu-index">0{i + 1}</span>
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
      <p className="small-caps">Limitless possibilities</p>
    </motion.dialog>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false),
    [hidden, setHidden] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduced = useReducedMotion();
  const { pathname } = useLocation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 25);
    if (Math.abs(latest - previous) > 3)
      setHidden(latest > previous && latest > 180);
  });
  return (
    <>
      <motion.header
        className={`navbar ${pathname === '/' ? 'navbar-over-hero' : ''}`}
        animate={{ y: hidden && !open && !reduced ? "-100%" : "0%" }}
        transition={{ ...transition, duration: 0.5 }}
        onFocusCapture={() => setHidden(false)}
      >
        <motion.div
          aria-hidden="true"
          className="nav-backdrop"
          animate={{ opacity: scrolled ? 1 : 0 }}
        />
        <div className="nav-inner">
          <Link
            className="wordmark"
            to="/"
            aria-label="Orchid Consultations home"
          >
            <img src="/logo-dark.svg" alt="Orchid Consultations" className="h-15" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.to} className="nav-link">
                <TextLink to={item.to}>{item.label}</TextLink>
                {(pathname === item.to ||
                  (item.to === "/services" &&
                    pathname.startsWith("/services/"))) && (
                  <motion.span
                    className="active-line"
                    layoutId={reduced ? undefined : "nav-active"}
                    transition={transition}
                  />
                )}
              </div>
            ))}
          </nav>
          <div className="desktop-contact">
            <Button to="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
          <button
            className="mobile-toggle icon-button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu strokeWidth={1.5} />
          </button>
        </div>
        <motion.div
          aria-hidden="true"
          className="scroll-progress"
          style={{ scaleX: reduced ? scrollYProgress : progress }}
        />
      </motion.header>
      <AnimatePresence>
        {open && <MobileMenu close={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
