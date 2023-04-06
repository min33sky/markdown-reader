import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';
import React from 'react';

interface Props {
  post: BlogPost;
}

export default function ListItem({ post: { title, date, id } }: Props) {
  const formattedDate = getFormattedDate(date);

  return (
    <li className=" mt-4 text-2xl text-white/90">
      <Link href={`/posts/${id}`} className=" underline hover:text-sky-500/90 ">
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
