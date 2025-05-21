import { useSelector } from "react-redux";
import { RootState } from "../store";
//components
import Sectioninfo from "../sections/Home/Sectioninfo";
import TestimonialsList from "../sections/Testimonials/TestimonialsList";
import UserFeedbackArea from "../sections/Testimonials/UserFeedbackArea";
//lang
import { testimonialdata } from "../data/testimonialPage";

export default function Testimonials() {
  const lang = useSelector((state: RootState) => state.app.lang);
  return (
    <div className="w-full h-full flex flex-col gap-6 sm:p-4 relative">
      {/**
       <TestimonialsSection>
        │___ <Sectioninfo>+<CTABox>
        |
        ├── <CTABox />                   → Referans olmaya teşvik kutusu (CTA)
        │
        ├── <TestimonialsList>          → DB'den gelen yorumları listeler
        │   ├── <TestimonialCard />     → Her bir yorum kartı
        │
        ├── <UserFeedbackArea>          → Form mu teşekkür mü? (IP'ye göre conditional render)
        │   ├── <ThanksCard />          → Daha önce yorum yapmışsa
        │   └── <TestimonialForm />     → İlk defa yorum yapacaksa
       */}

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <Sectioninfo
          title={testimonialdata[lang].sectioninfo.title}
          description={testimonialdata[lang].sectioninfo.decription}
        />
        <UserFeedbackArea />
      </div>
      <TestimonialsList />
    </div>
  );
}
