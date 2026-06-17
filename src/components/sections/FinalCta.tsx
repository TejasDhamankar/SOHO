import React from "react";
import SectionTitle from "../common/SectionTitle";
import { contact } from "../../data/content";

interface FinalCtaProps {
  items: string[];
}

const FinalCta: React.FC<FinalCtaProps> = ({ items }) => {
  return (
    <section className="final-cta">
      <SectionTitle title="THE SOHO FARMS" align="center" />
      <h3 className="heading-serif sub-cta">Above The Ordinary. Own Fresh Air, Open Views And A Green Legacy.</h3>
      <div className="final-list">
        {items.map((item) => (
          <span key={item} className="usp-tag heading-sans">{item}</span>
        ))}
      </div>
      <div className="hero-actions centered">
        <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="btn-primary">Call Now</a>
        <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} className="btn-outline">WhatsApp Now</a>
        <a href="#forms" className="btn-outline">Book Site Visit</a>
        <a href="#helicopter" className="btn-outline">Book Helicopter Site Visit</a>
        <a href="#brochure" className="btn-outline">Download Brochure</a>
      </div>
    </section>
  );
};

export default FinalCta;
