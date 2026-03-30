export type LicenseMessagePart = {
  text: string;
  linkUrl?: string;
  linkText?: string;
};

type LicenseCardProps = {
  heading: string;
  messageParts: LicenseMessagePart[];
};

/** v2 — Licensing / legal copy block (Tailwind). */
export default function LicenseCard({
  heading,
  messageParts,
}: LicenseCardProps) {
  return (
    <section className="mx-[12%] my-[5%] flex flex-col items-center border border-border bg-site-surface shadow-md max-md:mx-[15%] max-md:my-[7%]">
      <h2 className="w-full p-5 text-center font-display text-[2rem] font-normal capitalize leading-tight text-site-ink max-md:p-2.5 max-md:text-lg">
        {heading}
      </h2>
      <div className="w-full border-t border-[#464646] px-16 py-16 text-left max-md:px-8 max-md:py-8">
        <div className="font-body text-base leading-relaxed text-site-ink max-md:text-sm max-md:leading-5">
          {messageParts.map((part, index) => (
            <span key={index}>
              {part.text}
              {part.linkUrl ? (
                <a
                  className="font-normal lowercase text-[#a1a1a1] underline"
                  href={part.linkUrl}
                >
                  {part.linkText ?? part.text}
                </a>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
