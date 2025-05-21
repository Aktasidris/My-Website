import { useEffect, useState } from "react";
import { FaUpLong } from "react-icons/fa6";

export default function Scroolup() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    // sayfanın en üstüne gönder
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;
  return (
    <button
      onClick={handleClick}
      id="scroll-btn"
      className="fixed bottom-4 right-4 z-50 p-2 pb-12 border-1 text-[var(--color-link)] rounded-full shadow-lg shadow-(color:--color-border) hover:scale-110 transition-transform hover:rotate-x-45 transform-3d duration-300 ease-in-out perspective-origin-top"
    >
      <FaUpLong />
    </button>
  );
}
