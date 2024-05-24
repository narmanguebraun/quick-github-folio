import { parseISO, format } from "date-fns";

type RepoDateFormatterProps = {
  dateString: string;
};

export default function RepoDateFormatter({
  dateString,
}: RepoDateFormatterProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "dd/MM/yyyy")}</time>;
}
