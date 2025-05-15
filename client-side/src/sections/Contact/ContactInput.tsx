interface ContactInputProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

export default function ContactInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  pattern,
  inputMode,
}: ContactInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      pattern={pattern}
      inputMode={inputMode}
      className="p-3 rounded bg-[var(--color-background)]/20 placeholder:text-[var(--color-primary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-[var(--color-border)] text-[var(--color-primary)]"
    />
  );
}
