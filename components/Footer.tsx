import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 p-6">
      <p>
        Made with
        <Link href="https://nextjs.org/" className="ml-1">
          Next.js
        </Link>
        ,
        <Link href="https://tailwindcss.com/" className="ml-1">
          Tailwind CSS
        </Link>
        , and using
        <Link href="https://github.com/" className="ml-1">
          GitHub API
        </Link>
        .
      </p>
    </footer>
  );
}
