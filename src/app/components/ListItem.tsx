import getFormattedDate from '../../../lib/getFormatedDate';
import Link from 'next/link';
type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;

  const formattedDate = getFormattedDate(date);

  return (
    <li className="list-none leading-4">
      <Link href={`/posts/${id}`} className="hover:text-amber-400">
        {title}
      </Link>
      <br />
      <p className="text-sm">{formattedDate}</p>
    </li>
  );
}
