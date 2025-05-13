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
    <div className="relative h-[65vh] w-full perspective">
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <FrontSide project={project} />
        <BackSide project={project} />
      </motion.div>
    </div>
  );
}
