import React from "react";

interface MediaBlockProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

const MediaBlock: React.FC<MediaBlockProps> = ({
  src,
  alt,
  className = "",
  overlay = true
}) => {
  return (
    <div
      className={`media-block ${className} ${overlay ? "has-overlay" : ""}`}
      role="img"
      aria-label={alt}
      style={{
        backgroundImage: `url("${src}")`
      }}
    />
  );
};

export default MediaBlock;
