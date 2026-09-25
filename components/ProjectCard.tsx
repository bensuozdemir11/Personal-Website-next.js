type ProjectCardProps = {
  number: string;
  category: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  number,
  category,
  title,
  description,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <span>
        {number} / {category}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href="#">VIEW PROJECT →</a>
    </article>
  );
}
