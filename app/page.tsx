import styles from './page.module.css';
import Header from '@components/header';
import { Suspense } from 'react';
import { PostList } from '@components/posts/post-list';
import PostListClient from '@components/posts/post-list/post-list-client';
import About from '@about/page';

export default async function Home() {
  return (
    <main>
      <About />
      {/* <Header showAbout={false} /> */}
      {/* 
      <Suspense fallback={<PostListClient skeleton />}>
        @ts-expect-error async rsc support
        <div className={styles.main}>{<PostList paginate={false} />}</div>
      </Suspense>
       */}
    </main>
  );
}
