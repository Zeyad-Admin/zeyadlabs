type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50">
      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-slate-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-cyan-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-flex text-sm font-semibold text-blue-400 transition hover:text-cyan-400"
      >
        View project →
      </a>
    </article>
  );
}