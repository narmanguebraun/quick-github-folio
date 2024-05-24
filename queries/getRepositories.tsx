import { GITHUB_USERNAME } from "@/data/github";
import { type Repository } from "@/types/repositories";

const user = GITHUB_USERNAME;

export async function getRepositories(): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
