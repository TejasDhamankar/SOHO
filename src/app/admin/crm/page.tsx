import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import KanbanBoard from "@/components/crm/KanbanBoard";

export default async function CrmPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return <KanbanBoard />;
}
