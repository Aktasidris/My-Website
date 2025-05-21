import Sectioninfo from "../sections/Home/Sectioninfo";
import {
  heroSection,
  timeline,
  techStack,
  personalSection,
  closingCTA,
  titles,
} from "../data/aboutPage";
import TimelineItem from "../sections/About/TimeLİneItem";
import TechStackSection from "../sections/About/TechStackSection";
import CTABox from "../components/common/CTABox";
import HobbyList from "../sections/About/HobbyList";
import { motion } from "framer-motion";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

export default function About() {
const lang = useAppSelector((state: RootState) => state.app.lang);  
return (
    <main className=" flex flex-col gap-12">
      {/* {/* // pages/about.tsx //  */}
      {/* 📌 1. Hero Section */}
      <Sectioninfo
        title={heroSection.title[lang]}
        description={heroSection.description[lang]}
        cta={{
          ...heroSection.cta,
          text: heroSection.cta.text[lang],
          buttonlabel: heroSection.cta.buttonlabel[lang],
        }}
      />
      {/* 📌 2. Developer Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className=" bg-[var(--color-accent)]/10 rounded p-2"
      >
        <h2 className="text-2xl font-bold underline mb-6">
          {titles.timelinetitle[lang]}
        </h2>
        <div>
          {timeline.map((item) => (
            <TimelineItem
              key={item.title[lang]}
              {...item}
              description={item.description[lang]}
              title={item.title[lang]}
            />
          ))}
        </div>
      </motion.section>
      {/* // 📌 3. Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
          {titles.techstacktitle[lang]}
        </h2>
        <TechStackSection techStack={techStack}></TechStackSection>
      </motion.section>
      {/* // 📌 4. Personal Section (Beyond Code)*/}
      <Sectioninfo
        title={personalSection.title[lang]}
        description={personalSection.description[lang]}
        cta={{
          ...personalSection.cta,
          text: personalSection.cta.text[lang],
          buttonlabel: personalSection.cta.buttonlabel[lang],
        }}
      />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">
          {titles.hobbytitle[lang]}
        </h3>
        <HobbyList
          hobbies={personalSection.hobbies.map((hobby) => ({
            ...hobby,
            name: hobby.name[lang],
          }))}
        />
      </motion.section>

      {/* // 📌 5. Closing CTA */}
      <CTABox
        text={closingCTA.text[lang]}
        to={closingCTA.to}
        buttonLabel={closingCTA.buttonlabel[lang]}
        Icon={closingCTA.Icon}
      />
    </main>
  );
}
