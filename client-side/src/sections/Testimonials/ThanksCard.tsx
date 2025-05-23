import Lottie from "lottie-react";
import animationData from "../../../public/assets/thankyou.json"; // senin path'e göre uyarlanabilir
import { FaRegSmileWink } from "react-icons/fa";
import { testimonialdata } from "../../data/testimonialPage";
import { RootState, useAppSelector } from "../../store";

const ThanksCard = () => {
  const { lang } = useAppSelector((state: RootState) => state.app);
  return (
    <div className="bg-[var(--color-accent)]/10 backdrop-blur-2xl  shadow-lg rounded-2xl p-6 text-center max-w-md mx-auto">
      <div className="w-40 h-40 mx-auto ">
        <Lottie animationData={animationData} loop={false} />
      </div>

      <h3 className="text-xl font-semibold mt-4 text-[var(--color-primary)] ">
        {testimonialdata[lang].thankscard.title}
      </h3>

      <p className="text-sm text-[var(--color-secondary)] mt-2">
        {testimonialdata[lang].thankscard.description}
      </p>

      <span className="flex justify-center mt-4 text-3xl text-[var(--color-primary)]">
        <FaRegSmileWink />
      </span>
    </div>
  );
};

export default ThanksCard;
