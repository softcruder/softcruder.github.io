import { PageSeo } from "@/components/v2/seo/PageSeo";
import { AboutHead } from "@/components/About/AboutHead";
import { AboutSkill } from "@/components/About/AboutSkill";
import { AboutStory } from "@/components/About/AboutStory";
import { AboutExperience } from "@/components/About/AboutExperience";
import Footer from "@/components/v2/layout/Footer";
import Navbar from "@/components/v2/layout/Navbar";
import ArrowButton from "@/components/v2/buttons/ArrowButton";
import GsapButton from "@/components/v2/buttons/GsapButton";
import { experience } from "@/components/content-option";
import { sortExperienceForAbout } from "@/lib/sortExperience";
import { useMemo } from "react";

export default function About() {
  const orderedExperience = useMemo(
    () => sortExperienceForAbout(experience),
    [],
  );
  return (
    <>
      <PageSeo
        title="About Me"
        description="Learn more about Nasirullah Oladipo — software engineer, Raenest, Retool, and AltSchool Africa."
      />
      <Navbar isSticky={true} isTransparent={true} />
      <AboutHead />
      <AboutStory />
      <AboutExperience items={orderedExperience} />
      <AboutSkill title="My Skills" />
      <div className="flex items-center justify-between px-[10%] py-[3%]">
        <GsapButton text="HOME" href="/" target="_self" />
        <ArrowButton
          text="PROJECTS"
          direction="right"
          href="/projects"
          target="_self"
        />
      </div>
      <Footer />
    </>
  );
}
