import React from "react";
import { contact } from "../../data/content";

const ContactFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2 className="heading-serif">THE SOHO FARMS</h2>
          <p>Roha - Alibaug Region, Raigad</p>
          <p>Coordinates: 18.4059715, 73.1227036</p>
        </div>
        <div className="footer-contact">
          <h3 className="heading-sans">Contact</h3>
          <p>{contact.phone}</p>
          <p>{contact.whatsapp}</p>
          <p>{contact.email}</p>
        </div>
        <div className="footer-links">
          <h3 className="heading-sans">Links</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href={contact.maps}>Google Maps</a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
