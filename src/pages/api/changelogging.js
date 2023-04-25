import { getAllCommits } from "@/utils/github";

export default async function handler(req, res) {
  try {
    const commits = await getAllCommits("softcruder", "softcruder.github.io");
    res.status(200).json(commits);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

  