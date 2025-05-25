import React, { useEffect, useState } from "react";
//hooks and store
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchTestimonials,
  submitTestimonial,
} from "../../store/featuresTestimonials/testimonialsThunks";

import { TestimonialFormInput } from "../../store/featuresTestimonials/testimonialTypes";
import { RootState } from "../../store";
//muı and icons
import { Avatar } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
//lang data
import { testimonialdata } from "../../data/testimonialPage";
import { toast } from "react-toastify";

type TestimonialFormProps = {
  userIp: string;
  onSubmitSuccess: () => void;
};

const TestimonialForm: React.FC<TestimonialFormProps> = ({
  userIp,
  onSubmitSuccess,
}) => {
  const lang = useAppSelector((state: RootState) => state.app.lang);
  const dispatch = useAppDispatch();
  const { success, loading, error } = useAppSelector(
    (state) => state.testimonials
  );

  const [form, setForm] = useState<TestimonialFormInput>({
    name: "",
    role: "",
    comment: "",
    userIp,
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, userIp }));
  }, [userIp]);

  useEffect(() => {
    if (success) {
      setForm({ name: "", role: "", comment: "", userIp });
      toast.success(`${form.name} yorumunuz eklendi.`);
    }
    if (error) {
      toast.error(`${error}}`);
    }
    if (loading) {
      toast.info(`${form.name} mesajınız gönderiliyor`);
    }
  }, [success, loading, error, userIp, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.comment && form.userIp) {
      dispatch(submitTestimonial(form));
    }
    dispatch(fetchTestimonials());
    onSubmitSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-[var(--color-muted)] shadow-2xl p-4"
    >
      <div className="flex items-center gap-2">
        <Avatar sx={{ height: 60, width: 60 }} />
        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-[var(--color-primary)]">
            {testimonialdata[lang].testimonialform.placeholders.name}
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-white dark:bg-[var(--color-background)] text-[var(--color-primary)]"
            required
          />
          <label className="block text-sm font-medium mb-1 text-[var(--color-primary)]">
            {testimonialdata[lang].testimonialform.placeholders.role}
          </label>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-white dark:bg-[var(--color-background)] text-[var(--color-primary)]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--color-primary)]">
          {testimonialdata[lang].testimonialform.placeholders.textarea}
        </label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded resize-none bg-white dark:bg-[var(--color-background)] text-[var(--color-primary)]"
          rows={4}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition w-full flex items-center justify-center gap-2"
        >
          {loading
            ? testimonialdata[lang].testimonialform.button.loading
            : testimonialdata[lang].testimonialform.button.label}
          {loading ? (
            <span className="animate-spin">
              <AiOutlineLoading3Quarters />
            </span>
          ) : (
            <span className="animate-bounce">
              <FaCommentDots />
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;
