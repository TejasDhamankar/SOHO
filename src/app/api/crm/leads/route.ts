import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDb } from "@/lib/db";
import { isLeadFormType, isLeadStage } from "@/lib/leadValidation";
import Lead from "@/models/Lead";
import type { CrmLead } from "@/types/crm";

function serializeLead(lead: Record<string, any>): CrmLead {
  return {
    _id: String(lead._id),
    name: lead.name,
    mobile: lead.mobile,
    email: lead.email,
    city: lead.city,
    budget: lead.budget,
    message: lead.message,
    preferredDate: lead.preferredDate,
    visitors: lead.visitors,
    visitType: lead.visitType,
    bookingAmount: lead.bookingAmount,
    plotSize: lead.plotSize,
    formType: lead.formType,
    stage: lead.stage,
    createdAt: new Date(lead.createdAt).toISOString(),
    updatedAt: new Date(lead.updatedAt).toISOString()
  };
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const stage = url.searchParams.get("stage");
  const formType = url.searchParams.get("formType");
  const query: Record<string, string> = {};

  if (isLeadStage(stage)) {
    query.stage = stage;
  }

  if (isLeadFormType(formType)) {
    query.formType = formType;
  }

  await connectDb();

  const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();

  return Response.json({
    success: true,
    leads: leads.map((lead) => serializeLead(lead as Record<string, any>))
  });
}
