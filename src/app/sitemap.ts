import { getAllPosts } from '@/lib/api';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

    const posts = getAllPosts();
    const websiteURL = 'techandbusinesstips.com'
    const postsURL = websiteURL + '/posts/';

    return [
        {
            url: websiteURL
        },
        ...posts.map(post => ({
            url: postsURL + post.slug,
            lastModified: post.date
        }))
    ]
}