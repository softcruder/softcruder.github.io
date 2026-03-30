import { useForm } from "@formspree/react";
import SubmitSpinner from "@/components/v2/buttons/SubmitSpinner";
import InputField from "@/components/v2/forms/InputField";
import TextAreaField from "@/components/v2/forms/TextAreaField";
import { siteCtaMinSize } from "@/lib/cta-button-classes";
import { cn } from "@/lib/utils";

const FORM_ID =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim()) ||
  "xjvdpvrv";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div
        className="rounded-lg border border-border bg-site-surface/80 px-6 py-8"
        role="status"
      >
        <p className="m-0 font-body text-lg leading-relaxed text-site-ink">
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex max-w-xl flex-col gap-5 font-body"
      onSubmit={handleSubmit}
      noValidate
    >
      <InputField
        id="name"
        name="name"
        label="Name"
        errors={state.errors}
        placeholder="Your name"
        required
        autoComplete="name"
      />
      <InputField
        id="subject"
        name="subject"
        label="Subject"
        errors={state.errors}
        placeholder="Subject"
        required
      />
      <InputField
        id="email"
        name="email"
        label="Email"
        errors={state.errors}
        placeholder="you@example.com"
        required
        type="email"
        autoComplete="email"
      />
      <TextAreaField
        id="message"
        name="message"
        label="Message"
        errors={state.errors}
        placeholder="How can I help?"
        required
        rows={6}
      />

      <button
        type="submit"
        disabled={state.submitting}
        className={cn(
          siteCtaMinSize,
          "inline-flex cursor-pointer items-center justify-center border border-secondary bg-transparent text-site-ink-body transition-colors hover:bg-secondary hover:text-primary disabled:opacity-50",
        )}
      >
        {state.submitting ? <SubmitSpinner /> : "Submit"}
      </button>
    </form>
  );
}
