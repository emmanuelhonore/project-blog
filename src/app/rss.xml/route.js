import RSS from "rss";

import { BLOG_DESCRIPTION, BLOG_TITLE, BLOG_URL } from "@/constants";
import { getBlogPostList } from '@/helpers/file-helpers';

export async function GET() {
  // set up basic feed info
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site_url: BLOG_URL,
    feed_url: `${BLOG_URL}/rss.xml`,
  })

  // get post list
  const blogPosts = await getBlogPostList();

  // loop over our posts and add them to to the feed
  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `${BLOG_URL}/${post.slug}`
    })
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}