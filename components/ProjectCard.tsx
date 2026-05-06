import "./Projects.css";

export default function ProjectCard({ title, desc, image, link }: any) {
  return (
    <div className="project-card glass">
      <img src={image} />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{desc}</p>

        <a href={link} target="_blank">
          View Project →
        </a>
      </div>
    </div>
  );
}