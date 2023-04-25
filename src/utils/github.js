import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
});

export async function getAllCommits(username, repo) {
  const commits = await octokit.repos.listCommits({
    owner: username,
    repo: repo,
    per_page: 100,
  });

  return commits.data;
}
