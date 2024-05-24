export type RepoTagProps = {
  children: string;
};

export default function RepoTag({ children }: RepoTagProps) {
  return (
    <li className="mr-3 inline-block break-words font-mono text-[12px]">
      {children}
    </li>
  );
}
