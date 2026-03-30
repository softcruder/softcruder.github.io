import { BtnLoader } from "@/components/Buttons/ButtonOps";
import { siteCtaMinSize } from "@/lib/cta-button-classes";
import { cn } from "@/lib/utils";

type LoadingButtonProps = {
  text: string;
  loading?: boolean;
  type?: "button" | "submit";
  className?: string;
};

export default function LoadingButton({
  text,
  loading = false,
  type = "button",
  className,
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      disabled={loading}
      className={cn(
        siteCtaMinSize,
        "inline-flex items-center justify-center border border-secondary bg-transparent text-site-ink-body transition-colors hover:bg-secondary hover:text-primary disabled:opacity-60",
        className,
      )}
    >
      {loading ? <BtnLoader /> : text}
    </button>
  );
}
