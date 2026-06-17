import React from "react";
import SectionTitle from "../common/SectionTitle";

interface WhoShouldBuyProps {
  items: string[];
}

const WhoShouldBuy: React.FC<WhoShouldBuyProps> = ({ items }) => {
  return (
    <section className="buyer-section">
      <SectionTitle title="Who Should Buy?" align="center" />
      <div className="buyer-grid">
        {items.map((item) => (
          <span key={item} className="buyer-tag heading-sans">{item}</span>
        ))}
      </div>
    </section>
  );
};

export default WhoShouldBuy;
