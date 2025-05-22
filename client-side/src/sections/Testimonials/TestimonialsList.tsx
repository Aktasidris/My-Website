"use client";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchTestimonials } from "../../store/featuresTestimonials/testimonialsThunks";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Error from "../../components/Error/Error";


export default function TestimonialsList() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error } = useSelector(
    (state: RootState) => state.testimonials
  );

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (inView && !isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [inView, isPaused]);

  if (loading)
    return (
      <span className="animate-spin">
        <AiOutlineLoading3Quarters />
      </span>
    );
  if (error) return <Error message={error}></Error>;
  return (
    <div className="flex flex-col gap-6 w-full">
      <div
        ref={ref}
        className="relative w-full overflow-x-auto no-scrollbar hide-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div ref={containerRef} className="overflow-visible py-2 h-full">
          <motion.div animate={controls} className="flex gap-6 w-max">
            {list.map((testimonial, idx) => (
              <TestimonialCard
                key={idx} 
                testimonial={testimonial}
                onExpandChange={setIsPaused}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
