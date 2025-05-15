import CTABox from "../../components/common/CTABox";
import { FaHome, FaCodeBranch } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <div className="mt-10 flex flex-col justify-center gap-4 w-full order-last md:order-first">
      <CTABox to="/" text="Turn to Home" buttonLabel="Home" Icon={FaHome} />
      <CTABox
        to="/projects"
        text="Do you want check up My Projects!"
        buttonLabel="Projects"
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
