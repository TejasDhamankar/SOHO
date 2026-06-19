"use client";

interface StatsBarProps {
  total: number;
  contacted: number;
  pipeline: number;
  closed: number;
}

export default function StatsBar({ total, contacted, pipeline, closed }: StatsBarProps) {
  const stats = [
    ["Total Leads", total],
    ["Contacted", contacted],
    ["Pipeline", pipeline],
    ["Closed", closed]
  ];

  return (
    <div className="crm-stats-bar">
      {stats.map(([label, value]) => (
        <article className="crm-stat-card" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </article>
      ))}
    </div>
  );
}
