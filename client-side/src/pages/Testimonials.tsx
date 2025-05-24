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
    <div className="w-full h-full flex flex-col gap-6 p-2 sm:p-4 relative items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-4 w-full h-full ">
        <div className="w-full sm:w-1/2">
          <Sectioninfo
            title={testimonialdata[lang].sectioninfo.title}
            description={testimonialdata[lang].sectioninfo.decription}
          />
        </div>

        <div className="w-full sm:w-1/2">
          <UserFeedbackArea />
        </div>
      </div>

      <TestimonialsList />
    </div>
  );
}
