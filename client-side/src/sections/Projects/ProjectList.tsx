import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";

import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Error from "../../components/Error/Error";
import { projectListdata } from "../../data/projectsPage";
import { LightRepoModel } from "../../store/featuresProjects/projectTypes";
import { fetchProjectByName } from "../../store/featuresProjects/projectThunks";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ProjectListProps {
  onToggleSidebar: () => void;
  filteredProjects?: LightRepoModel[]; // opsiyonel
}
const ProjectList: FC<ProjectListProps> = ({
  onToggleSidebar,
  filteredProjects,
}) => {
  const lang = useSelector((state: RootState) => state.app.lang);
  const { projects, loading, error, selectedProject } = useSelector(
    (state: RootState) => state.projects
  );
  const dispatch = useAppDispatch();
  const handleSelect = async (project: LightRepoModel) => {
    await dispatch(fetchProjectByName(project.name));
    onToggleSidebar();
  };

  // Önce filtre varsa onu göster, yoksa tüm projeleri
  const visibleProjects =
    filteredProjects !== undefined ? filteredProjects : projects;

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-primary)] transition-all duration-300 relative">
      <p className="border-b-1 w-full ">
        {projectListdata[lang].title}: {visibleProjects.length}
      </p>
      <div className="h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-muted)] hide-scrollbar px-2 ">
        {loading === "loading" && (
          <div className=" w-full h-full items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
          </div>
        )}
        {loading === "failed" && error && <Error message={error}></Error>}

        {loading === "succeeded" && (
          <AnimatePresence>
            {visibleProjects.length === 0 ? (
              <motion.div
                key="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 text-center text-[var(--color-error)]"
              >
                {projectListdata[lang].noProjectsFound}
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
                    className={`p-3 rounded-lg cursor-pointer transition-all backdrop-blur-sm mt-2 ${
                      isActive
                        ? "bg-[var(--color-accent)]/30"
                        : "bg-white/10 hover:bg-[var(--color-accent)]/20"
                    }`}
                  >
                    <h3 className="font-medium text-base truncate">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--color-primary)]/70 line-clamp-2">
                      {project.description ||
                        projectListdata[lang].noDescription}
                    </p>
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
