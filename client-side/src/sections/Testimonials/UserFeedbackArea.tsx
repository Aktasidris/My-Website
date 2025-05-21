import TestimonialForm from "./TestimonialForm";
import ThanksCard from "./ThanksCard";
import { useIPCommented } from "./useIPCommentLimiter";

const UserFeedbackArea = () => {
  const { hasCommented, loading } = useIPCommented();

  if (loading)
    return (
      <div className="flex items-center justify-center py-10 ">
        <p className="text-gray-600 dark:text-gray-300">Yükleniyor...</p>
      </div>
    );

  return <div>
    {hasCommented ? <ThanksCard /> : <TestimonialForm />}</div>;
};

export default UserFeedbackArea;
