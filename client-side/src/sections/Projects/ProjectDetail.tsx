import { useState } from "react";
import { FlipCard } from "./FlipCard";
import { FlipButton } from "./FlipButton";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function ProjectDetail() {
  const [flipped, setFlipped] = useState(false);
  const { selectedProject, loading } = useSelector(
    (state: RootState) => state.projects
  );

  const handleContent = () => {
    setFlipped(!flipped);
  };
  if (!selectedProject) return <p>nulll</p>;
  if (loading == "loading")
    return (
      <div className="flex w-full h-full justify-center mt-10  ">
        <AiOutlineLoading3Quarters className="text-6xl animate-spin text-[var(--color-border)]" />
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      {selectedProject && (
        <FlipCard project={selectedProject} flipped={flipped} />
      )}
      <FlipButton flipped={flipped} onClick={handleContent} />
    </div>
  );
}
