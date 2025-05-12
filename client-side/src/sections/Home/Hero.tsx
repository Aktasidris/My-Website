import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";

import { TbBrandRedux } from "react-icons/tb";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiFramer,
} from "react-icons/si";

// == Frontend ==
export const frontendIcons = [
  FaHtml5,
  FaCss3Alt,
  FaReact,
  TbBrandRedux,
  RiTailwindCssFill,
  SiFramer,
];

// == Backend ==
export const backendIcons = [
  FaNodeJs,
  SiExpress,
  SiMongodb,
  SiTypescript,
];

// == Tools / Deployment / Version Control ==
export const toolsIcons = [
  FaGithub,
  FaDocker,
  SiVercel,
  BiLogoVisualStudio ,
];

const circleConfig = [
  {
    icons: frontendIcons,
    size: "size-90",
    color: "border-sky-300",
    radius: 200,
    rotateDir: 1,
    glowColor: "sky-300",
  },
  {
    icons: backendIcons,
    size: "size-65",
    color: "border-pink-300",
    radius: 150,
    rotateDir: -1,
    glowColor: "pink-300",
  },
  {
    icons: toolsIcons,
    size: "size-40",
    color: "border-green-300",
    radius: 100,
    rotateDir: 1,
    glowColor: "green-300",
  },
];

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full sm:w-1/2 -translate-x-[150px] sm:scale-120">
      <div className="relative size-[400px] sm:size-[500px] flex items-center justify-center">
        {circleConfig.map((circle, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 * circle.rotateDir }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`
              absolute 
              rounded-full 
              border-2 
              flex items-center justify-center 
              ${circle.size} 
              ${circle.color} 
              before:content-[''] 
              before:absolute before:inset-0 before:rounded-full 
              before:bg-${circle.glowColor || "pink-300"} 
              before:blur-2xl before:opacity-20
            `}
          >
            {circle.icons.map((Icon, idx) => {
              const angle = (360 / circle.icons.length) * idx;
              return (
                <div
                  key={idx}
                  className="absolute z-10"
                  style={{
                    transform: `rotate(${angle}deg) translate(${circle.radius}px)`,
                  }}
                >
                  <div
                    style={{
                      transform: `rotate(${-angle}deg)`,
                    }}
                  >
                    <Icon
                      size={28}
                      className="text-[var(--color-accent)] shadow-lg shadow-(color:--color-accent) rotate-180 duration-100 transform-content hover:scale-125 p-1 rounded-full"
                      style={{
                        transformOrigin: "center",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
