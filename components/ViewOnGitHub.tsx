import Link from "next/link";
import { GitHubIcon } from "@/components/Icons";
import { GITHUB_USERNAME } from "@/data/github";

export default function ViewOnGitHub() {
  return (
    <Link
      href={`https://github.com/${GITHUB_USERNAME}/quick-folio`}
      className="flex items-center gap-2 rounded-lg border border-white px-2 py-1 hover:border-lightblue hover:text-lightblue"
    >
      <GitHubIcon />
      View on GitHub
    </Link>
  );
}
