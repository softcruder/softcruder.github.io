import type { FieldValues, SubmissionError } from "@formspree/core";
import { ValidationError } from "@formspree/react";
import { cn } from "@/lib/utils";
import { siteFieldInputClass, siteFieldLabelClass } from "@/lib/form-field-classes";

export type TextAreaFieldProps = {
  id: string;
  name: string;
  label: string;
  errors: SubmissionError<FieldValues> | null;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  minHeightClass?: string;
  className?: string;
  textAreaClassName?: string;
};

export default function TextAreaField({
  id,
  name,
  label,
  errors,
  placeholder,
  required,
  rows = 6,
  minHeightClass = "min-h-[160px]",
  className,
  textAreaClassName,
}: TextAreaFieldProps) {
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
      <textarea
        className={cn(
          siteFieldInputClass,
          "resize-y",
          minHeightClass,
          textAreaClassName,
        )}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
      <ValidationError prefix={label} field={name} errors={errors} />
    </div>
  );
}
