import { IconType } from "react-icons";

interface HobbyListProps {
  hobbies: hobby[];
}

type hobby = {
  name: string;
  Icon: IconType;
};

export default function HobbyList({ hobbies }: HobbyListProps) {
  return (
    <section className="mt-12">
      
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[var(--color-secondary)]">
        {hobbies.map(({ name, Icon }, idx) => (
          <li
            key={idx}
            className="bg-[var(--color-muted)] px-4 py-4 rounded-xl border border-[var(--color-border)] shadow hover:scale-[1.02] transition text-center flex flex-col items-center gap-2"
          >
            <Icon className="text-3xl text-[var(--color-accent)]" />
            <span className="text-sm">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
