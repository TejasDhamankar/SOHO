export type LeadFormType = "brochure" | "enquiry" | "site-visit" | "priority-booking";

export type LeadStage = "contacted" | "pipeline" | "closed";

export interface CrmLead {
  _id: string;
  name: string;
  mobile: string;
  email?: string;
  city?: string;
  budget?: string;
  message?: string;
  preferredDate?: string;
  visitors?: number;
  visitType?: string;
  bookingAmount?: string;
  plotSize?: string;
  formType: LeadFormType;
  stage: LeadStage;
  createdAt: string;
  updatedAt: string;
}
