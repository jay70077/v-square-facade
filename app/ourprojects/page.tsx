"use client";

import { useState } from "react";
import MediaModal from "@/components/MediaModal";
import "../../components/Projects.css";

interface Project {
  title: string;
  status: string;
  media: { type: string; src: string; }[];
  completedDate?: string;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "Luxury Glass Villa",
      status: "ongoing",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      title: "Luxury Glass Villa",
      status: "ongoing",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      title: "Office Glass Partition",
      status: "completed",
      completedDate: "12 Jan 2026",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
        { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
      ],
    },
     {
      title: "Office Glass Partition",
      status: "completed",
      completedDate: "12 Jan 2026",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
        { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
      ],
    },
    
  ];

  // Split data
  const ongoing = projects.filter(p => p.status === "ongoing");
  const completed = projects.filter(p => p.status === "completed");

  return (
    <div className="projects-page">
      <h1 className="glow">Projects</h1>

      {/* ✅ Ongoing */}
      <h2 className="section-title">Ongoing Projects</h2>
      <div className="projects-grid">
        {ongoing?.map((project, i) => (
          <div
            key={i}
            className="project-card glass"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.media[0].src} />
            <h3>{project.title}</h3>
            <span className="status ongoing">Ongoing</span>
          </div>
        ))}
      </div>

      {/* ✅ Completed */}
      <h2 className="section-title">Completed Projects</h2>
      <div className="projects-grid">
        {completed?.map((project, i) => (
          <div
            key={i}
            className="project-card glass"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.media[0].src} />
            <h3>{project.title}</h3>

            <span className="status completed">Completed</span>
            <p className="date">Completed on: {project.completedDate}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <MediaModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}