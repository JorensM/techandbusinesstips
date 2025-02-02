import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import PostsList from './_components/posts-list';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <>
      <Container>
        <Intro />
        <main className='flex flex-col items-center pb-8'>
          <div className='max-w-[1480px] w-full'>
            <h2 className='text-lg font-medium my-4'>Featured</h2>
            <PostsList
              posts={allPosts}
            />
          </div>
        </main>
        
      </Container>
    </>
      
  );
}
