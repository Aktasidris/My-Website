import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import Social from "../../components/common/Social";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { sendMessage } from "../../store/featuresContact/contactThunks";
import { clearMessages } from "../../store/featuresContact/contactSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const { loading, successMessage, error } = useSelector((state: RootState) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    telno: "",
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendMessage(formData));
  };

  useEffect(() => {
    if (loading === "loading") toast.info("Sending message...");
    if (loading === "succeeded" && successMessage) {
      toast.success(successMessage);
      setFormData({ name: "", email: "", message: "", telno: "", subject: "" });
      dispatch(clearMessages());
    }
    if (loading === "failed" && error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [loading, successMessage, error, dispatch]);

  return (
    <div className="flex flex-col w-full sm:w-1/2 p-6 bg-[var(--color-background)]/70 backdrop-blur-3xl rounded-xl border-4 border-[var(--color-border)] order-first md:order-last">
      <h1 className="text-center text-3xl font-bold text-[var(--color-primary)]">Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 my-6">
        <ContactInput name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <ContactInput type="email" name="email" placeholder="yourmail@mail.com" value={formData.email} onChange={handleChange} required />
        <ContactInput type="tel" name="telno" placeholder="+90 555 555 50 50 (optional)" value={formData.telno} onChange={handleChange} pattern="^\+?[1-9]\d{1,14}$" inputMode="tel" />
        <ContactInput name="subject" placeholder="Contact Subject (optional)" value={formData.subject} onChange={handleChange} />
        <ContactTextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
        <button type="submit" className="bg-[var(--color-accent)] text-[var(--color-primary)] py-3 px-6 rounded shadow-md hover:scale-[1.02] transition-transform font-semibold">
          {loading == "loading" ? (
            <div className="flex items-center gap-2">Sending <AiOutlineLoading3Quarters className="animate-spin" /></div>
          ) : (
            <div className="flex items-center justify-center gap-2 hover:gap-5 transition-transform">Send <IoSend /></div>
          )}
        </button>
      </form>

      <Social direction="row" />
    
    </div>
  );
}
