import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { RepoModel } from "../../store/featuresProjects/projectTypes";
export function BackSide({ project }: { project: RepoModel }) {
  return (
    <div className="absolute inset-0 bg-[var(--color-card-alt)] text-[var(--color-foreground)] px-4 py-4 overflow-auto backface-hidden">
      <h2 className="font-semibold mb-2 text-center">{project.name}</h2>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {project.readme || "README içeriği bulunamadı."}
      </ReactMarkdown>
    </div>
  );
}
