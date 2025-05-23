import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projectDetaildata } from "../../data/projectsPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface FlipButtonProps {
  flipped: boolean;
  onClick: () => void;
}

export function FlipButton({ flipped, onClick }: FlipButtonProps) {
const lang = useSelector((state: RootState) => state.app.lang);
console.log(flipped)
  return (
    <button
      onClick={onClick}
      className="w-full bg-[var(--color-accent)] text-[var(--color-primary)] border border-[var(--color-border)] p-2 rounded-full shadow-md hover:scale-95 shadow-(color:--color-accent)/50 transition-all flex justify-center items-center gap-2 hover:text-[var(--color-secondary)] text-sm sm:text-md md:w-1/2"
      title="Çevir"
    >
      {flipped ? (
        <>
          <FaArrowLeft />{projectDetaildata[lang].flipbutton.label}
        </>
      ) : (
        <>
          Readme <FaArrowRight />
        </>
      )
      }
    </button>
  );
}
