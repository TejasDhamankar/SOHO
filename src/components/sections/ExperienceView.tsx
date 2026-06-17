import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";

const ExperienceView: React.FC = () => {
  return (
    <section className="view-section">
      <MediaBlock
        src="/creatives/experience-panoramic-view.jpg"
        alt="Panoramic mountain view"
        className="wide-media"
      />
      <div className="view-copy">
        <div className="title-overlay">
           <SectionTitle title="Every Plot Comes With A View" align="center" />
        </div>
        <p>
          Experience breathtaking sunrises, panoramic mountain landscapes, cool
          hilltop breeze, natural privacy, high-oxygen fresh air and the
          complete 100-acre development from the ground as well as from the sky.
        </p>
        <a className="btn-primary" href="#forms">
          Schedule Site Visit
        </a>
      </div>
    </section>
  );
};

export default ExperienceView;
