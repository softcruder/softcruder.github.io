import Head from "next/head";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
} from "@/components/v2/seo/site";

export type PageSeoProps = {
  title: string;
  /** Full page title; if false, `title` is used as the full <title> text */
  titleTemplate?: boolean;
  description?: string;
  noIndex?: boolean;
  canonicalPath?: string;
};

/**
 * Single place for viewport, favicon, and meta description (DRY).
 */
export function PageSeo({
  title,
  titleTemplate = true,
  description = DEFAULT_DESCRIPTION,
  noIndex,
  canonicalPath,
}: PageSeoProps) {
  const docTitle = titleTemplate ? `${title} | ${SITE_NAME}` : title;

  return (
    <Head>
      <title>{docTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {canonicalPath ? (
        <link rel="canonical" href={`https://softcruder.me${canonicalPath}`} />
      ) : null}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
    </Head>
  );
}
