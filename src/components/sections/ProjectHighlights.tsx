import React from "react";
import SectionTitle from "../common/SectionTitle";

interface ProjectHighlightsProps {
  items: string[];
}

const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ items }) => {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Project USP's" title="Project Highlights" align="center" />
      <div className="icon-grid">
        {items.map((item, index) => (
          <article key={item} className="highlight-card">
            <span className="heading-serif index-number">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="heading-sans">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectHighlights;
