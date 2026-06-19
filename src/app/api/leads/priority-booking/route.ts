import { createLead } from "../_createLead";

export async function POST(request: Request) {
  return createLead(request, "priority-booking");
}
