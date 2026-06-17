import React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  align = "left",
  className = ""
}) => {
  return (
    <div className={`section-title ${align === "center" ? "center" : ""} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-serif">{title}</h2>
    </div>
  );
};

export default SectionTitle;
