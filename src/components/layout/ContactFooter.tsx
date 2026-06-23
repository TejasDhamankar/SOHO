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
          <p>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
          </p>
          <p>
            <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}>{contact.whatsapp}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
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
