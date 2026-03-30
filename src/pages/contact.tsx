import dynamic from "next/dynamic";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import { PageSeo } from "@/components/v2/seo/PageSeo";

const ContactForm = dynamic(() => import("@/components/v2/forms/ContactForm"), {
  ssr: false,
  loading: () => (
    <p className="font-body text-sm text-site-ink-muted">Loading form…</p>
  ),
});

export default function ContactPage() {
  return (
    <>
      <PageSeo
        title="Contact"
        description="Send a message to Nasirullah Oladipo, software engineer at Raenest."
      />
      <Navbar isSticky={true} isTransparent={false} />
      <section className="z-[-1] bg-site-page px-6 py-16 max-[991px]:mt-[46px] md:px-[10%] md:py-[8%]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="min-w-0 shrink-0 md:max-w-md">
            <span className="big-title block font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight [text-shadow:0_0_16px_rgba(16,16,16,0.3)]">
              Contact
            </span>
            <p className="mt-6 font-body text-base leading-relaxed text-site-ink-muted">
              Questions, collaboration, or feedback: send a message and
              I&apos;ll reply as soon as I can.
            </p>
          </div>
          <div className="mt-2 min-w-0 flex-1 rounded-lg bg-site-surface/40 p-6 md:mt-[10px] md:min-w-[400px] md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
