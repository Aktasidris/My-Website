import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiStarGate } from "react-icons/gi";
import { educationsdata } from "../../data/educationsdata";

export default function Education() {
  return (
    <section className="w-full grid sm:grid-cols-2 gap-6 p-4 sm:p-8">
        
      {educationsdata.map((education, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="relative flex items-start gap-4 p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/10 w-full hover:scale-[1.02] transition-transform flex-col sm:flex-row"
        >
          {/* Icon */}
          <div className="p-4 bg-[var(--color-accent)] text-white rounded-full shadow-md">
            <FaGraduationCap className="text-3xl sm:text-4xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                {education.title}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[var(--color-secondary)]">
              {education.department}
            </p>

            <span className="text-xs sm:text-sm text-[var(--color-secondary)] mt-1">
              {education.date}
            </span>
          </div>

          {/* Graduated Badge */}
          {education.graduated && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-3 right-3 bg-green-700 p-2 rounded-full shadow-md"
            >
              <GiStarGate className="text-yellow-300 text-xl sm:text-2xl" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </section>
  );
}
