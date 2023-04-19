import getPosts, { getPost } from '@lib/get-posts';
import { Mdx } from '@components/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Paage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return (
    <div>
      <Mdx>{post?.body}</Mdx>
    </div>
  );
}
