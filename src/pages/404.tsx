import Image from "next/image";
import GsapButton from "@/components/v2/buttons/GsapButton";
import { PageSeo } from "@/components/v2/seo/PageSeo";

export default function NotFound() {
  return (
    <>
      <PageSeo
        title="Page Not Found"
        titleTemplate={false}
        description="The page does not exist on this website."
      />
      <section className="mx-[10%] flex h-[90vh] items-center justify-center gap-2">
        <div className="flex max-w-[60vw] flex-col items-center justify-center text-center">
          <Image
            src="/images/no-file.svg"
            alt=""
            width={120}
            height={120}
            className="opacity-90"
          />
          <h1 className="mt-6 font-display text-3xl font-medium text-site-ink">
            Page Not Found
          </h1>
          <p className="muted-text mt-4 font-body text-site-ink-muted">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <div className="mt-8">
            <GsapButton text="Go Back Home" href="/" target="_self" />
          </div>
        </div>
      </section>
    </>
  );
}
