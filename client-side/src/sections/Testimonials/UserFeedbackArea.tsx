import TestimonialForm from "./TestimonialForm";
import ThanksCard from "./ThanksCard";
import { useIPCommented } from "./useIPCommentLimiter";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const UserFeedbackArea = () => {
  const { hasCommented, loading } = useIPCommented();

  if (loading)
    return (
      <div className="flex items-center justify-center py-10 w-full">
        <p className="text-gray-600 dark:text-gray-300 animate-spin">
          <AiOutlineLoading3Quarters />
        </p>
      </div>
    );

  return <div>{hasCommented ? <ThanksCard /> : <TestimonialForm />}</div>;
};

export default UserFeedbackArea;
