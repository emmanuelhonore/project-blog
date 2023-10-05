import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';

import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
  const blogPostList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {
        blogPostList.map((blogPost) => (
          <BlogSummaryCard
            key={blogPost.slug}
            slug={blogPost.slug}
            title={blogPost.title}
            abstract={blogPost.abstract}
            publishedOn={blogPost.publishedOn}
          />
        ))
      }
    </div>
  );
}

export const metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION

};

export default Home;