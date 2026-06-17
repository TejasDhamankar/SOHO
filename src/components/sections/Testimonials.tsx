import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Testimonial } from "../../types";

interface TestimonialsProps {
  items: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ items }) => {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Customer Reviews" title="Actual Visitor Experiences" />
      <div className="testimonial-grid">
        {items.map((item, index) => (
          <article key={index} className="testimonial-card">
            <strong className="stars">★★★★★</strong>
            <p className="quote">{item.quote}</p>
            <span className="source heading-sans">{item.source}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
