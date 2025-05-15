import ContactForm from "../sections/Contact/ContactForm";
import { motion } from "framer-motion";
import ContactCTA from "../sections/Contact/ContactCTA";

export default function Contact() {
  return (
    <div className=" flex flex-col justify-between w-full gap-8 sm:gap-4 ">
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] text-center"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center max-w-xl text-[var(--color-secondary)]"
        >
          I’d love to hear from you. Whether you have a question, proposal or
          just want to say hi — feel free to drop a message.
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <ContactCTA />
        <ContactForm />
      </div>
    </div>
  );
}
