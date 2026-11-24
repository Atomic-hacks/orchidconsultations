import { useState } from "react";
import { team } from "../data/team";
import { staff } from "../data/staff";
import { Heading, Reveal } from "../components/Reveal";
import { Accordion } from "../components/Accordion";
import { PageHeader } from "../components/PageHeader";
import { images } from "../data/images";

export default function Team() {
  const [activeBios, setActiveBios] = useState<Record<number, boolean>>({});

  const toggleBio = (index: number) => {
    setActiveBios((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <PageHeader
        eyebrow="01 / Our team"
        title="Meet our executive team."
        intro="Our experienced leadership team brings together decades of expertise in digital transformation, business strategy, and innovative solutions."
        image={images.pageHeaders.team}
      />

      {/* Executive Team */}
      <section className="wrap team-grid">
        {team.map((person, i) => (
          <Reveal key={person.name || i} className="team-person">
            {person.image && (
              <img
                className="team-portrait"
                src={person.image}
                alt={`Portrait of ${person.fullName}`}
                loading="lazy"
              />
            )}

            <span className="index-label">
              {String(i + 1).padStart(2, "0")} / Team
            </span>

            <h2>{person.fullName}</h2>

            <p className="team-role">{person.role}</p>

            <Accordion title="Biography">
              <p>{person.bio}</p>
            </Accordion>

            {i === 0 && (
              <a
                className="profile-read-more"
                href="/documents/david-okoh-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more <span aria-hidden="true">↗</span>
                <span className="sr-only">
                  {" "}
                  about Mr. David (PDF, opens in a new tab)
                </span>
              </a>
            )}
          </Reveal>
        ))}
      </section>

      {/* Other Staff */}
      <section className="section wrap">
        <Heading>Other Staff</Heading>

        <p className="muted measure mt-6">
          Our dedicated support team ensures smooth operations and excellent
          service delivery.
        </p>

        <div className="staff-list">
          {staff.map((person, index) => (
            <article
              key={person.name || index}
              className={person.image ? "has-portrait" : ""}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                minWidth: 0,
              }}
            >
              {person.image && (
                <img
                  src={person.image}
                  alt={`Portrait of ${person.fullName}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    height: "300px",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    marginBottom: "22px",
                    borderRadius: "4px",
                  }}
                />
              )}

              <span className="index-label" style={{ marginBottom: "10px" }}>
                {String(index + 1).padStart(2, "0")} / Staff
              </span>

              <h3>{person.fullName}</h3>

              <span>{person.role}</span>

              {person.bio && (
                <div
                  style={{
                    width: "100%",
                    marginTop: "18px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleBio(index)}
                    aria-expanded={!!activeBios[index]}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                      padding: "10px 0",
                      width: "100%",
                      maxWidth: "280px",
                      background: "transparent",
                      border: "none",
                      borderTop: "1px solid currentColor",
                      borderBottom: "1px solid currentColor",
                      color: "inherit",
                      font: "inherit",
                      fontSize: "13px",
                      fontWeight: 600,
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <span>
                      {activeBios[index]
                        ? "Close biography"
                        : "View full biography"}
                    </span>

                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: "20px",
                        transition: "transform 0.3s ease",
                        transform: activeBios[index]
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  {activeBios[index] && (
                    <div
                      style={{
                        maxWidth: "400px",
                        padding: "16px 0",
                        animation: "staffBioReveal 0.3s ease",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.8,
                          opacity: 0.8,
                          margin: 0,
                        }}
                      >
                        {person.bio}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
