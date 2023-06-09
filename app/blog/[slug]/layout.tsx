import getPosts from '@lib/get-posts';
import Navigation from './post/navigation';
import PostFooter from './post/post-footer';
import styles from './layout.module.css';
import { Metadata } from 'next';
import Link from '@components/link';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getPosts()).find((p) => p?.slug === params.slug);
  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://regexyl.com/blog/${params.slug}`,
    },
  };
};

async function getData({ slug }: { slug: string }) {
  const posts = await getPosts();
  const postIndex = posts.findIndex((p) => p?.slug === slug);
  const post = posts[postIndex];
  const { ...rest } = post;

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    ...rest,
  };
}

export default async function PostLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) {
  const { previous, next, title, date, lastModified } = await getData(params);

  const lastModifiedDate = lastModified
    ? new Date(lastModified).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <>
      <Link href={'/'}>Home</Link>

      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
        {lastModified ? (
          <span className={styles.lastModified}>
            Last modified {lastModifiedDate}
          </span>
        ) : null}
        {/* {updatedViews && <FadeIn>{updatedViews} views</FadeIn>} */}
      </div>

      <article>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.postBody}>{children}</div>
      </article>

      <PostFooter />
      <Navigation previous={previous} next={next} />
    </>
  );
}
