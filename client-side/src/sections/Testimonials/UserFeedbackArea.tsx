import TestimonialForm from "./TestimonialForm";
import ThanksCard from "./ThanksCard";
import { useIPCommented } from "../../store/featuresTestimonials/useIPCommentLimiter";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

const UserFeedbackArea = () => {
  const { hasCommented, ip, loading } = useIPCommented();
  //useEffect({}, [hasCommented]);
  const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };
  if (loading)
    return (
      <div className="flex items-center justify-center py-10 w-full">
        <p className="text-gray-600 dark:text-gray-300 animate-spin">
          <AiOutlineLoading3Quarters />
        </p>
      </div>
    );

  return (
    <div>{hasCommented || isSubmitted ? <ThanksCard /> : <TestimonialForm userIp={ip} onSubmitSuccess={handleSubmitSuccess}/>}</div>
  );
};

export default UserFeedbackArea;
