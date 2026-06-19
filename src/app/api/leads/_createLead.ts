import { connectDb } from "@/lib/db";
import { normalizeLeadPayload } from "@/lib/leadValidation";
import Lead from "@/models/Lead";
import type { LeadFormType } from "@/types/crm";

const successMessages: Record<LeadFormType, string> = {
  brochure: "Brochure request received.",
  enquiry: "Enquiry submitted successfully.",
  "site-visit": "Site visit request received.",
  "priority-booking": "Priority booking request received."
};

export async function createLead(request: Request, formType: LeadFormType) {
  try {
    const body = await request.json();
    const { payload, error } = normalizeLeadPayload(body, formType);

    if (error) {
      return Response.json({ success: false, message: error }, { status: 400 });
    }

    await connectDb();
    await Lead.create(payload);

    return Response.json({
      success: true,
      message: successMessages[formType]
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Unable to save lead right now."
      },
      { status: 500 }
    );
  }
}
