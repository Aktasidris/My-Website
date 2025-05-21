import CTABox from "../../components/common/CTABox";
import { FaHome, FaCodeBranch } from "react-icons/fa";
import { contactpagedata } from "../../data/contactPage";
import { RootState, useAppSelector } from "../../store";

export default function ContactCTA() {
  const lang = useAppSelector((state: RootState) => state.app.lang);
  return (
    <div className="flex flex-col justify-center  gap-4 w-full order-last md:order-first">
      <CTABox
        to="/"
        text={contactpagedata.cta.firstcta.text[lang]}
        buttonLabel={contactpagedata.cta.firstcta.buttonlabel[lang]}
        Icon={FaHome}
      />
      <CTABox
        to="/projects"
        text={contactpagedata.cta.secondcta.text[lang]}
        buttonLabel={contactpagedata.cta.secondcta.buttonlabel[lang]}
        Icon={FaCodeBranch}
      />
      {/* <CTABox
        to="/blog"
        text="Bazı teknik blog yazılarım var!"
        buttonLabel="Blog"
        Icon={FaBlog}//icon import edersin yazdığında
      /> */}
    </div>
  );
}
