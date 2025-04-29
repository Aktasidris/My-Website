import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
