import type { ExperienceEntry } from "@/components/content-option";

function isJob(
  e: ExperienceEntry,
): e is Extract<ExperienceEntry, { startDate: string }> {
  return "startDate" in e && "endDate" in e;
}

function isAward(
  e: ExperienceEntry,
): e is Extract<ExperienceEntry, { date: string }> {
  return "date" in e;
}

/** Oldest roles first (01); current role with endDate "Present" last. */
export function sortExperienceForAbout(entries: ExperienceEntry[]): ExperienceEntry[] {
  const copy = [...entries];
  return copy.sort((a, b) => {
    if (isJob(a) && isJob(b)) {
      const aPresent = a.endDate === "Present";
      const bPresent = b.endDate === "Present";
      if (aPresent !== bPresent) {
        return aPresent ? 1 : -1;
      }
      const aEnd = Date.parse(`${a.endDate} 1`);
      const bEnd = Date.parse(`${b.endDate} 1`);
      const aT = Number.isNaN(aEnd) ? 0 : aEnd;
      const bT = Number.isNaN(bEnd) ? 0 : bEnd;
      return aT - bT;
    }
    if (isAward(a) && isAward(b)) {
      return Date.parse(a.date) - Date.parse(b.date);
    }
    if (isJob(a) && isAward(b)) return -1;
    if (isAward(a) && isJob(b)) return 1;
    return 0;
  });
}
