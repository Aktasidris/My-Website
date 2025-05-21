import { motion } from "framer-motion";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";

type Testimonial = {
  name: string;
  user: string;
  role: string;
  comment: string;
  createddate: string;
};

export default function TestimonialCard({
  testimonial,
  onExpandChange,
}: {
  testimonial: Testimonial;
  onExpandChange?: (expanded: boolean) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const date = new Date(testimonial.createddate);
  useEffect(() => {
    onExpandChange?.(expanded);
  }, [expanded]);

  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      className="bg-white/20 backdrop-blur-2xl rounded p-6 border-2 border-[var(--color-border)] flex flex-col gap-4 w-[280px] sm:w-[320px] md:w-[360px]"
    >
      {/* Kullanıcı bilgisi */}
      <div className="flex items-center gap-4">
        <Avatar
          alt={testimonial.name}
          src={testimonial.user}
          sx={{ height: 60, width: 60 }}
        />
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <span className="text-[var(--color-secondary)] font-light">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Yorum alanı */}
      <motion.div
        layout
        initial={false}
        animate={{ height: expanded ? "auto" : 96 }}
        className="relative overflow-hidden text-sm leading-relaxed transition-all duration-300"
      >
        <p>{testimonial.comment}</p>
 
      </motion.div>

      {/* Aç/Kapat ve Tarih */}
      <div className="flex justify-between items-center text-xs mt-2 font-bold">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[var(--color-accent)] flex items-center gap-1"
        >
          {expanded ? "Daha az gör" : "Daha fazla gör"}
          {expanded ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <span className="text-[var(--color-muted)] ">
          {date.toLocaleDateString("tr-TR")}
        </span>
      </div>
    </motion.div>
  );
}
