import ContactForm from "../sections/Contact/ContactForm";
import { motion } from "framer-motion";
import ContactCTA from "../sections/Contact/ContactCTA";
import { contactpagedata } from "../data/contactPage";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";
export default function Contact() {
const lang = useAppSelector((state: RootState) => state.app.lang);   return (
    <div className=" flex flex-col justify-between w-full h-full gap-8 sm:gap-4 ">
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] text-center"
        >
          {contactpagedata.title[lang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center max-w-xl text-[var(--color-secondary)]"
        >
          {contactpagedata.description[lang]}
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center  md:items-start gap-4">
        <ContactCTA />
        <ContactForm />
      </div>
    </div>
  );
}
