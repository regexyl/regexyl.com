import getPosts from '@lib/get-posts'
import PostsListClient from './post-list-client'

const fetchPosts = async () => {
  const posts = await getPosts()
  return posts
}

// RSC
export async function PostList({ paginate }: { paginate?: boolean }) {
  const posts = await fetchPosts()
  return <PostsListClient posts={posts} paginate={paginate} />
}
