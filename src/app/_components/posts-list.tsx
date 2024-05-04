// Types
import { Post } from '@/interfaces/post';
import { PostPreview } from './post-preview';

type PostsListProps = {
    posts: Post[]
}

export default function PostsList({ posts }: PostsListProps) {
    return (
        <div>
            {posts.map(post => 
                <PostPreview
                    title={post.title}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                />
            )}
        </div>
    )
}