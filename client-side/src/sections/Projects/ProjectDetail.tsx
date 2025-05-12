import { useState } from "react";
import { motion } from "framer-motion";
import { RepoModel } from "../../types/RepoModel";
import { FaSquareGithub } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProjectDetailProps {
  project: RepoModel | null;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [flipped, setFlipped] = useState(false);
  const [content, setContent] = useState("Readme");

  if (!project) {
    return <div className="p-6 text-gray-500 flex-1">Proje seçiniz...</div>;
    setContent((prev) => (prev === "Readme" ? "Content" : "Readme"));
  }

  const handleContent = () => {
    setFlipped((prev) => !prev);
  };
  return (
    <div className="p-4 text-[var(--color-primary)] relative overflow-auto">
      {/* Flip Button */}
      <button
        onClick={handleContent}
        className="absolute top-0 right-4 z-10 bg-[--color-background] text-[--color-foreground] border border-[--color-border] p-2 rounded-full shadow-md hover:bg-[var(--color-primary)]/50 transition-colors flex justify-center items-center gap-2 hover:text-[var(--color-secondary)]"
        title="Çevir"
      >
        {content && content === "Readme" ? (
          <>
            Content <FaArrowRight />
          </>
        ) : (
          <>
            <FaArrowLeft /> Readme
          </>
        )}
      </button>

      <div className="relative w-full pt-6 h-screen">
        <motion.div
          className="relative w-full h-full flex-1"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 p-4 bg-[--color-card] text-[--color-foreground] rounded shadow"
            style={{ backfaceVisibility: "hidden", height: "100%" }}
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
                <span className="text-sm">GitHub'da Görüntüle</span>
              </a>
            )}

            <div className="mt-4 flex flex-col gap-y-2">
              <h3 className="font-semibold mb-1">Teknolojiler</h3>
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

          {/* Back Side */}
          <div
            className="absolute  bg-[--color-card-alt] text-[--color-foreground] h-full"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <h3 className="font-semibold mb-2">README</h3>
            <pre className="text-sm whitespace-pre-wrap max-h-[75vh]">
              {project.readme || "README içeriği bulunamadı."}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
