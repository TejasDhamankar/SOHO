"use client";

import React, { useState } from "react";
import Image from "next/image";
import { contact } from "../../data/content";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="The Soho Farms home">
        <Image 
          src="/logo_shoho.png" 
          alt="The Soho Farms Logo" 
          width={180} 
          height={60} 
          className="logo-img"
          priority
        />
      </a>
      
      <button 
        className="mobile-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      <nav className={isMenuOpen ? "active" : ""} aria-label="Primary navigation">
        <a href="#overview" className="nav-link" onClick={closeMenu}>Overview</a>
        <a href="#amenities" className="nav-link" onClick={closeMenu}>Lifestyle</a>
        <a href="#investment" className="nav-link" onClick={closeMenu}>Investment Edge</a>
        <a href="#forms" className="nav-link" onClick={closeMenu}>Enquire</a>
      </nav>

      <a className="header-cta btn-primary" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
        Call Now
      </a>
    </header>
  );
};

export default Header;
