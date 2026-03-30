import useSWR from "swr";

import type { Project } from "@/types/project";

async function fetchProjects(url: string): Promise<Project[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not load projects (${res.status})`);
  }
  return res.json() as Promise<Project[]>;
}

export function useProjectsJson() {
  return useSWR<Project[], Error>("/projects.json", fetchProjects, {
    revalidateOnFocus: false,
  });
}
