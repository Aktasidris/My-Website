import { IconType } from "react-icons";
import CTABox from "../../components/common/CTABox";

interface SectioninfoProps {
  title: string;
  description?: string;
  cta?: ctaType;
}
type ctaType = {
  text: string;
  to: string;
  Icon?: IconType;
  buttonlabel: string;
};
import { motion } from "framer-motion";

export default function Sectioninfo({
  title,
  description,
  cta,
}: SectioninfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-[var(--color-accent)]/10 p-4 rounded mt-6 text-center flex flex-col items-center justify-center gap-4 w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      <p className="text-center text-[var(--color-secondary)] max-w-lg">
        {description}
      </p>
      {cta && (
        <div className="mt-4 w-full ">
          <CTABox
            to={cta.to}
            text={cta.text}
            Icon={cta.Icon}
            buttonLabel={cta.buttonlabel}
          />
        </div>
      )}
    </motion.div>
  );
}
