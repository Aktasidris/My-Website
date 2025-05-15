import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaMailBulk, FaCodeBranch, FaInfo, FaInfoCircle } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import CTABox from "../../components/common/CTABox";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 130 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full items-center justify-center text-[var(--color-primary)] relative min-w-[250px]"
    >
      <div className="text-center flex flex-col gap-6 bg-white/10 p-6 sm:p-8 rounded-lg shadow-lg backdrop-blur-md max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Selam! Ben İdris
        </h1>

        <span className="text-[var(--color-accent)] text-base sm:text-lg font-semibold">
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

        <p className="text-[var(--color-secondary)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Yazılımı sadece meslek değil, biraz da karakter olarak gören bir
          geliştiriciyim. Performans odaklı projeler üretirim, işi bitirmeden
          masadan kalkmam. Frontend ve backend dünyasında ayrı ayrı yüzdüm;
          şimdi bu iki dünyayı birleştirip tam donanımlı web uygulamaları
          geliştiriyorum. 🚀
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/about"
            className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-80 transition flex items-center gap-2 hover:outline hover:scale-105 duration-200 ease-in"
          >
            Hakkımda daha fazlası <FaInfoCircle />
          </Link>

          <Link
            to="/cv"
            className="border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded hover:bg-[var(--color-accent)] hover:text-white transition flex items-center gap-2 hover:scale-110"
          >
            CV'ye Göz Gezdir <TbFileCv className="text-2xl" />
          </Link>
        </div>

        <CTABox
          to="/contact"
          text="Soruların mı var, proje mi var? İkisi de olur!"
          buttonLabel="İletişime Geçelim"
          Icon={FaMailBulk}
        />
      </div>
    </motion.section>
  );
}
