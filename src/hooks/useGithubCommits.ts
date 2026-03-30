import useSWR from "swr";

import { getAllCommits, type GithubCommit } from "@/utils/github";

export function useGithubCommits(owner: string, repo: string) {
  return useSWR<GithubCommit[], Error>(
    owner && repo ? ["github-commits", owner, repo] : null,
    () => getAllCommits(owner, repo),
    { revalidateOnFocus: false },
  );
}
