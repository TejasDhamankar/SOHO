import React from "react";
import SectionTitle from "../common/SectionTitle";

interface AmenityGridProps {
  items: string[];
}

const AmenityGrid: React.FC<AmenityGridProps> = ({ items }) => {
  return (
    <section className="section-shell" id="amenities">
      <SectionTitle
        eyebrow="Recreation Areas"
        title="Designed For Peaceful Weekend Living"
        align="center"
      />
      <div className="amenity-grid">
        {items.map((item) => (
          <div key={item} className="amenity-item heading-sans">{item}</div>
        ))}
      </div>
    </section>
  );
};

export default AmenityGrid;
