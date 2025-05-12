import { FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export default function HomeAbout() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 130 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full  items-center justify-center text-[var(--color-primary)] z-30 relative min-w-[250px] "
    >
      <div className="text-center flex flex-col gap-y-4 bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className=" text-xl sm:text-3xl font-bold mb-4 ">
          Hi, I’m İdris
          <br />
          <span className="text-[var(--color-accent)] text-sm sm:text-lg">
            <TypeAnimation
              sequence={[
                "Fullstack Web Developer",
                3000,
                "Frontend Developer",
                3000,
                "Backend Enthusiast",
                3000,
                "Production-minded Coder",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </span>
        </h2>

        <p className="text-[var(--color-secondary)] max-w-md mx-auto mb-6 text-left">
          I started by exploring design, frontend, and backend individually.
          Over time, I brought them together — and now, I build fullstack web
          apps that are ready for production. 🚀
        </p>

        <motion.div
          initial={{ opacity: 0, y: 130 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          className="flex flex-col"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded border border-[var(--color-primary)]  hover:scale-105 transition duration-300 flex items-center gap-2 shadow-(color:--color-accent)/50 shadow-lg"
            >
              <IoIosMail className="text-2xl" />
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/idrisaktas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[var(--color-accent)] text-[var(--color-accent)] rounded hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition duration-300 shadow-(color:--color-accent)/50 shadow-lg hover:border-[var(--color-primary)]"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
          </div>
          <Link
            to="/projects"
            className="font-thin underline text-xs flex justify-center gap-2 items-center mt-4 hover:gap-4"
          >
            See My Work <FaLongArrowAltRight />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
