import { useState } from "react";
//icons
import { PiSmileyMehFill, PiSmileyFill } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

//animations
import { motion, AnimatePresence } from "framer-motion";
//components
import CTABox from "../../components/common/CTABox";
import Sectioninfo from "../Home/Sectioninfo";
import { cvPageData } from "../../data/cvPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function CvViewer() {
  const [showcv, setShowcv] = useState(true);
  const handleShowcv = () => setShowcv(!showcv);

const lang = useSelector((state: RootState) => state.app.lang);

  const cvUrl = "/assets/folders/CV.webp";
  const pdfcvUrl = "/assets/folders/CV.pdf"; // /public/assets/folders/CV.webp içinde olduğunu varsayıyoruz

  return (
    <div className="bg-[var(--color-background)]/10 backdrop-blur-2xl w-full h-full p-5 flex flex-col  justify-center items-center">
      <div className="max-w-3xl w-full flex ">
        <AnimatePresence mode="wait">
          {!showcv ? (
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
            <motion.div
              key="cta-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center text-[var(--color-primary)] text-lg mt-4 w-full"
            >
              <div className="mb-4 justify-center gap-4">
                <Sectioninfo
                  title={cvPageData.sectionInfo[lang].title}
                  description={cvPageData.sectionInfo[lang].description}
                />

                {cvPageData.ctas.map((cta, index) => (
                  <CTABox
                    key={index}
                    to={cta.to}
                    Icon={cta.Icon}
                    text={cta.text[lang]}
                    buttonLabel={cta.buttonLabel[lang]}
                  />
                ))}
              </div>
              <h2>{cvPageData.cvClosedMessage[lang]}</h2>

              <div className="w-1/2 bg-[var(--color-background)]/50 backdrop-blur-3xl h-full"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-4 items-center justify-center mt-6 px-2 text-xl text-[var(--color-primary)] ms-2 ">
          <button
            onClick={handleShowcv}
            className="hover:scale-110 transition-transform text-4xl"
          >
            {!showcv ? (
              <PiSmileyFill aria-label="Hide CV" />
            ) : (
              <PiSmileyMehFill aria-label="Show CV" />
            )}
          </button>

          {!showcv ? (
            <a
              href={pdfcvUrl}
              download
              className="space-y-2 items-center gap-2 bg-[var(--color-accent)] text-white px-2 py-4 rounded hover:bg-opacity-80 transition-all"
            >
              <FaFilePdf />
              <IoMdDownload />
            </a>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}
