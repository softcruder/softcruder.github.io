import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AboutHead() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const t = titleRef.current;
    if (!t) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        t,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.15 },
      );
    }, t);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex h-[min(90vh,820px)] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-head.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <h1
        ref={titleRef}
        className="relative z-10 text-center font-display text-[clamp(2.5rem,12vw,5rem)] font-bold leading-tight tracking-tight text-white"
      >
        About Me
      </h1>
    </section>
  );
}
