import { dataAbout } from "@/components/content-option";
import { AboutReveal } from "./AboutReveal";

export function AboutStory() {
  return (
    <AboutReveal>
      <section className="bg-inherit px-[10%] py-[5%]">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-0 mt-0 font-display text-[clamp(1.5rem,4vw,3rem)] font-medium leading-tight text-secondary">
            {dataAbout.title}
          </h2>
          <p className="mt-[5.5%] columns-1 gap-x-[5.5%] font-body text-base leading-relaxed tracking-wide text-secondary md:columns-2">
            {dataAbout.aboutme}
          </p>
        </div>
      </section>
    </AboutReveal>
  );
}
