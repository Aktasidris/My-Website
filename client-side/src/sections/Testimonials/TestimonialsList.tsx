"use client";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testdata = [
  {
    name: "İdris",
    user: "/avatar1.png",
    role: "Frontend Developer",
    comment:
      "Performans gerçekten çok iyi. Detaylara önem verilmiş. Performans gerçekten çok iyi. Detaylara önem verilmiş.",
    createddate: new Date().toISOString(),
  },
  {
    name: "Zeynep",
    user: "/avatar2.png",
    role: "UX Designer",
    comment: "Renk paleti harika, kullanım kolaylığı da yüksek.",
    createddate: new Date().toISOString(),
  },
  {
    name: "Ahmet",
    user: "/avatar3.png",
    role: "Backend Dev",
    comment: "Performans gerçekten çok iyi. Detaylara önem verilmiş.",
    createddate: new Date().toISOString(),
  },
  {
    name: "Mert",
    user: "/avatar3.png",
    role: "CTO",
    comment: "Kod yapısı sade ve anlaşılır, tebrikler.",
    createddate: new Date().toISOString(),
  },
];

export default function TestimonialsList() {
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
            {[...testdata, ...testdata].map((t, idx) => (
              <TestimonialCard
                testimonial={t}
                key={idx}
                onExpandChange={(expanded) => setIsPaused(expanded)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
