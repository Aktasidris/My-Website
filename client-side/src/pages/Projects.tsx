import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import { RootState } from "../store";
import { setSelectedProject } from "../store/featuresProjects/projectSlice";

import { fetchProjects } from "../store/featuresProjects/projectThunks";
import { RepoModel } from "../types/RepoModel";
import ProjectList from "../sections/Projects/ProjectList";
import { ProjectDetail } from "../sections/Projects/ProjectDetail";
import ProjectFilter from "../sections/Projects/ProjectFilter";
import GlobalBackdrop from "../components/common/GlobalBackdrop";
import Error from "../components/Error/Error";
import { useAppDispatch } from "../hooks";

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const { selectedProject, projects, loading, error } = useSelector(
    (state: RootState) => state.projects
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleSelectProject = (project: RepoModel) => {
    dispatch(setSelectedProject(project));
    if (isMobile) setSidebarOpen(true);
  };
  //side bar açılıp kapanma
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  //filter foksiyonları
  const [filteredTechs, setFilteredTechs] = useState<string[]>([]);

  const handleFilter = (selectedTechs: string[]) => {
    setFilteredTechs(selectedTechs);
  };
  const filteredProjects = projects.filter((project) =>
    filteredTechs.every((tech) =>
      project.techStack.some((pTech) =>
        pTech.toLowerCase().includes(tech.toLowerCase())
      )
    )
  );
  if (loading === "loading")
    return <GlobalBackdrop loading={true}></GlobalBackdrop>;
  if (error) return <Error message={error}></Error>;
  return (
    <div className="flex flex-col gap-4 bg-[var(--color-background)] text-[var(--color-primary)] transition-colors relative h-screen ">
      {/* Üst Alan: Sidebar Toggle + Filtre */}

      <div className="flex align-item-center justify-between items-center p-4 border-b border-[var(--color-muted)]">
        <button onClick={toggleSidebar} className="text-2xl">
          {sidebarOpen ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
        </button>
        <ProjectFilter projects={projects} onFilter={handleFilter} />
      </div>

      {/* Alt Alan: Liste ve Detay */}
      <div className="flex flex-1 h-full overflow-hidden">
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              key="sidebar"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-1/3 border-r border-[var(--color-muted)]"
            >
              <ProjectList
                onSelectProject={handleSelectProject}
                onToggleSidebar={toggleSidebar}
                filteredProjects={
                  filteredTechs.length > 0 ? filteredProjects : undefined
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        {(!isMobile || !sidebarOpen) && (
          <div className="w-full overflow-auto md:w-2/3 p-4">
            <ProjectDetail project={selectedProject} />
          </div>
        )}
      </div>
    </div>
  );
}
