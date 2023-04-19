// import Outline from '@components/layout-outline'

export const metadata = {
  title: 'Blog',
  description: 'Blog posts mostly about software.',
  alternates: {
    canonical: 'https://regexyl.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <Outline type="layout" name="Blog">
      <article>{children}</article>

  )
}

export const config = { runtime: 'experimental-edge' }
