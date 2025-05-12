import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { RepoModel } from "../../types/RepoModel";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Error from "../../components/Error/Error";
interface ProjectListProps {
  onToggleSidebar: () => void;
  onSelectProject: (arg0: RepoModel) => void;
  filteredProjects?: RepoModel[]; // opsiyonel
}

const ProjectList: FC<ProjectListProps> = ({
  onToggleSidebar,
  onSelectProject,
  filteredProjects,
}) => {
  const { projects, loading, error, selectedProject } = useSelector(
    (state: RootState) => state.projects
  );

  const handleSelect = (project: RepoModel) => {
    onSelectProject(project);
    onToggleSidebar();
  };

  // Önce filtre varsa onu göster, yoksa tüm projeleri
  const visibleProjects =
    filteredProjects !== undefined ? filteredProjects : projects;

  return (
    <div className="p-4 max-w-full bg-[var(--color-background)] text-[var(--color-primary)] transition-all duration-300">
      <div className="mt-4 space-y-2 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-muted)] static">
        <p className="border-b-1 w-[95vh] absolute  z-20 -translate-y-10 max-w-[350px]">
          Projeler: {visibleProjects.length}
        </p>

        {loading === "loading" && <span>Yükleniyor...</span>}
        {loading === "failed"  && error && <Error message={error}></Error>}

        {loading === "succeeded" && (
          <AnimatePresence>
            {visibleProjects.length === 0 ? (
              <motion.div
                key="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 text-center text-[--color-muted]"
              >
                Filtreye uygun proje bulunamadı.
              </motion.div>
            ) : (
              visibleProjects.map((project) => {
                const isActive = selectedProject?.name === project.name;
                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleSelect(project)}
                    className={`p-3 rounded-lg cursor-pointer transition-all backdrop-blur-sm ${
                      isActive
                        ? "bg-[var(--color-accent)]/30"
                        : "bg-white/10 hover:bg-[var(--color-accent)]/20"
                    }`}
                  >
                    <p className="font-medium text-base truncate">
                      {project.name}
                    </p>
                    <p className="text-sm text-[var(--color-primary)]/70 line-clamp-2">
                      {project.description || "Açıklama yok"}
                    </p>

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="mt-2 flex gap-1 flex-wrap">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-[var(--color-muted)] text-[var(--color-border)] px-2 py-0.5 rounded-full border border-[var(--color-border)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
