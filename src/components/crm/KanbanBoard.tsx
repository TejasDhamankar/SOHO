"use client";

import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import FilterBar, { type FormTypeFilter, type StageFilter } from "./FilterBar";
import KanbanColumn from "./KanbanColumn";
import StatsBar from "./StatsBar";
import type { CrmLead, LeadStage } from "@/types/crm";

const columns: { id: LeadStage; title: string }[] = [
  { id: "contacted", title: "Contacted" },
  { id: "pipeline", title: "Pipeline" },
  { id: "closed", title: "Closed" }
];

export default function KanbanBoard() {
  const [leads, setLeads] = useState<CrmLead[]>([]);
  const [formTypeFilter, setFormTypeFilter] = useState<FormTypeFilter>("all");
  const [stageFilter, setStageFilter] = useState<StageFilter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLeads() {
      try {
        const response = await fetch("/api/crm/leads", { cache: "no-store" });
        const result = (await response.json()) as { success?: boolean; leads?: CrmLead[]; message?: string };

        if (!response.ok || !result.success || !result.leads) {
          throw new Error(result.message || "Unable to load leads.");
        }

        setLeads(result.leads);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Unable to load leads.");
      } finally {
        setLoading(false);
      }
    }

    loadLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const formTypeMatches = formTypeFilter === "all" || lead.formType === formTypeFilter;
      const stageMatches = stageFilter === "all" || lead.stage === stageFilter;

      return formTypeMatches && stageMatches;
    });
  }, [formTypeFilter, leads, stageFilter]);

  const stats = useMemo(() => {
    return {
      total: leads.length,
      contacted: leads.filter((lead) => lead.stage === "contacted").length,
      pipeline: leads.filter((lead) => lead.stage === "pipeline").length,
      closed: leads.filter((lead) => lead.stage === "closed").length
    };
  }, [leads]);

  const updateStage = async (leadId: string, stage: LeadStage) => {
    const previous = leads;
    setLeads((current) => current.map((lead) => (lead._id === leadId ? { ...lead, stage } : lead)));

    const response = await fetch(`/api/crm/leads/${leadId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ stage })
    });

    if (!response.ok) {
      setLeads(previous);
      setError("Unable to update lead stage.");
    }
  };

  const deleteLead = async (leadId: string) => {
    const previous = leads;
    setLeads((current) => current.filter((lead) => lead._id !== leadId));

    const response = await fetch(`/api/crm/leads/${leadId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      setLeads(previous);
      setError("Unable to delete lead.");
    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || result.destination.droppableId === result.source.droppableId) {
      return;
    }

    updateStage(result.draggableId, result.destination.droppableId as LeadStage);
  };

  return (
    <main className="crm-page">
      <nav className="crm-navbar">
        <Image src="/logo_shoho.png" alt="The Soho Farms Logo" width={150} height={50} priority />
        <h1>Soho Farms CRM</h1>
        <button type="button" onClick={() => signOut({ callbackUrl: "/admin/login" })}>
          Logout
        </button>
      </nav>
      <StatsBar {...stats} />
      <FilterBar
        formType={formTypeFilter}
        stage={stageFilter}
        onFormTypeChange={setFormTypeFilter}
        onStageChange={setStageFilter}
      />
      {error ? <p className="crm-error">{error}</p> : null}
      {loading ? (
        <p className="crm-loading">Loading leads...</p>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="kanban-board">
            {columns.map((column) => (
              <KanbanColumn
                id={column.id}
                title={column.title}
                leads={filteredLeads.filter((lead) => lead.stage === column.id)}
                onStageChange={updateStage}
                onDelete={deleteLead}
                key={column.id}
              />
            ))}
          </div>
        </DragDropContext>
      )}
    </main>
  );
}
