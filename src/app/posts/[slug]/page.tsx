import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import SubscribeForm from "@/app/_components/SubscribeForm";
import Link from "next/link";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  
  const preview = await markdownToHtml(post.content.split('#')[0]);

  // console.log(preview);

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <div className='flex flex-col items-center'>
          <article className="max-w-[700px] mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody 
              content={
                post.membership ? preview : content
              } 
            />
            {
              post.membership ? 
              <div className="text-lg flex flex-col items-center gap-8">
                <div className="flex gap-4 mt-8">
                  <div className="bg-neutral-700 rounded-full w-4 h-4">

                  </div>
                  <div className="bg-neutral-700 rounded-full w-4 h-4">

                  </div>
                  <div className="bg-neutral-700 rounded-full w-4 h-4">

                  </div>
                  <div className="bg-neutral-700 rounded-full w-4 h-4">

                  </div>
                </div>
                <div className="text-lg font-bold text-neutral-900">
                  The full article is available to members
                </div>
                <div className="flex flex-col gap-2 min-w-64 items-center border border-neutral-400 p-4 rounded-md">
                  <Link href='https://buy.stripe.com/eVq7sN3uncg5dVYeke0gw00' className="text-center bg-black w-full px-12 py-2 text-white hover:bg-neutral-700 rounded-md">
                    Join
                  </Link>
                  <div className="text-neutral-700 text-sm font-bold underline">
                    4&euro;/month + VAT
                  </div>
                </div>
              </div>
              : null
            }
          </article>
        </div>
        
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Tech and Business Tips.`;

  return {
    title,
    openGraph: {
      title,
      images: [post?.ogImage?.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
