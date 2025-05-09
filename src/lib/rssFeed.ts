

import { Post } from '@/interfaces/post';
import fs from "fs";
import RSS from "rss";

export default function generateRssFeed(allPosts: Post[]) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://techandbusinesstips.com"
      : "http://localhost:3000";

  const feedOptions = {
    title: "Tech and Business Tips | RSS Feed",
    description: "Welcome to tech and business tips RSS feed",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${site_url}/posts/${post.slug}`,
      date: post.date,
    });
  });

  return feed.xml({ indent: true });

  // Write the RSS feed to a file as XML.
  //fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}