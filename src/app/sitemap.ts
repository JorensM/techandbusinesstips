import { getAllPosts } from '@/lib/api';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

    const posts = getAllPosts();
    // Don't forget to include https://
    const websiteURL = 'https://techandbusinesstips.com'
    const postsURL = websiteURL + '/posts/';

    return [
        {
            url: websiteURL
        },
        ...posts.map(post => ({
            url: postsURL + post.slug
        }))
    ]
}