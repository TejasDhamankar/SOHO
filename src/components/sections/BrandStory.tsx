import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";

const BrandStory: React.FC = () => {
  return (
    <section className="split-section brand-story">
      <MediaBlock
        src="/creatives/brand-story-luxury-farm.jpg"
        alt="Luxury farm lifestyle"
      />
      <div className="content-side">
        <SectionTitle eyebrow="Why The Soho Farms?" title="Where Luxury Meets Nature" />
        <p>
          Soho represents sophistication, exclusivity and premium living. Farm
          represents freedom, fresh air, nature and true ownership.
        </p>
        <p>
          Together, The Soho Farms creates a destination where investment meets a
          pollution-free nature retreat lifestyle.
        </p>
        <strong className="heading-serif emphasis-text">Above The Ordinary.</strong>
      </div>
    </section>
  );
};

export default BrandStory;
