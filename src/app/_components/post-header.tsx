// Constants
import { nbsp } from '@/constants/HTML_ENTITIES';

// Types
import { type Author } from "@/interfaces/author";

// Components
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />, {nbsp}
        <DateFormatter dateString={date} />
      </div>
      { coverImage &&
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      }
      
      <div className="max-w-2xl">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-md">
          
        </div>
      </div>
    </>
  );
}
