import CTABox from "../components/common/CTABox";
import Hero from "../sections/Home/Hero";
import TechStack from "../components/common/TechStack";
import Education from "../sections/Education/Education";
import Social from "../components/common/Social";
import { FaCodeBranch, FaMailBulk, FaQuoteRight } from "react-icons/fa";
import About from "../sections/Home/About";
import Sectioninfo from "../sections/Home/Sectioninfo";
import { homedata } from "../data/home";
import { useSelector } from "react-redux";
import { RootState } from "../store";
export default function Home() {
const lang = useSelector((state: RootState) => state.app.lang);
  return (
    <div className="p-6 sm:p-0 relative w-full h-full">
      {/* Sabit sosyal linkler */}
      <div className="fixed top-1/2 left-2 -translate-y-1/2 z-50">
        <Social direction="col" />
      </div>
      {/* Hero content */}
      <div className="fixed top-10 -left-10 w-[150vh] h-[200vh] -z-10 pointer-events-none">
        <Hero />
      </div>

      <main className="flex flex-col gap-16 max-w-5xl mx-auto mt-15 relative z-10">
        {/* Hakkımda */}
        <section>
          <About />
        </section>
        {/* Referanslar */}
        <section className="flex flex-col items-center gap-6">
          <Sectioninfo
            title={homedata.refsection.title[lang]}
            description={homedata.refsection.description[lang]}
            cta={{
              text: homedata.refsection.cta.text[lang],
              to: "/testimonials",
              buttonlabel: homedata.refsection.cta.buttonlabel[lang],
              Icon: FaQuoteRight,
            }}
          />
        </section>
        {/* Eğitim */}
        <section>
          <Sectioninfo
            title={homedata.edusection.title[lang]}
            description={homedata.edusection.description[lang]}
          />
          <Education />
        </section>
        {/* Tech Stack & Teknolojiler */}
        <section>
          <Sectioninfo
            title={homedata.techstack.title[lang]}
            description={homedata.techstack.description[lang]}
          />
          <TechStack />
          <CTABox
            text={homedata.techstack.cta.text[lang]}
            to="/projects"
            buttonLabel={homedata.techstack.cta.buttonlabel[lang]}
            Icon={FaCodeBranch}
          />
        </section>
        {/* İşbirliği / Proje CTA */}
        <section className="text-center flex flex-col items-start sm:items-center gap-6">
          <Sectioninfo
            title={homedata.contactcta.title[lang]}
            description={homedata.contactcta.description[lang]}
            cta={{
              text: homedata.contactcta.cta.text[lang],
              to: "/contact",
              buttonlabel: homedata.contactcta.cta.buttonlabel[lang],
              Icon: FaMailBulk,
            }}
          />
        </section>
      </main>
    </div>
  );
}
