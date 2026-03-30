import LicenseCard from "@/components/v2/content/LicenseCard";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import { PageSeo } from "@/components/v2/seo/PageSeo";

export default function LicensingPage() {
  return (
    <>
      <PageSeo
        title="Licensing"
        description="Licensing and attribution for this portfolio — design inspiration and assets."
      />
      <Navbar isSticky={true} isTransparent={false} />
      <section className="z-[-1] mt-[100px]">
        <span className="big-title relative mt-[10%] block text-center font-display text-5xl font-medium max-[767px]:mb-12 max-[767px]:mt-[15%] max-[767px]:text-5xl max-[767px]:leading-[54px]">
          Licensing
        </span>
        <LicenseCard
          heading="Disclaimer"
          messageParts={[
            {
              text: "All images used in this portfolio are not for personal and commercial purposes except for as used by the ",
              linkUrl: "https://softcruder.me",
              linkText: "author",
            },
            {
              text: ". You have to change all the images if you are replicating this template. Please be careful when using other images from the internet. They can be copyright protected, which can lead to issues with the copyright owner and can even lead to big fines. Any business with the same name is intentional. For copyright issues, please contact me directly at ",
              linkUrl: "mailto:softcruder@gmail.com",
              linkText: "softcruder's mail",
            },
            {
              text: " or through the form on the ",
              linkUrl: "/contact",
              linkText: "contact",
            },
            { text: " page." },
          ]}
        />
        <LicenseCard
          heading="Template and Design"
          messageParts={[
            {
              text: "The template and design implemented here is inspired by ",
              linkUrl: "https://alex-grant-template.webflow.io",
              linkText: "Alex Grant",
            },
            {
              text: " webflow template, from the ",
              linkUrl: "https://www.lightninglab.design",
              linkText: "Lightning Lab design studio",
            },
            {
              text: ". It was built with ",
              linkUrl: "https://webflow.com",
              linkText: "Webflow",
            },
            {
              text: "; this site is implemented with React, Next.js, and Tailwind CSS.",
            },
          ]}
        />
        <LicenseCard
          heading="Icons and project previews"
          messageParts={[
            {
              text: "Icons use Lucide, React Icons, and custom SVGs. Project sections may embed live demos in an iframe when allowed; otherwise a fallback links to the live site.",
            },
          ]}
        />
      </section>
      <Footer />
    </>
  );
}
