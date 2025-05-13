// components/CTABox.tsx
import { Link } from "react-router-dom";

export default function CTABox({ text, to, buttonLabel }: { text: string; to: string; buttonLabel: string }) {
  return (
    <div className="bg-[var(--color-accent)]/10 p-4 rounded mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[var(--color-accent)] text-lg font-semibold">{text}</p>
      <Link
        to={to}
        className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
