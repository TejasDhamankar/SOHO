import type { LeadFormType, LeadStage } from "@/types/crm";

export const leadFormTypes: LeadFormType[] = [
  "brochure",
  "enquiry",
  "site-visit",
  "priority-booking"
];

export const leadStages: LeadStage[] = ["contacted", "pipeline", "closed"];

export interface LeadPayload {
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
}

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function normalizeLeadPayload(input: unknown, formType: LeadFormType) {
  const data = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {};
  const visitors = Number(cleanString(data.visitors));

  const payload: LeadPayload = {
    name: cleanString(data.name),
    mobile: cleanString(data.mobile),
    email: cleanString(data.email) || undefined,
    city: cleanString(data.city) || undefined,
    budget: cleanString(data.budget) || undefined,
    message: cleanString(data.message) || undefined,
    preferredDate: cleanString(data.preferredDate) || undefined,
    visitors: Number.isFinite(visitors) && visitors > 0 ? visitors : undefined,
    visitType: cleanString(data.visitType) || undefined,
    bookingAmount: cleanString(data.bookingAmount) || undefined,
    plotSize: cleanString(data.plotSize) || undefined,
    formType
  };

  const missing = [];

  if (!payload.name) {
    missing.push("name");
  }

  if (!payload.mobile) {
    missing.push("mobile");
  }

  return {
    payload,
    error: missing.length ? `Missing required field${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}` : null
  };
}

export function isLeadStage(value: unknown): value is LeadStage {
  return typeof value === "string" && leadStages.includes(value as LeadStage);
}

export function isLeadFormType(value: unknown): value is LeadFormType {
  return typeof value === "string" && leadFormTypes.includes(value as LeadFormType);
}
