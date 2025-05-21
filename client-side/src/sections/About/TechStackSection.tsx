interface TechStackProps {
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
}

export default function TechStackSection({ techStack }: TechStackProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(techStack).map(([category, items]) => (
        <div
          key={category}
          className="bg-[var(--color-muted)] border border-[var(--color-border)] rounded-xl p-4 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-[var(--color-primary)] capitalize">
            {category}
          </h3>

          <ul className="flex flex-wrap gap-2 mt-3">
            {items.map((tech) => (
              <li
                key={tech}
                className="bg-[var(--color-secondary)] text-[var(--color-background)] px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
