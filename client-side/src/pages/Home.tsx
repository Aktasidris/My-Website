import TechStack from "../components/common/TechStack";
import ContactForm from "../sections/Contact/ContactForm";
import Education from "../sections/Education/Education";
import Hero from "../sections/Home/Hero";
import HomeAbout from "../sections/Home/HomeAbout";
import Social from "../components/common/Social";

function Home() {
  return (
    <div>
      {/* Fixed social links - always visible */}
      <div className="fixed top-1/2 left-2 -translate-y-1/2 z-50">
        <Social />
      </div>

      <main className="flex flex-col  w-full snap-y snap-proximity gap-4">
        <article className="brand flex min-h-screen snap-center mx-6 relative">
          <Hero />
          <div className="relative items-center flex justify-center">
            <HomeAbout />
          </div>
        </article>
        <article className="education w-full snap-center">
          <h1 className="text-center text-2xl border-t py-3">Education</h1>
          <Education />
        </article>

        <article className="tech-stack w-full snap-center">
          <TechStack />
        </article>

        <article className="w-full flex justify-center snap-center min-h-screen items-center">
          <ContactForm />
        </article>
      </main>
    </div>
  );
}

export default Home;
