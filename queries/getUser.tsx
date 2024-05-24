import { GITHUB_USERNAME } from "@/data/github";
import { type User } from "@/types/user";

const user = GITHUB_USERNAME;

export async function getUser(): Promise<User> {
  const res = await fetch(`https://api.github.com/users/${user}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
