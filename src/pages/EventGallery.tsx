import { useMemo, useState } from "react";
import { Film } from "lucide-react";
import { Container, Section } from "../components/SectionLayout";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "../data/gallery";

export default function EventGallery() {
  const [activeCategory, setActiveCategory] = useState<"All" | GalleryCategory>(
    "All",
  );
  const [brokenMedia, setBrokenMedia] = useState<Set<string>>(() => new Set());
  const markMediaBroken = (src: string) =>
    setBrokenMedia((current) => {
      if (current.has(src)) return current;
      const next = new Set(current);
      next.add(src);
      return next;
    });
  const visibleItems = useMemo(
    () =>
      galleryItems
        .filter((item) => !brokenMedia.has(item.src))
        .filter(
          (item) =>
            activeCategory === "All" ||
            item.category === activeCategory,
        ),
    [activeCategory, brokenMedia],
  );

  return (
    <Section className="event-gallery-page">
      <Container>
        <header className="gallery-heading">
          <h1>Event Gallery</h1>
          <p>Conversations, collaborations and milestones from our work.</p>
        </header>
        <div className="gallery-toolbar">
          <div
            className="gallery-filters"
            role="group"
            aria-label="Filter gallery by category"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p aria-live="polite">
            {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"}
          </p>
        </div>
        <div className="event-gallery-grid">
          {visibleItems.map((item, index) => (
            <figure key={item.src}>
              <div className="gallery-media">
                {item.type === "video" ? (
                  <video
                    controls
                    preload="metadata"
                    poster={item.poster}
                    aria-label={item.alt}
                    onError={() => markMediaBroken(item.src)}
                  >
                    <source
                      src={item.src}
                      type="video/mp4"
                      onError={() => markMediaBroken(item.src)}
                    />
                    Your browser does not support embedded video.
                  </video>
                ) : (
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${item.title.toLowerCase()} image in a new tab`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading={index < 6 ? "eager" : "lazy"}
                      decoding="async"
                      onError={() => markMediaBroken(item.src)}
                    />
                  </a>
                )}
                {item.type === "video" && (
                  <span className="gallery-video-label">
                    <Film size={15} aria-hidden="true" /> Video
                  </span>
                )}
              </div>
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
