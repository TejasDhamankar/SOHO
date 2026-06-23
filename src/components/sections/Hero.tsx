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
        <h1 className="heading-serif main-title">THE SOHO FARMS</h1>
        <div className="hero-actions">
          <a href="#forms" className="btn-primary">Book Site Visit</a>
          <a href="#helicopter" className="btn-outline">Book Helicopter Site Visit</a>
          <a href="#brochure" className="btn-outline">Download Brochure</a>
        </div>
      </div>
      <a href="#overview" className="hero-scroll-down" aria-label="Scroll down to overview">
        <span>Scroll Down</span>
        <span className="hero-scroll-mouse" aria-hidden="true">
          <span className="hero-scroll-dot" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
