import React from "react";
import { OverviewItem } from "../../types";
import SectionTitle from "../common/SectionTitle";

interface OverviewTableProps {
  items: OverviewItem[];
}

const OverviewTable: React.FC<OverviewTableProps> = ({ items }) => {
  return (
    <section className="section-shell two-column" id="overview">
      <SectionTitle eyebrow="Project Overview" title="A Rare Hilltop Land Holding" />
      <div className="overview-table">
        {items.map(([label, value]) => (
          <div key={label} className="overview-row">
            <span className="heading-sans">{label}</span>
            <strong className="heading-serif">{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewTable;
