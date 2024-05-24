import RepoCard from "@/components/RepoCard";
import { type Repository } from "@/types/repositories";

type RepositoryListProps = {
  repos: Repository[];
};

// Sorting public repositories from the latest you contributed to: pushed_at.

export default async function RepositoryList({ repos }: RepositoryListProps) {
  return (
    <>
      {repos
        .sort((repo1, repo2) => (repo1.pushed_at > repo2.pushed_at ? -1 : 1))
        .map((repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
    </>
  );
}
