import React from "react";
import SectionTitle from "../common/SectionTitle";
import MediaBlock from "../common/MediaBlock";

const HelicopterExperience: React.FC = () => {
  return (
    <section className="helicopter" id="helicopter">
      <MediaBlock
        src="/creatives/helicopter-site-visit.jpg"
        alt="Helicopter site visit"
        className="wide-media"
      />
      <div className="content-side">
        <p className="badge">Exclusive Helicopter Site Visit Experience</p>
        <h2 className="heading-serif">ARRIVE ABOVE THE ORDINARY</h2>
        <p>
          Experience The Soho Farms like never before. Selected visitors can
          witness the complete 100-acre development, Sahyadri mountain ranges,
          green surroundings, fresh air and panoramic valley views from a truly
          unique perspective.
        </p>
        <ul className="check-list compact">
          <li className="heading-sans">Helicopter Site Visit Available</li>
          <li className="heading-sans">Aerial View Of Entire 100 Acres</li>
          <li className="heading-sans">VIP Premium Arrival Experience</li>
          <li className="heading-sans">Limited Availability</li>
        </ul>
        <a className="btn-primary" href="#forms">
          Book Helicopter Site Visit
        </a>
      </div>
    </section>
  );
};

export default HelicopterExperience;
