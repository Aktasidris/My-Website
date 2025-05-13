import { useState } from "react";
import { RepoModel } from "../../types/RepoModel";
import { FlipCard } from "./FlipCard";
import { FlipButton } from "./FlipButton";

interface ProjectDetailProps {
  project: RepoModel | null;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [flipped, setFlipped] = useState(false);
  if (!project) {
    return (
      <div className="ms-4 text-[var(--color-secondary)]">
        Select a project...
      </div>
    );
  }
  const handleContent = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 items-center">
      <FlipCard project={project} flipped={flipped} />
      <FlipButton flipped={flipped} onClick={handleContent} />
    </div>
  );
}
