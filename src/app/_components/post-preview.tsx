// Core
import Link from "next/link";
import clsx from 'clsx';

// Types
import { type Author } from "@/interfaces/author";

// Components
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  border?: boolean;
  membership?: boolean;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  border = true,
  membership = false
}: Props) {
  return (
    <div
      className={clsx(
        'p-4 w-full',
        border && 'border border-solid border-gray-400 rounded-md shadow-md'
      )}
    >
      {coverImage && 
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      }
      <div className="underline">
        {membership ? 'Members only' : ''}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline text-black">
          {title}
        </Link>
      </h3>
      <div className="text-md mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
