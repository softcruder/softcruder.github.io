import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

type Step = 0 | 1 | 2 | 3;

/** Full-screen intro loader. Phases are timed in React so layout/CSS animations cannot fight Next/Image or headings. */
export default function MainPageLoader() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(0);
  const [clientMobile, setClientMobile] = useState(false);

  const showLoader =
    router.pathname === "/" ||
    router.pathname === "/home" ||
    router.pathname === "/contact";

  // Resolve device after mount so SSR/client markup for the icon matches hydration.
  useEffect(() => {
    const id = window.setTimeout(() => setClientMobile(isMobile), 0);
    return () => window.clearTimeout(id);
  }, []);

  // Orchestrate dots → title → strike → icon (timers; initial step is 0 from useState).
  useEffect(() => {
    if (!showLoader) return;
    const t1 = window.setTimeout(() => setStep(1), 1150);
    const t2 = window.setTimeout(() => setStep(2), 1980);
    const t3 = window.setTimeout(() => setStep(3), 2780);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [showLoader]);

  if (!showLoader) return null;

  return (
    <div className="main-preloader fixed inset-0 z-9999 flex flex-col items-center justify-center bg-site-canvas">
      <div className="flex w-full max-w-lg flex-col items-center gap-0">
        {step === 0 ? (
          <div className="flex items-center justify-center py-1" aria-hidden>
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
        ) : null}

        {step >= 1 ? (
          <h1 className="main-preloader-fade-up w-full text-center font-body text-[32px] font-normal leading-tight text-site-ink max-[991px]:text-xl">
            &lt;SOFTCRUDER /&gt;{" "}
            <span className="font-display text-sm text-brand-muted">v2.2</span>
          </h1>
        ) : null}

        {step >= 2 ? (
          <div
            className="main-preloader-strike-line mt-3 h-1 w-[70%] max-w-md rounded-[60%] bg-site-strike"
            aria-hidden
          />
        ) : null}

        {step >= 3 ? (
          <div className="main-preloader-fade-up mt-3 flex w-[100px] flex-col items-center justify-center max-[991px]:w-16">
            {clientMobile ? (
              <Image
                src="/images/smartphone-white.svg"
                width={64}
                height={64}
                alt=""
              />
            ) : (
              <Image
                src="/images/monitor-white.svg"
                width={100}
                height={100}
                alt=""
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
