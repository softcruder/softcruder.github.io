import type { FieldValues, SubmissionError } from "@formspree/core";
import { ValidationError } from "@formspree/react";
import { cn } from "@/lib/utils";
import { siteFieldInputClass, siteFieldLabelClass } from "@/lib/form-field-classes";

export type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  errors: SubmissionError<FieldValues> | null;
  placeholder?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  className?: string;
  inputClassName?: string;
};

export default function InputField({
  id,
  name,
  label,
  errors,
  placeholder,
  required,
  type = "text",
  autoComplete,
  className,
  inputClassName,
}: InputFieldProps) {
  return (
    <div className={cn("flex flex-col gap-0", className)}>
      <label className={siteFieldLabelClass} htmlFor={id}>
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        className={cn(siteFieldInputClass, inputClassName)}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
      <ValidationError prefix={label} field={name} errors={errors} />
    </div>
  );
}
