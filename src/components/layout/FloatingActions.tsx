import React from "react";
import { contact } from "../../data/content";

const FloatingActions: React.FC = () => {
  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="action-btn call-btn">Call</a>
      <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} className="action-btn wa-btn">WhatsApp</a>
      <a href="#forms" className="action-btn visit-btn">Visit</a>
    </div>
  );
};

export default FloatingActions;
