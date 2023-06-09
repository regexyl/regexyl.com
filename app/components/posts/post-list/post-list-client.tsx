"use client";

import { useState } from "react";

import PostCard from "@components/posts/post-card";
import styles from "./post-list-client.module.css";
import type { Post } from "@lib/types";

type Props =
  | {
      posts: Post[];
      paginate?: boolean;
    }
  | {
      skeleton: true;
    };

const PostListClient = (props: Props) => {
  const [showMore, setShowMore] = useState(4);

  if ("skeleton" in props) {
    return (
      <ul className={styles.container}>
        {[...Array(4)].map((_, i) => (
          <PostCard key={i} skeleton />
        ))}
      </ul>
    );
  }

  const { posts, paginate } = props;

  return (
    <ul className={styles.container}>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        });

        return (
          <PostCard
            key={`post-item-${post.slug}`}
            href={`/blog/${post.slug}`}
            title={post.title}
            date={new Date(date)}
            description={post.description}
            views={post.views}
          />
        );
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4);
          }}
          className={styles.button}
        >
          Show More
        </button>
      )}
    </ul>
  );
};

export default PostListClient;
