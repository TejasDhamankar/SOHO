import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";

const MasterPlan: React.FC = () => {
  return (
    <section className="master-plan split-section">
      <div className="content-side">
        <SectionTitle eyebrow="Planning" title="Master Plan & Layout" />
        <p>
          Review plotted land parcels, internal movement, green buffers,
          recreation spaces and access routes planned for this 100-acre nature
          retreat development.
        </p>
        <div className="button-row">
          <a href="/creatives/master-plan.jpg" download className="btn-primary">
            Download Master Plan
          </a>
          <a href="/creatives/layout-plan.jpg" target="_blank" className="btn-outline">
            View Layout
          </a>
        </div>
      </div>
      <MediaBlock src="/creatives/master-plan.jpg" alt="Master plan" />
    </section>
  );
};

export default MasterPlan;
