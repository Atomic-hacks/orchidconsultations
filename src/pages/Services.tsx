import { useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Container, Section, SectionHeader } from "../components/SectionLayout";
import { images } from "../data/images";
import { services, serviceGroups } from "../data/services";
import { serviceMedia } from "../data/serviceMedia";

export default function Services() {
  const [query, setQuery] = useState("");
  const filtered = services.filter((service) =>
    `${service.title} ${service.intro} ${service.capabilities.map((item) => item.text).join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        eyebrow="01 / Services"
        title="Explore our service offerings."
        intro="Discover how we can help your business thrive with our comprehensive solutions."
        image={images.pageHeaders.services}
      />

      <Section className="services-catalog-v2">
        <Container>
          <div className="catalog-toolbar">
            <p>{String(filtered.length).padStart(2, "0")} services</p>
            <div className="search-field">
              <Search size={18} />
              <input
                aria-label="Search services"
                placeholder="Search services"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button aria-label="Clear search" onClick={() => setQuery("")}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {serviceGroups.map((group) => {
            const items = filtered.filter((service) =>
              (group.slugs as readonly string[]).includes(service.slug),
            );
            if (!items.length) return null;
            return (
              <section className="catalog-group-v2" key={group.title}>
                <SectionHeader title={group.title} />
                <div className="service-media-list">
                  {items.map((service, itemIndex) => {
                    const media = serviceMedia[service.slug];
                    return (
                      <article
                        className={`service-media-row${itemIndex % 2 ? " is-reversed" : ""}`}
                        key={service.slug}
                      >
                        <div
                          className={`service-media-collage media-count-${media.length}`}
                        >
                          {media.map((asset, mediaIndex) => (
                            <img
                              key={asset.src}
                              src={asset.src}
                              alt={asset.alt}
                              loading="lazy"
                              decoding="async"
                              className={mediaIndex === 0 ? "is-primary" : ""}
                            />
                          ))}
                        </div>
                        <div className="service-media-copy">
                          <span>{service.number}</span>
                          <h3>{service.title}</h3>
                          <p>{service.intro}</p>
                          <Link to={`/services/${service.slug}`}>
                            Explore service{" "}
                            <ArrowUpRight size={18} aria-hidden="true" />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
          {!filtered.length && (
            <div className="empty-state">
              <h2>No results found</h2>
              <p>
                Try adjusting your search terms or browse different categories.
              </p>
              <button className="text-button" onClick={() => setQuery("")}>
                Clear search
              </button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
