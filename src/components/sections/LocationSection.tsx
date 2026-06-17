import React from "react";
import SectionTitle from "../common/SectionTitle";
import { contact } from "../../data/content";

interface LocationSectionProps {
  advantages: string[];
}

const LocationSection: React.FC<LocationSectionProps> = ({ advantages }) => {
  return (
    <section className="location-section split-section">
      <div className="map-side">
        <SectionTitle eyebrow="Project Location" title="Roha - Alibaug Region" />
        <div className="map-frame">
          <iframe
            title="The Soho Farms map"
            src="https://maps.google.com/maps?q=18.4059715,73.1227036&z=15&output=embed"
            loading="lazy"
          />
        </div>
        <div className="button-row">
          <a href={contact.maps} target="_blank" rel="noreferrer" className="btn-primary">
            Get Location
          </a>
          <a href={contact.maps} target="_blank" rel="noreferrer" className="btn-outline">
            Open In Google Maps
          </a>
        </div>
      </div>
      <div className="advantages-side">
        <SectionTitle title="Why Roha Is Becoming Preferred" />
        <ul className="check-list">
          {advantages.map((item) => (
            <li key={item} className="heading-sans">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LocationSection;
