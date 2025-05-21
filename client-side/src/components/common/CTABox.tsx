// components/CTABox.tsx
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface CTABoxprops {
  text: string;
  to: string;
  buttonLabel: string;
  Icon?: IconType;
}
export default function CTABox({ text, to, buttonLabel, Icon }: CTABoxprops) {
  return (
    <div className="bg-[var(--color-accent)]/10 p-4 rounded mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      <p className="text-[var(--color-accent)] text-lg font-semibold  text-start sm:text-center w-full text-md sm:text-lg">
        {text}
      </p>
      <Link
        to={to}
        className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex items-center justify-evenly gap-2 text-xs  sm:text-sm hover:outline hover:scale-105 duration-200 ease-in shadow-(color:--color-accent) shadow-2xl sm:w-2/6 w-full"
      >
        {buttonLabel}
        {Icon && <Icon className="sm:text-2xl text-xl" />}
      </Link>
    </div>
  );
}
