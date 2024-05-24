import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, TwitterIcon } from "@/components/Icons";
import { type User } from "@/types/user";

type UserProfileProps = {
  user: User;
};

export default async function UserProfile({ user }: UserProfileProps) {
  return (
    <section className="flex flex-col items-center py-24">
      <Image
        src={user.avatar_url}
        width={96}
        height={96}
        alt={`${user.name}`}
        title={`${user.name}`}
        className="rounded-full"
        priority
      />
      <h1 className="m-3">{user.name}</h1>
      {user.bio && <h2>{user.bio}</h2>}

      <div className="m-3 flex flex-row items-center justify-center gap-6">
        <Link href={user.html_url}>
          <GitHubIcon />
        </Link>
        {user.twitter_username && (
          <Link href={`https://twitter.com/${user.twitter_username}`}>
            <TwitterIcon />
          </Link>
        )}
      </div>

      {user.blog && <div>{user.blog}</div>}
    </section>
  );
}
