import { useState } from "react";
import { RepoModel } from "../../types/RepoModel";
import { FlipCard } from "./FlipCard";
import { FlipButton } from "./FlipButton";

interface ProjectDetailProps {
  project: RepoModel | null;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [flipped, setFlipped] = useState(false);

  const handleContent = () => {
    setFlipped(!flipped);
  };
  if (!project) return <p>nulll</p>;

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      {project && <FlipCard project={project} flipped={flipped} />}
      <FlipButton flipped={flipped} onClick={handleContent} />
    </div>
  );
}
