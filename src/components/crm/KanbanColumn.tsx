"use client";

import { Draggable, Droppable } from "@hello-pangea/dnd";
import LeadCard from "./LeadCard";
import type { CrmLead, LeadStage } from "@/types/crm";

interface KanbanColumnProps {
  id: LeadStage;
  title: string;
  leads: CrmLead[];
  onStageChange: (leadId: string, stage: LeadStage) => void;
  onDelete: (leadId: string) => void;
}

export default function KanbanColumn({ id, title, leads, onStageChange, onDelete }: KanbanColumnProps) {
  return (
    <div className="kanban-column">
      <header>
        <h2>{title}</h2>
        <span>{leads.length}</span>
      </header>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className={`kanban-dropzone${snapshot.isDraggingOver ? " active" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {leads.map((lead, index) => (
              <Draggable draggableId={lead._id} index={index} key={lead._id}>
                {(dragProvided) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                  >
                    <LeadCard lead={lead} onStageChange={onStageChange} onDelete={onDelete} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
