
import About from "@components/about";
import styles from "./page.module.css";
import Header from "@components/header";
import { Suspense } from "react";
import { PostList } from "@components/posts/post-list";
import PostListClient from "@components/posts/post-list/post-list-client";

export default async function Home() {
  // const [showAbout, setShowAbout] = useState(false);

  // const body = showAbout ? (
  //   <About />
  // ) : (
  //   <Suspense fallback={<PostListClient skeleton />}>
  //     {/* @ts-expect-error async rsc support */}
  //     <PostList paginate={false} />
  //   </Suspense>
  // );

  return (
    <main>
      {/* <Header
        showAbout={showAbout}
        toggleAbout={() => setShowAbout((state) => !state)}
      /> */}
      {/* @ts-expect-error async rsc support */}
      <div className={styles.main}>{<PostList paginate={false} />}</div>
    </main>
  );
}
