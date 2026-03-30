/** Canonical social URLs (single source for home, résumé, content-option). */
export const GITHUB_PROFILES = [
  {
    id: "personal",
    label: "Personal",
    href: "https://github.com/softcruder",
  },
  {
    id: "work",
    label: "Work",
    href: "https://github.com/softcruder-rn",
  },
] as const;

export type GithubProfile = (typeof GITHUB_PROFILES)[number];
