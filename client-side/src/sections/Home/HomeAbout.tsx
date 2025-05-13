import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HomeAbout() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 130 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full items-center justify-center text-[var(--color-primary)] z-30 relative min-w-[250px]"
    >
      <div className="text-center flex flex-col gap-y-4 bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-xl sm:text-3xl font-bold mb-4">
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

        <p className="text-[var(--color-secondary)] max-w-md mx-auto mb-2 text-left">
          I started by exploring design, frontend, and backend individually.
          Over time, I brought them together — and now, I build fullstack web
          apps that are ready for production. 🚀
        </p>
      </div>
    </motion.div>
  );
}
