import {
  Braces,
  Code2,
  Database,
  FileCode2,
  Layers,
  LayoutTemplate,
  Network,
  Workflow,
} from "lucide-react";
import { proficientSkills } from "@/components/content-option";
import { AboutReveal } from "./AboutReveal";

const icons = [
  Code2,
  FileCode2,
  Layers,
  Braces,
  LayoutTemplate,
  Database,
  Workflow,
  Network,
];

export function AboutSkill({ title }: { title: string }) {
  return (
    <AboutReveal>
      <section className="flex flex-col gap-10 px-[10%] py-[5%] md:flex-row md:justify-between">
        <h2 className="mt-0 shrink-0 font-display text-[clamp(1.5rem,4vw,3rem)] font-medium leading-tight text-secondary">
          {title}
        </h2>
        <ul className="flex w-full flex-col gap-4 md:max-w-md md:pt-8">
          {proficientSkills.map((skill, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li
                key={skill.name}
                className="flex items-center justify-between gap-4 border-b border-[#464646]/80 py-3 last:border-b-0"
              >
                <Icon
                  className="size-8 shrink-0 text-white"
                  aria-hidden
                  strokeWidth={1.25}
                />
                <span className="font-body text-sm uppercase tracking-wide text-secondary">
                  {skill.name}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </AboutReveal>
  );
}
