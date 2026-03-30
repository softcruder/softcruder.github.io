import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { cn } from "@/lib/utils";

/** v2 — Site footer (Tailwind only). */
export default function Footer({ isSticky }: { isSticky?: boolean }) {
  return (
    <footer
      className={cn(
        "mt-5 flex justify-center bg-site-surface px-1 py-1.5 text-xs leading-[18px] tracking-wide text-site-ink-muted md:text-xs",
        isSticky ? "fixed bottom-0 left-0 right-0 z-10" : "",
      )}
    >
      <div className="flex w-full max-w-[1640px] flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center p-2.5 text-center md:flex-1 md:items-start md:p-5 md:text-left">
          <p className="m-0 text-[10px] leading-4 md:text-xs md:leading-[18px]">
            <span className="text-white">© Nasirullah Oladipo</span>
            <br />
            Made with{" "}
            <span className="text-site-ink-body normal-case">
              React <FaReact className="inline align-[-0.125em]" aria-hidden />
            </span>{" "}
            and powered by{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noreferrer">
              <span className="text-site-ink-body normal-case">
                Next.js <SiNextdotjs className="inline align-[-0.125em]" />
              </span>
            </Link>
            . | Portfolio:{" "}
            <Link href="/changelog">
              <span className="text-site-ink-body normal-case">v2.2</span>
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center p-0 md:flex-1 md:items-end md:px-2.5">
          <ul className="m-0 flex list-none flex-wrap justify-center gap-1 p-0 md:justify-end">
            <li className="px-1 py-1.5 md:px-1.5 md:py-0">
              <Link
                href="/resume"
                className="text-[10px] leading-4 text-site-ink-muted no-underline normal-case hover:text-site-ink-body hover:underline md:text-xs md:leading-[18px]"
              >
                Résumé
              </Link>
            </li>
            <li className="px-1 py-1.5 md:px-1.5 md:py-0">
              <Link
                href="https://softcruder.github.io/v1"
                className="text-[10px] leading-4 text-site-ink-muted no-underline normal-case hover:text-site-ink-body hover:underline md:text-xs md:leading-[18px]"
              >
                version 1
              </Link>
            </li>
            <li className="px-1 py-1.5 md:px-1.5 md:py-0">
              <Link
                href="/style-guide"
                className="text-[10px] leading-4 text-site-ink-muted no-underline normal-case hover:text-site-ink-body hover:underline md:text-xs md:leading-[18px]"
              >
                Style Guide
              </Link>
            </li>
            <li className="px-1 py-1.5 md:px-1.5 md:py-0">
              <Link
                href="/licensing"
                className="text-[10px] leading-4 text-site-ink-muted no-underline normal-case hover:text-site-ink-body hover:underline md:text-xs md:leading-[18px]"
              >
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
