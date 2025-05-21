import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaMailBulk, FaInfoCircle } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import CTABox from "../../components/common/CTABox";
import { homedata } from "../../data/home";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function AboutSection() {
const lang = useSelector((state: RootState) => state.app.lang);
  return (
    <motion.section
      initial={{ opacity: 0, x: 130 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full items-center justify-center text-[var(--color-primary)] relative min-w-[250px]"
    >
      <div className="text-center flex flex-col gap-6 bg-white/10 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-md max-w-3xl">
        <h2 className="text-3xl">{homedata.aboutsection.heading[lang]}</h2>

        <span className="text-[var(--color-accent)] text-base sm:text-lg font-semibold">
          <TypeAnimation
            sequence={[
              "Fullstack Web Developer",
              3000,
              "Frontend Developer",
              3000,
              "Backend Developer",
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

        <p className="text-[var(--color-secondary)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {homedata.aboutsection.description[lang]}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/about"
            className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-80 transition flex items-center gap-2 hover:outline hover:scale-105 duration-200 ease-in"
          >
            {homedata.aboutsection.moreAboutMe[lang]}
            <FaInfoCircle />
          </Link>

          <Link
            to="/cv"
            className="border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded hover:bg-[var(--color-accent)] hover:text-white transition flex items-center gap-2 hover:scale-110"
          >
            {homedata.aboutsection.viewCV[lang]}
            <TbFileCv className="text-2xl" />
          </Link>
        </div>

        <CTABox
          to="/contact"
          text={homedata.aboutsection.cta.text[lang]}
          buttonLabel={homedata.aboutsection.cta.buttonLabel[lang]}
          Icon={FaMailBulk}
        />
      </div>
    </motion.section>
  );
}
