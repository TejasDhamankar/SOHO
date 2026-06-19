"use client";

import type { LeadFormType, LeadStage } from "@/types/crm";

export type FormTypeFilter = "all" | LeadFormType;
export type StageFilter = "all" | LeadStage;

interface FilterBarProps {
  formType: FormTypeFilter;
  stage: StageFilter;
  onFormTypeChange: (value: FormTypeFilter) => void;
  onStageChange: (value: StageFilter) => void;
}

export default function FilterBar({ formType, stage, onFormTypeChange, onStageChange }: FilterBarProps) {
  return (
    <div className="crm-filter-bar">
      <label>
        <span>Form Type</span>
        <select value={formType} onChange={(event) => onFormTypeChange(event.target.value as FormTypeFilter)}>
          <option value="all">All</option>
          <option value="brochure">Brochure</option>
          <option value="enquiry">Enquiry</option>
          <option value="site-visit">Site Visit</option>
          <option value="priority-booking">Priority Booking</option>
        </select>
      </label>
      <label>
        <span>Stage</span>
        <select value={stage} onChange={(event) => onStageChange(event.target.value as StageFilter)}>
          <option value="all">All</option>
          <option value="contacted">Contacted</option>
          <option value="pipeline">Pipeline</option>
          <option value="closed">Closed</option>
        </select>
      </label>
    </div>
  );
}
