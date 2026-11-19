import { BrandLogo } from "./BrandLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, socialLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="footer footer-simple w-full !bg-[var(--ink)] text-[#f5f7fa]">
      <div className="wrap">
        <div className="footer-primary grid grid-cols-4 items-start gap-[55px] py-[55px] pb-[45px] max-[1024px]:grid-cols-2 max-[1024px]:gap-[40px] max-[1024px]:py-[45px] max-[1024px]:pb-[35px] max-[600px]:grid-cols-1 max-[600px]:gap-[32px] max-[600px]:py-[40px] max-[600px]:pb-[30px] max-[360px]:gap-[28px]">
          {/* Company Profile */}
          <section
            className="footer-profile !gap-3 flex min-w-0 flex-col items-start"
            aria-label="About Orchiddigital Consulting"
          >
            <Link
              className="wordmark footer-brand !mb-0 inline-flex w-fit items-center"
              to="/"
              aria-label="Orchiddigital Consulting home"
            >
              <BrandLogo className="!w-[150px]" />
            </Link>

            <p className="m-0 max-w-[310px] text-[16px] leading-[1.75] text-[#d2d8e3] max-[1024px]:max-w-[350px] max-[600px]:max-w-full">
              A fast-growing integrated financial and consulting services
              company delivering practical solutions that help businesses build,
              grow, and create lasting value.
            </p>
          </section>

          {/* Quick Links */}
          <section className="min-w-0" aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="mb-[18px] text-[24px] leading-[1.3] font-semibold tracking-[-0.02em] text-[#b9d79b] max-[600px]:mb-[14px]"
            >
              Quick Links
            </h2>

            <nav
              className="footer-nav-list flex flex-col items-start gap-[10px] max-[600px]:gap-3"
              aria-label="Quick links"
            >
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/services"
              >
                Our Services
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/investment-calculator"
              >
                Investment Calculator
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/team"
              >
                Our Team
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/event-gallery"
              >
                Event Gallery
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/contact"
              >
                Contact Us
              </Link>
            </nav>
          </section>

          {/* Legal & Policies */}
          <section className="min-w-0" aria-labelledby="footer-policies">
            <h2
              id="footer-policies"
              className="mb-[18px] text-[24px] leading-[1.3] font-semibold tracking-[-0.02em] text-[#b9d79b] max-[600px]:mb-[14px]"
            >
              Legal &amp; Policies
            </h2>

            <nav
              className="footer-nav-list flex flex-col items-start gap-[10px] max-[600px]:gap-3"
              aria-label="Legal and policies"
            >
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/terms"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/whistleblowing"
              >
                Whistleblowing Policy
              </Link>
              <Link
                className="text-[16px] leading-[1.45] no-underline transition-opacity duration-250 hover:opacity-70"
                to="/feedback"
              >
                Feedback &amp; Complaints
              </Link>
            </nav>
          </section>

          {/* Contact Information */}
          <section
            className="footer-contact-group min-w-0"
            aria-labelledby="footer-contact"
          >
            <h2
              id="footer-contact"
              className="mb-[18px] text-[24px] leading-[1.3] font-semibold tracking-[-0.02em] text-[#b9d79b] max-[600px]:mb-[14px]"
            >
              Contact Us
            </h2>

            <div className="footer-contact-details flex flex-col gap-[15px] max-[600px]:gap-4">
              <a
                className="flex min-w-0 items-start gap-3 text-[16px] leading-[1.5] no-underline"
                href={contact.maps}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin
                  className="mt-0.5 shrink-0 text-[#b9d79b]"
                  size={20}
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere">{contact.address}</span>
              </a>

              <a
                className="flex min-w-0 items-start gap-3 text-[16px] leading-[1.5] no-underline"
                href={`tel:${contact.tel}`}
              >
                <Phone
                  className="mt-0.5 shrink-0 text-[#b9d79b]"
                  size={20}
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere">{contact.phone}</span>
              </a>

              <a
                className="flex min-w-0 items-start gap-3 text-[16px] leading-[1.5] no-underline"
                href={`mailto:${contact.email}`}
              >
                <Mail
                  className="mt-0.5 shrink-0 text-[#b9d79b]"
                  size={20}
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere">{contact.email}</span>
              </a>
            </div>

            <nav
              className="footer-socials mt-[22px] flex flex-wrap items-center gap-3 max-[600px]:mt-5"
              aria-label="Social media"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className={`footer-social-link inline-flex items-center justify-center social-${item.icon
                    .split("/")
                    .pop()
                    ?.replace(".svg", "")}`}
                >
                  <span className="footer-social-icon grid size-11 flex-none place-items-center rounded-full">
                    <span
                      className="block size-5 bg-current"
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
          </section>
        </div>

        {/* Regulatory Information */}
        <div className="footer-regulatory flex items-center justify-center border-y border-solid border-white/16 px-0 py-[22px] max-[600px]:py-5">
          <p className="m-0 max-w-[92ch] text-center text-[14px] leading-[1.7] text-[#bfc7d4] max-[640px]:text-left">
            Orchiddigital Consulting Limited is licensed by the Securities and
            Exchange Commission (SEC), Nigeria, as a Fund and Portfolio Manager.
            It also operates as a licensed money lending company and is
            SCUML-certified.
          </p>
        </div>

        {/* Copyright */}
        <p className="footer-copyright m-0 px-0 py-[18px] text-center text-[15px] leading-[1.6] text-[#bfc7d4] max-[640px]:py-[28px] max-[640px]:text-left max-[600px]:py-4">
          © {new Date().getFullYear()} Orchiddigital Consulting Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
