"use client";

import type { CrmLead, LeadStage } from "@/types/crm";

const formTypeLabels: Record<CrmLead["formType"], string> = {
  brochure: "Brochure",
  enquiry: "Enquiry",
  "site-visit": "Site Visit",
  "priority-booking": "Priority Booking"
};

interface LeadCardProps {
  lead: CrmLead;
  onStageChange: (leadId: string, stage: LeadStage) => void;
  onDelete: (leadId: string) => void;
}

export default function LeadCard({ lead, onStageChange, onDelete }: LeadCardProps) {
  const date = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short"
  }).format(new Date(lead.createdAt));

  return (
    <article className="lead-card">
      <div className="lead-card-top">
        <span className={`lead-badge ${lead.formType}`}>{formTypeLabels[lead.formType]}</span>
        <span>{date}</span>
      </div>
      <h3>{lead.name}</h3>
      <p>Phone: {lead.mobile}</p>
      {lead.email ? <p>Email: {lead.email}</p> : null}
      {lead.budget ? <p>Budget: {lead.budget}</p> : null}
      {lead.city ? <p>City: {lead.city}</p> : null}
      {lead.preferredDate ? <p>Visit Date: {lead.preferredDate}</p> : null}
      {lead.visitType ? <p>Visit Type: {lead.visitType}</p> : null}
      {lead.plotSize ? <p>Plot Size: {lead.plotSize}</p> : null}
      {lead.bookingAmount ? <p>Booking Amount: {lead.bookingAmount}</p> : null}
      <div className="lead-card-actions">
        <select value={lead.stage} onChange={(event) => onStageChange(lead._id, event.target.value as LeadStage)}>
          <option value="contacted">Contacted</option>
          <option value="pipeline">Pipeline</option>
          <option value="closed">Closed</option>
        </select>
        <button type="button" onClick={() => onDelete(lead._id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
