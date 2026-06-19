import React from "react";
import SectionTitle from "../common/SectionTitle";

interface ProjectHighlightsProps {
  items: string[];
}

const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ items }) => {
  const featuredItems = items.slice(0, 4);
  const supportingItems = items.slice(4);

  return (
    <section className="section-shell ph-section">
      <SectionTitle eyebrow="Project USP's" title="Project Highlights" align="left" />
      <div className="ph-feature-grid">
        {featuredItems.map((item, index) => (
          <article key={item} className="ph-feature">
            <span className="ph-num">{String(index + 1).padStart(2, "0")}</span>
            <p className="ph-text">{item}</p>
          </article>
        ))}
      </div>
      <div className="ph-pill-cloud">
        {supportingItems.map((item, index) => (
          <span key={item} className="ph-pill">
            <span>{String(index + featuredItems.length + 1).padStart(2, "0")}</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProjectHighlights;
