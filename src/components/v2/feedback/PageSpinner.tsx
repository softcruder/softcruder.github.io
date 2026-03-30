import { cn } from "@/lib/utils";

type PageSpinnerProps = {
  /** Full-viewport overlay (e.g. blocking load). */
  fullScreen?: boolean;
  label?: string;
  className?: string;
};

/** Shared loading indicator — same dot animation tokens as MainPageLoader (globals.css). */
export default function PageSpinner({
  fullScreen,
  label,
  className,
}: PageSpinnerProps) {
  const dots = (
    <div className="flex items-center">
      <div
        className="main-preloader-dot mx-[5px] h-2.5 w-2.5 rounded-full bg-white"
        style={{ animationDelay: "75ms" }}
      />
      <div
        className="main-preloader-dot mx-[5px] h-2.5 w-2.5 rounded-full bg-white"
        style={{ animationDelay: "125ms" }}
      />
      <div
        className="main-preloader-dot mx-[5px] h-2.5 w-2.5 rounded-full bg-white"
        style={{ animationDelay: "200ms" }}
      />
    </div>
  );

  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        fullScreen ? "min-h-0" : "min-h-[40vh] py-12",
        className,
      )}
    >
      {dots}
      {label ? (
        <p className="font-body text-sm text-site-ink-muted">{label}</p>
      ) : null}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-998 flex flex-col items-center justify-center bg-site-page/95">
        {content}
      </div>
    );
  }

  return content;
}
