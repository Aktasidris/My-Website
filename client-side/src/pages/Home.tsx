import CTABox from "../components/common/CTABox";
import Hero from "../sections/Home/Hero";
import TechStack from "../components/common/TechStack";
import Education from "../sections/Education/Education";
import Social from "../components/common/Social";
import { FaCodeBranch, FaMailBulk, FaQuoteRight } from "react-icons/fa";
import About from "../sections/Home/About";
import Testimonials from "../components/common/Testimonials";
export default function Home() {
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
          <h2 className="text-2xl font-bold text-center mb-2">Referanslar</h2>
          <p className="text-center text-[var(--color-secondary)] max-w-lg">
            Takım arkadaşlarımdan, eğitmenlerimden ve yöneticilerimden gelen
            geri bildirimler.
          </p>
          <Testimonials /> {/* bu component içinde yorum kartları olacak */}
          <CTABox
            text="Daha fazla yorum ve detay için referanslar sayfasına göz at."
            to="/testimonials"
            buttonLabel="Tüm Referansları Gör"
            Icon={FaQuoteRight}
          />
        </section>

        {/* Eğitim */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Eğitim</h2>
          <Education />
        </section>

        {/* Tech Stack & Teknolojiler */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Kullandığım Teknolojiler</h2>
          <TechStack />
          <CTABox
            text="Bu araçları gerçek projelerde nasıl kullandığımı merak ediyor musunuz?"
            to="/projects"
            buttonLabel="See Projects"
            Icon={FaCodeBranch}
          />
        </section>

        {/* İşbirliği / Proje CTA */}
        <section className="text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">Beraber Proje Geliştirelim</h2>
          <p className="max-w-md text-[var(--color-secondary)]">
            Yeni projelere açığım! Freelancer olarak çalışabilir, ekip
            projelerine katkı sağlayabilirim.
          </p>
          <CTABox
            text="Fikrin mi var, işin mi var? Hadi detayları konuşalım."
            to="/contact"
            buttonLabel="İletişime Geç"
            Icon={FaMailBulk}
          />
        </section>
      </main>
    </div>
  );
}
