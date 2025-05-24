import { motion } from "framer-motion";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { TestimonialData } from "../../store/featuresTestimonials/testimonialTypes";

type Props = {
  testimonial: TestimonialData;
  onExpandChange?: (expanded: boolean) => void;
};

export default function TestimonialCard({ testimonial, onExpandChange }: Props) {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    onExpandChange?.(expanded);
  }, [expanded, onExpandChange]);

  const handleToggleExpand = () => setExpanded((prev) => !prev);

  const date = new Date(testimonial.createddate).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      className="bg-white/20 backdrop-blur-2xl rounded-2xl p-6 border border-[var(--color-border)] flex flex-col gap-4 w-[280px] sm:w-[320px] md:w-[360px]"
    >
      {/* Kullanıcı Bilgisi */}
      <div className="flex items-center gap-4">
        <Avatar
          alt={testimonial.name}
          src={testimonial.user}
          sx={{ height: 60, width: 60 }}
        />
        <div>
          <h3 className="font-semibold text-base">{testimonial.name}</h3>
          <p className="text-sm text-[var(--color-secondary)] font-light">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Yorum Alanı */}
      <motion.div
        layout
        initial={false}
        animate={{ height: expanded ? "auto" : 96 }}
        className={`relative overflow-hidden text-sm leading-relaxed transition-all duration-300 ${
          !expanded ? "line-clamp-4" : ""
        }`}
      >
        <p>{testimonial.comment}</p>
      </motion.div>

      {/* Alt Bilgi */}
      <div className="flex justify-between items-center text-xs mt-2 font-semibold">
        <button
          onClick={handleToggleExpand}
          className="text-[var(--color-accent)] flex items-center gap-1 transition-colors hover:text-[var(--color-link)]"
        >
          {expanded ? "Daha az gör" : "Daha fazla gör"}
          {expanded ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
        </button>
        <span className="text-[var(--color-muted)]">{date}</span>
      </div>
    </motion.div>
  );
}
