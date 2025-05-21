import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import astronaut404 from "../../public/assets/404.json";
import { notFoundPageData } from "../data/404Page";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function NotFound() {
const lang = useSelector((state: RootState) => state.app.lang);
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen  p-4">
      <div className="max-w-md w-full">
        <Lottie animationData={astronaut404} loop={true} />
        <p className="text-lg text-[var(--color-secondary)] mt-2">
          {notFoundPageData.message[lang]}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row justify-center">
          {notFoundPageData.buttons.map((btn, i) => (
            <Link
              key={i}
              to={btn.to}
              className={
                btn.variant === "primary"
                  ? "bg-[var(--color-accent)] text-white px-6 py-2 rounded-md hover:scale-105 transition"
                  : "border border-[var(--color-border)] text-white px-6 py-2 rounded-md hover:scale-105 transition"
              }
            >
              {btn.text[lang]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
