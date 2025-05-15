interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export default function ContactTextArea({
  name,
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      rows={5}
      className="p-3 rounded bg-[var(--color-background)]/20 placeholder:text-[var(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-[var(--color-border)] resize-none text-[var(--color-primary)]"
    />
  );
}
