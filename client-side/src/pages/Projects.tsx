import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import { RootState } from "../store";
import { fetchProjects } from "../store/featuresProjects/projectThunks";

import ProjectList from "../sections/Projects/ProjectList";
import { ProjectDetail } from "../sections/Projects/ProjectDetail";
import ProjectFilter from "../sections/Projects/ProjectFilter";
import Error from "../components/Error/Error";
import { useAppDispatch } from "../hooks";
import Sectioninfo from "../sections/Home/Sectioninfo";
import { projectsPageTexts } from "../data/projectsPage";
export default function ProjectsPage() {
  const lang = useSelector((state: RootState) => state.app.lang);

  const dispatch = useAppDispatch();
  const { selectedProject, projects, error } = useSelector(
    (state: RootState) => state.projects
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  if (error)
    return (
      <Error message={`${projectsPageTexts.error[lang]} ${error}`}></Error>
    );
  return (
    <div className="flex flex-col sm:gap-2 bg-[var(--color-background)] text-[var(--color-primary)] transition-colors relative h-full w-full">
      {/* Üst Alan: Sidebar Toggle + Filtre */}
      <div className="flex align-item-center justify-between items-center p-4 border-b border-[var(--color-muted)]">
        <button
          onClick={toggleSidebar}
          className="text-2xl"
          aria-label={projectsPageTexts.ariaLabel[lang]}
        >
          {sidebarOpen ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
        </button>
        <ProjectFilter projects={projects} onFilter={handleFilter} />
      </div>

      {/* Alt Alan: Liste ve Detay */}
      <div className="flex h-full gap-2">
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
                onToggleSidebar={toggleSidebar}
                filteredProjects={
                  filteredTechs.length > 0 ? filteredProjects : undefined
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        {(!isMobile || !sidebarOpen) && (
          <div className="w-full">
            {selectedProject != null ? (
              <ProjectDetail />
            ) : (
              <Sectioninfo
                title={projectsPageTexts.emptyState.title[lang]}
                description={projectsPageTexts.emptyState.description[lang]}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
