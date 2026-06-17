import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";

const WelcomeSection: React.FC = () => {
  return (
    <section className="split-section">
      <div className="content-side">
        <SectionTitle eyebrow="Welcome" title="Welcome To The Soho Farms" />
        <p>
          A rare opportunity to own premium hilltop agricultural land amidst the
          breathtaking Sahyadri mountain ranges, dense greenery and open skies.
        </p>
        <p>
          Spread across 100 acres, The Soho Farms brings together nature,
          infrastructure, recreation and long-term investment potential. More
          than land ownership, it is an opportunity to own a peaceful weekend
          destination that feels close to Mahabaleshwar, Lonavala and the
          Alibaug coastal belt.
        </p>
        <a className="gold-link" href="#overview">
          Explore Project
        </a>
      </div>
      <MediaBlock src="/creatives/welcome-hilltop.jpg" alt="Premium hilltop land" />
    </section>
  );
};

export default WelcomeSection;
