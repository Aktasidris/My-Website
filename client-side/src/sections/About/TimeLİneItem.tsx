interface TimelineItemProps {
  title: string;
  year?: string;
  description: string;
  tech?: string[];
}

export default function TimelineItem({
  title,
  year,
  description,
  tech,
}: TimelineItemProps) {
  return (
    <div className="border-l-4 pl-4 border-[var(--color-border)] mb-6 border-b-1 p-2 rounded-r-md">
      <h3 className="text-xl font-semibold text-[var(--color-primary)]">
        {title}
      </h3>

      <p className="text-sm italic text-[var(--color-secondary)]">{year}</p>

      <p className="mt-2 text-[var(--color-secondary)]">{description}</p>

      {tech && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <li
              key={t}
              className="bg-[var(--color-secondary)] text-[var(--color-background)] px-2 py-1 rounded text-xs font-medium"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
