import { getAllPosts } from '@/lib/api';
import generateRssFeed from '@/lib/rssFeed';

export function GET() {

    const posts = getAllPosts();

    const feed = generateRssFeed(posts);

    return new Response(feed, {
        status: 200,
        headers: { "Content-Type": "application/rss+xml" },
    });
}