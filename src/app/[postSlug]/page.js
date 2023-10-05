import React from 'react';
import { notFound } from 'next/navigation';

import { MDXRemote } from 'next-mdx-remote/rsc'

import COMPONENTS_MAP from '@/helpers/components-helper';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';


import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug)

  if (!blogPost) { notFound() }

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blogPost.frontmatter.title}
        publishedOn={blogPost.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={blogPost.content} components={COMPONENTS_MAP} />

      </div>
    </article>
  );
}

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  if (!blogPost) { return null }

  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract

  };
}

export default BlogPost;
