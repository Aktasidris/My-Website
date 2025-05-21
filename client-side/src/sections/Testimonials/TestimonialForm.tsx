import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { submitTestimonial } from "../../store/featuresTestimonials/testimonialsThunks";
import { resetSuccess } from "../../store/featuresTestimonials/TestimonialsSlice";
import { TestimonialFormInput } from "../../store/featuresTestimonials/testimonialTypes";
import { useIPCommented } from "./useIPCommentLimiter";

const TestimonialForm = () => {
  const dispatch = useAppDispatch();
  const { success, loading } = useAppSelector((state) => state.testimonials);
  const { ip: userIp, loading: ipLoading } = useIPCommented();

  const [form, setForm] = useState<TestimonialFormInput>({
    name: "",
    role: "",
    comment: "",
    userIp: "",
  });

  useEffect(() => {
    if (userIp) {
      setForm((prev) => ({ ...prev, userIp }));
    }
  }, [userIp]);

  useEffect(() => {
    if (success) {
      setForm({ name: "", role: "", comment: "", userIp: userIp || "" });
      setTimeout(() => {
        dispatch(resetSuccess());
      }, 3000);
    }
  }, [success, userIp, dispatch]);

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
  };

  if (ipLoading) {
    return <p className="text-center">Yükleniyor...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md shadow-md max-w-xl mx-auto bg-[var(--color-muted)]"
    >
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--color-primary)]">
          Adınız
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-white dark:bg-[var(--color-background)] text-[var(--color-primary)]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--color-primary)]">
          Pozisyon (isteğe bağlı)
        </label>
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded bg-white dark:bg-[var(--color-background)] text-[var(--color-primary)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--color-primary)]">
          Yorumunuz
        </label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded resize-none bg-white dark:bg-[var(--color-background)] text-[var(--color-primary)]"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[var(--color-accent)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition w-full"
      >
        {loading ? "Gönderiliyor..." : "Yorumu Gönder"}
      </button>
    </form>
  );
};

export default TestimonialForm;
