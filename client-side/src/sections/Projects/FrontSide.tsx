import { useSelector } from "react-redux";
import { projectDetaildata } from "../../data/projectsPage";
import { RepoModel } from "../../types/RepoModel";
import { FaSquareGithub } from "react-icons/fa6";
import { RootState } from "../../store";

export function FrontSide({ project }: { project: RepoModel }) {
const lang = useSelector((state: RootState) => state.app.lang);
  return (
    <div
      className="absolute inset-0 bg-[var(--color-card)] text-[var(--color-foreground)] px-4 py-4 rounded shadow overflow-auto backface-hidden"
      style={{ backfaceVisibility: "hidden" }}
    >
      <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
      <p className="mb-2">{project.description}</p>
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-[var(--color-link)] hover:underline"
        >
          <FaSquareGithub className="size-6" />
          <span className="text-sm">{projectDetaildata[lang].frontside.githublink}</span>
        </a>
      )}
      <div className="mt-4">
        <h3 className="font-semibold mb-1">{projectDetaildata[lang].frontside.techtitle}</h3>
        <div className="flex gap-2 flex-wrap">
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-sm bg-[var(--color-muted)] rounded-2xl text-[var(--color-border)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
