import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";
import { Pair } from "../../types";

interface ImageCarouselProps {
  title: string;
  items: Pair[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ title, items }) => {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Around The Region" title={title} />
      <div className="card-carousel">
        {items.map(([name, src]) => (
          <article key={name} className="carousel-card">
            <MediaBlock src={src} alt={name} className="card-media" />
            <h3 className="heading-sans card-title">{name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
