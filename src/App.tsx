import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import { useLenis } from "lenis/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {
  Preloader,
  SmoothScroll,
} from "./components/Experience";
import { curtain, transition } from "./lib/motion";
import { services } from "./data/services";
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
function Loading() {
  return (
    <div
      className="wrap loading-skeleton"
      role="status"
      aria-label="Loading page"
    >
      <div />
      <div />
      <div />
    </div>
  );
}
function Layout() {
  const location = useLocation();
  const reduced = useReducedMotion();
  const lenis = useLenis();
  useEffect(() => {
    const slug = location.pathname.split("/").at(-1);
    const title =
      services.find((s) => s.slug === slug)?.title ??
      {
        "/": "Business & Digital Consulting",
        "/about": "About",
        "/team": "Team",
        "/contact": "Contact",
        "/faq": "FAQ",
        "/privacy": "Privacy Policy",
        "/services": "Services",
        "/investment-calculator": "Investment Calculator",
      }[location.pathname] ??
      "Page not found";
    document.title = `${title} | Orchid Consultations`;
    if (!location.hash) {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash, lenis]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduced ? false : { y: 12 }}
            animate={{ y: 0 }}
            exit={reduced ? undefined : { y: -12 }}
            transition={{ ...transition, duration: 0.35 }}
          >
            <Suspense fallback={<Loading />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/about-us"
                  element={<Navigate to="/about" replace />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/investment-calculator" element={<Calculator />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            {!reduced && (
              <motion.div
                className="route-curtain"
                aria-hidden="true"
                variants={curtain}
                initial="initial"
                animate="enter"
                exit="exit"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Preloader />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user" transition={transition}>
        <SmoothScroll>
          <Layout />
        </SmoothScroll>
      </MotionConfig>
    </BrowserRouter>
  );
}
