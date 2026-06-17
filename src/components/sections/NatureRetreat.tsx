import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";

interface NatureRetreatProps {
  items: string[];
}

const NatureRetreat: React.FC<NatureRetreatProps> = ({ items }) => {
  return (
    <section className="retreat-section">
      <div className="content-side">
        <p className="badge">Now We Are Entering Roha</p>
        <SectionTitle title="Why Roha?" />
        <p>
          A destination where nature still feels untouched. Roha gives you the
          feeling of Mahabaleshwar and Lonavala, but with larger open spaces,
          lower population density and a more peaceful lifestyle.
        </p>
        <p>
          Wake up to birdsong instead of traffic. Breathe fresh air instead of
          pollution. Enjoy endless greenery instead of concrete buildings. Roha
          is not just a location. It is a lifestyle upgrade.
        </p>
        <ul className="check-list retreat-list">
          {items.map((item) => (
            <li key={item} className="heading-sans">{item}</li>
          ))}
        </ul>
        <blockquote className="heading-serif">
          When the city becomes too loud, Roha brings you back to nature.
        </blockquote>
        <a className="gold-link" href="#forms">
          Book Site Visit
        </a>
      </div>
      <div className="retreat-gallery" aria-label="Nature retreat visuals">
        <MediaBlock src="/creatives/experience-panoramic-view.jpg" alt="Green valley landscape" />
        <MediaBlock src="/creatives/welcome-hilltop.jpg" alt="Open hilltop landscape" />
        <MediaBlock src="/creatives/nearby-sahyadri-valleys.jpg" alt="Sahyadri forest valleys" />
      </div>
    </section>
  );
};

export default NatureRetreat;
