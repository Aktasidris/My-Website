import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProjectsPage from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Cv from "../pages/Cv";
import Testimonials from "../pages/Testimonials";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
