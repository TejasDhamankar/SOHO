import React from "react";
import { ProjectStat } from "../../types";

interface HeroProps {
  stats: ProjectStat[];
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  return (
    <section className="hero" id="top">
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        src="/creatives/hero-drone-roha-valley.mp4"
      />
      <div className="hero-gradient-overlay" />
      <div className="hero-content">
        <p className="badge">Exclusive Helicopter Site Visit Available</p>
        <h1 className="heading-serif main-title">THE SOHO FARMS</h1>
        <h2 className="heading-serif sub-title">Own The View. Own The Legacy.</h2>
        <p className="hero-description">
          100 Acre Premium Gated Community Agricultural Land in the Roha -
          Alibaug Region, Raigad. A hill-station inspired green retreat with
          jungle views, fresh air, open spaces and beach access nearby.
        </p>
        <div className="hero-actions">
          <a href="#forms" className="btn-primary">Book Site Visit</a>
          <a href="#helicopter" className="btn-outline">Book Helicopter Site Visit</a>
          <a href="#brochure" className="btn-outline">Download Brochure</a>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong className="heading-serif">{stat.value}</strong>
              <span className="heading-sans">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
