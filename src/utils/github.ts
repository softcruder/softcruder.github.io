/**
 * Public GitHub REST API — works in the browser (static export / GitHub Pages).
 * Optional NEXT_PUBLIC_GITHUB_API_TOKEN raises rate limits for authenticated calls.
 */
export type GithubCommit = {
  sha: string;
  commit: {
    author: { name: string; date: string };
    message: string;
  };
};

const ACCEPT = "application/vnd.github+json";

export async function getAllCommits(
  owner: string,
  repo: string,
  perPage = 100,
): Promise<GithubCommit[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}`;
  const headers: HeadersInit = { Accept: ACCEPT };
  const token =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_GITHUB_API_TOKEN
      : undefined;
  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `GitHub API ${res.status}: ${text.slice(0, 200) || res.statusText}`,
    );
  }

  const data: unknown = await res.json();
  if (!Array.isArray(data)) {
    throw new Error("Unexpected GitHub API response");
  }
  return data as GithubCommit[];
}
