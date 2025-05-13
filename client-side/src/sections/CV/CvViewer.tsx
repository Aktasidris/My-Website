import { useState } from "react";
//icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
//animations
import { motion, AnimatePresence } from "framer-motion";

export default function CvViewer() {
  const [showcv, setShowcv] = useState(true);
  const handleShowcv = () => setShowcv(!showcv);

  const cvUrl = "/assets/folders/CV.webp"; // /public/assets/folders/CV.webp içinde olduğunu varsayıyoruz

  return (
    <div className="bg-[var(--color-background)]/10 backdrop-blur-2xl w-full h-full p-5 flex flex-col  justify-center items-center">
      <div className="max-w-3xl w-full flex ">
        <AnimatePresence mode="wait">
          {showcv ? (
            <motion.div
              key="cv-image"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-md overflow-hidden shadow-lg p-4"
            >
              <img
                src={cvUrl}
                alt="İdris Aktaş CV"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ) : (
            <motion.p
              key="cta-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center text-[var(--color-primary)] text-lg mt-4"
            >
              View or download my CV to learn more about my professional
              background.
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-4 items-center justify-center mt-6 px-2 text-xl text-[var(--color-primary)] ">
          <button
            onClick={handleShowcv}
            className="hover:scale-110 transition-transform"
          >
            {showcv ? (
              <FaEyeSlash aria-label="Hide CV" />
            ) : (
              <FaEye aria-label="Show CV" />
            )}
          </button>

          <a
            href={cvUrl}
            download
            className="space-y-2 items-center gap-2 bg-[var(--color-accent)] text-white px-2 py-4 rounded hover:bg-opacity-80 transition-all"
          >
            <TbFileCv /><IoMdDownload />
          </a>
        </div>
      </div>
    </div>
  );
}
