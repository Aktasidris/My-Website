import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface FlipButtonProps {
  flipped: boolean;
  onClick: () => void;
}

export function FlipButton({ flipped, onClick }: FlipButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--color-border)] p-2 rounded-full shadow-md hover:bg-[var(--color-primary)]/50 transition-colors flex justify-center items-center gap-2 hover:text-[var(--color-secondary)] text-xs sm:text-md"
      title="Çevir"
    >
      {flipped ? (
        <>
          <FaArrowLeft /> Content
        </>
      ) : (
        <>
          Readme <FaArrowRight />
        </>
      )}
    </button>
  );
}
