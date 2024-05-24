import Link from "next/link";
import { GitHubIcon } from "@/components/Icons";
import RepoTag from "@/components/RepoTag";

type RepoCardProps = {
  description: string;
  html_url: string;
  name: string;
  topics: string[];
};

export default function RepoCard({
  description,
  html_url,
  name,
  topics,
}: RepoCardProps) {
  return (
    <Link
      title="view code on GitHub"
      href={html_url}
      className="hover:text-lightblue"
    >
      <div className="flex min-h-[320px] flex-col justify-between rounded-lg border p-6">
        <div>
          <div className="flex justify-between">
            <h2>{name}</h2>
            <GitHubIcon />
          </div>
          <ul className="my-3">
            {topics?.map((topic) => <RepoTag key={topic}>{topic}</RepoTag>)}
          </ul>
        </div>
        <div>{description && <>{description}</>}</div>
      </div>
    </Link>
  );
}
