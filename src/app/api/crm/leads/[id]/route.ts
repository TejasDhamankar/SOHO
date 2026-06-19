import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDb } from "@/lib/db";
import { isLeadStage } from "@/lib/leadValidation";
import Lead from "@/models/Lead";

interface LeadRouteContext {
  params: Promise<{
    id: string;
  }>;
}

async function requireSession() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  return null;
}

export async function PATCH(request: Request, { params }: LeadRouteContext) {
  const unauthorized = await requireSession();

  if (unauthorized) {
    return unauthorized;
  }

  const body = await request.json();

  if (!isLeadStage(body.stage)) {
    return Response.json({ success: false, message: "Invalid stage" }, { status: 400 });
  }

  const { id } = await params;

  await connectDb();

  const lead = await Lead.findByIdAndUpdate(id, { stage: body.stage }, { new: true });

  if (!lead) {
    return Response.json({ success: false, message: "Lead not found" }, { status: 404 });
  }

  return Response.json({ success: true, message: "Lead updated." });
}

export async function DELETE(_request: Request, { params }: LeadRouteContext) {
  const unauthorized = await requireSession();

  if (unauthorized) {
    return unauthorized;
  }

  const { id } = await params;

  await connectDb();

  const lead = await Lead.findByIdAndDelete(id);

  if (!lead) {
    return Response.json({ success: false, message: "Lead not found" }, { status: 404 });
  }

  return Response.json({ success: true, message: "Lead deleted." });
}
