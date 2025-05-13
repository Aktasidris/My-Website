import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";
import { clearMessages } from "../../store/featuresContact/contactSlice";
import { sendMessage } from "../../store/featuresContact/contactThunks";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { RootState, useAppDispatch } from "../../store";
export default function ContactForm() {
  const dispatch = useAppDispatch();
  const { loading, successMessage, error } = useSelector(
    (state: RootState) => state.contact
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    telno: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendMessage(formData));
  };
  useEffect(() => {
    if (loading === "loading") {
      toast.info("Sending message...");
    }
    if (loading === "succeeded" && successMessage) {
      toast.success(successMessage);
      setFormData({
        name: "",
        email: "",
        message: "",
        telno: "",
        subject: "",
      });
      dispatch(clearMessages());
    }
    if (loading === "failed" && error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [loading, successMessage, error, dispatch]);
  return (
    <div className="w-4/5 sm:w-2/3 mx-auto p-6 bg-[var(--color-background)/30 backdrop-blur-xl rounded-xl shadow-lg  shadow-(color:--color-secondary ) m-auto border-1 border-[var(--color-border)]">
      <h1 className="text-center text-3xl font-bold text-[var(--color-primary)]">
        Contact
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[var(--color-background)]/20 placeholder:text-[(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] shadow-lg text-[(--color-primary)] border-1 border-[var(--color-border)]"
        />
        <input
          type="email"
          name="email"
          placeholder="yourmail@mail.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[var(--color-background)]/20 text-[(--color-primary)] placeholder:text-[(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border-1 border-[var(--color-border)]"
        />
        <input
          type="tel"
          name="telno"
          placeholder="+90 555 55 5555 (optional)"
          inputMode="tel"
          pattern="^\+?[1-9]\d{1 ,14}$"
          value={formData.telno}
          onChange={handleChange}
          className="p-3 rounded bg-[var(--color-background)]/20 text-[(--color-primary)] placeholder:text-[(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border-1 border-[var(--color-border)]"
        />

        {/* Konu (İsteğe Bağlı) */}
        <input
          type="text"
          name="subject"
          placeholder="Contact Subject (optional)"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 rounded bg-[var(--color-background)]/20 text-[(--color-primary)] placeholder:text-[(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border-1 border-[var(--color-border)]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded bg-[var(--color-background)]/20 text-[(--color-primary)] placeholder:text-[(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border-1 border-[var(--color-border)] resize-none"
        />
        <button
          type="submit"
          className="bg-[var(--color-accent)] text-[var(--color-primary)] py-3 px-6 rounded shadow-md hover:scale-[1.02] transition-transform font-semibold "
        >
          {loading == "loading" ? (
            <div className="flex items-center gap-2">
              Sending <AiOutlineLoading3Quarters className="animate-spin" />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 hover:gap-5 transition-transform">
              Send
              <IoSend />
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
