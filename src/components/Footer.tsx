import { BrandLogo } from "./BrandLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, socialLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="footer pt-2 footer-simple w-full !bg-[var(--ink)] text-[#f5f7fa]">
      <div className="wrap px-6">
        {/* Main Footer */}
        <div className="footer-primary !grid grid-cols-4 items-start !gap-x-3 !gap-y-3 py-4 !pb-4 max-[1024px]:!grid-cols-2 max-[1024px]:!gap-x-5 max-[1024px]:!gap-y-3 max-[1024px]:!py-3 max-[600px]:!grid-cols-1 max-[600px]:!gap-3 max-[600px]:!py-2 max-[600px]:!pb-2">
          {/* Company Profile */}
          <section
            className="footer-profile !m-0 flex min-w-0 flex-col items-start !gap-1"
            aria-label="About Orchiddigital Consulting"
          >
            <Link
              className="wordmark footer-brand !m-0 inline-flex w-fit items-center"
              to="/"
              aria-label="Orchiddigital Consulting home"
            >
              <BrandLogo className="!w-[140px]" />
            </Link>

            <p className="!m-0 max-w-[290px] text-[11px] !leading-[1.3] text-[#d2d8e3] max-[1024px]:max-w-[350px] max-[600px]:max-w-full">
              A fast-growing integrated financial and consulting services
              company delivering practical solutions that help businesses build,
              grow, and create lasting value.
            </p>
          </section>

          {/* Quick Links */}
          <section
            className="!m-0 min-w-0"
            aria-labelledby="footer-quick-links"
          >
            <h2
              id="footer-quick-links"
              className="!mb-1 !mt-0 text-[12px] !leading-[1.2] font-extralight tracking-[-0.02em] text-[#b9d79b]"
            >
              Quick Links
            </h2>

            <nav
              className="footer-nav-list !m-0 flex flex-col items-start !gap-[4px]"
              aria-label="Quick links"
            >
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/services"
              >
                Our Services
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/investment-calculator"
              >
                Investment Calculator
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/team"
              >
                Our Team
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/event-gallery"
              >
                Event Gallery
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/contact"
              >
                Contact Us
              </Link>
            </nav>
          </section>

          {/* Legal & Policies */}
          <section className="!m-0 min-w-0" aria-labelledby="footer-policies">
            <h2
              id="footer-policies"
              className="!mb-1 !mt-0 text-[12px] !leading-[1.2] font-extralight tracking-[-0.02em] text-[#b9d79b]"
            >
              Legal &amp; Policies
            </h2>

            <nav
              className="footer-nav-list !m-0 flex flex-col items-start !gap-[4px]"
              aria-label="Legal and policies"
            >
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/terms"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/whistleblowing"
              >
                Whistleblowing Policy
              </Link>
              <Link
                className="!m-0 text-[10px] !leading-[1.2] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/feedback"
              >
                Feedback &amp; Complaints
              </Link>
            </nav>
          </section>

          {/* Contact Information */}
          <section
            className="footer-contact-group !m-0 min-w-0"
            aria-labelledby="footer-contact"
          >
            <h2
              id="footer-contact"
              className="!mb-1 !mt-0 text-[12px] !leading-[1.2] font-extralight tracking-[-0.02em] text-[#b9d79b]"
            >
              Contact Us
            </h2>

            <div className="footer-contact-details !m-0 flex flex-col !gap-1.5">
              <a
                className="!m-0 flex min-w-0 items-start gap-1.5 text-[10px] !leading-[1.3] no-underline transition-opacity duration-250 hover:opacity-70"
                href={contact.maps}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin
                  className="mt-0.5 shrink-0 text-[#b9d79b]"
                  size={12}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere">{contact.address}</span>
              </a>

              <a
                className="!m-0 flex min-w-0 items-start gap-1.5 text-[10px] !leading-[1.3] no-underline transition-opacity duration-250 hover:opacity-70"
                href={`tel:${contact.tel}`}
              >
                <Phone
                  className="mt-0.5 shrink-0 text-[#b9d79b]"
                  size={12}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere">{contact.phone}</span>
              </a>

              <a
                className="!m-0 flex min-w-0 items-start gap-1.5 text-[10px] !leading-[1.3] no-underline transition-opacity duration-250 hover:opacity-70"
                href={`mailto:${contact.email}`}
              >
                <Mail
                  className="mt-0.5 shrink-0 text-[#b9d79b]"
                  size={12}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere">{contact.email}</span>
              </a>
            </div>
          </section>
        </div>

        {/* Social Media */}
        <nav
          className="footer-socials m-2 p-4 flex flex-wrap items-center justify-center !gap-2 !border-t !border-solid !border-white/16 !pt-2 !pb-2"
          aria-label="Social media"
        >
          <p className="!m-0 text-[10px] mr-5 !leading-[1.3] text-[#bfc7d4] max-[640px]:text-left">
            Orchiddigital operates in full regulatory compliance as a licensed
            money lending company and SCUML-certified.
          </p>

          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target="_blank"
              rel="noreferrer"
              className={`footer-social-link m-0 inline-flex items-center justify-center transition-all duration-250 hover:opacity-70 hover:scale-110 social-${item.icon
                .split("/")
                .pop()
                ?.replace(".svg", "")}`}
            >
              <span className="footer-social-icon grid size-4 flex-none place-items-center rounded-full">
                <span
                  className="block size-3 bg-current"
                  style={{
                    maskImage: `url(${item.icon})`,
                    WebkitMaskImage: `url(${item.icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer-copyright mt-1 !border-t !border-solid !border-white/16 !px-0 !py-1.5 text-center text-[10px] !leading-[1.3] text-[#bfc7d4] max-[640px]:text-left">
          © {new Date().getFullYear()} Orchiddigital Consulting Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
