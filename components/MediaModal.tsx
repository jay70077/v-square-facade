"use client";

import { useState } from "react";
import "./MediaModal.css";

export default function MediaModal({ project, onClose }: any) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  if (!project) return null;

  const current = project.media[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % project.media.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content glass ${fullscreen ? "fullscreen" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <span className="close-btn" onClick={onClose}>✕</span>

        {/* Fullscreen toggle */}
        <span
          className="fullscreen-btn"
          onClick={() => setFullscreen(!fullscreen)}
        >
          ⛶
        </span>

        {/* Media */}
        {current.type === "image" ? (
          <img src={current.src} />
        ) : (
          <video src={current.src} controls autoPlay />
        )}

        {/* Controls */}
        <button className="nav-btn left" onClick={prev}>‹</button>
        <button className="nav-btn right" onClick={next}>›</button>
      </div>
    </div>
  );
}