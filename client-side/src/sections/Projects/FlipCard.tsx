import { motion } from "framer-motion";
import { RepoModel } from "../../types/RepoModel";
import { FrontSide } from "./FrontSide";
import { BackSide } from "./BackSide";

interface FlipCardProps {
  project: RepoModel;
  flipped: boolean;
}

export function FlipCard({ project, flipped }: FlipCardProps) {
  return (
    <div className="relative h-[65vh] w-full" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <FrontSide project={project} />
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <BackSide project={project} />
        </div>
      </motion.div>
    </div>
  );
}
