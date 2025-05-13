import Social from "../components/common/Social";
import ContactForm from "../sections/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="relative">
      <ContactForm></ContactForm>
      <div className="absolute top-1/2 left-2">
        <Social ></Social>
      </div>
    </div>
  );
}
