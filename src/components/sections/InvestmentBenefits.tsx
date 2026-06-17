import React from "react";
import SectionTitle from "../common/SectionTitle";

interface InvestmentBenefitsProps {
  items: string[];
}

const InvestmentBenefits: React.FC<InvestmentBenefitsProps> = ({ items }) => {
  return (
    <section className="section-shell" id="investment">
      <SectionTitle eyebrow="Investment Edge" title="Why Invest In This Green Growth Belt?" />
      <div className="benefit-grid">
        {items.map((item) => (
          <article key={item} className="benefit-card">
            <span className="gold-bar" />
            <h3 className="heading-sans">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InvestmentBenefits;
