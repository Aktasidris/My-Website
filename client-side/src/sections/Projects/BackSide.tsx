import { RepoModel } from "../../types/RepoModel";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
export function BackSide({ project }: { project: RepoModel }) {

  return (
    <div
      className="absolute inset-0 bg-[var(--color-card-alt)] text-[var(--color-foreground)] px-4 py-4 overflow-auto backface-hidden"
      
    >
      <h3 className="font-semibold mb-2">README</h3>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {project.readme || "README içeriği bulunamadı."}
      </ReactMarkdown>
    </div>
  );
}
