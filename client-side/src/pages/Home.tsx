import CTABox from "../components/common/CTABox";
import Hero from "../sections/Home/Hero";
import HomeAbout from "../sections/Home/HomeAbout";
import TechStack from "../components/common/TechStack";
import Education from "../sections/Education/Education";
import Social from "../components/common/Social";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbFileCv } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa";
export default function Home() {
  return (
    <div className="p-6 sm:p-0 relative w-full h-full">
      {/* Sabit sosyal linkler */}
      <div className="fixed top-1/2 left-2 -translate-y-1/2 z-50">
        <Social direction="col"/>
      </div>
      {/* Hero content */}
      <div
        
        className="fixed top-10 -left-10 w-[150vh] h-[200vh] -z-10 pointer-events-none"
      >
        <Hero />
      </div>

      <main className="flex flex-col gap-16 max-w-5xl mx-auto mt-15 relative z-10">
        <section className="relative bg-white/10 backdrop-blur-lg p-3 sm:p-6 rounded-lg shadow-md h-[50vh] flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Welcome to My World!
          </h1>
          <p className="text-lg text-[var(--color-secondary)] max-w-lg mx-auto mb-6">
            I'm İdris — a production-minded fullstack developer who designs,
            codes, and ships performant apps.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/projects"
              className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-80 transition flex items-center gap-2 hover:outline hover:scale-105 duration-200 ease-in"
            >
              See My Projects
              <FaCodeBranch />
            </Link>
            <Link
              to="/contact"
              className="border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded hover:bg-[var(--color-accent)] hover:text-white transition flex items-center gap-2 hover:scale-110"
            >
              <IoIosMail className="text-2xl" /> Let's Work Together
            </Link>
          </div>
        </section>
        {/* Hakkımda */}
        <section>
          <HomeAbout />
          <CTABox
            text="Want to know more about my background?"
            to="/cv"
            buttonLabel="View My CV"
            Icon={TbFileCv}
          />
        </section>
        {/* Eğitim */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Education</h2>
          <Education />
          <CTABox
            text="Interested in my academic journey?"
            to="/cv#education"
            buttonLabel="See in My CV"
            Icon={TbFileCv}
          />
        </section>
        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Tech Stack</h2>
          <TechStack />
          <CTABox
            text="Curious how I use these tools in real projects?"
            to="/projects"
            buttonLabel="See Projects"
            Icon={FaCodeBranch}
          />
        </section>
      </main>
    </div>
  );
}
