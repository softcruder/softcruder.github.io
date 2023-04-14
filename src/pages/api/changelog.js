import { Octokit } from "@octokit/rest";
import { getAllCommits } from "@/utils/github";

export default async function handler(req, res) {
    const commits = await getAllCommits("softcruder", "softcruder.github.io");
  
    res.status(200).json(commits);
  }
  