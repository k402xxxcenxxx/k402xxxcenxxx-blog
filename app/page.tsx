import Link from 'next/link';
import { getWorks, getBlogPosts } from '@/lib/content';

export const metadata = {
  title: 'Home | Portfolio & Blog',
};

export default function HomePage() {
  const works = getWorks('en') || [];
  const posts = getBlogPosts('en') || [];

  const featuredWorks = works.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Hero 區塊 */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Portfolio & Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I&apos;m <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-gray-600 max-w-xl">
            A short introduction about who you are and what you do.
            You can talk about your role, interests, and what kind of work
            or articles people can expect to find here.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/works"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              View Works
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Read Blog
            </Link>
          </div>
        </div>
        {/* TODO: avatar, cover image */}
        {/* <div className="w-40 h-40 rounded-full bg-gray-200" /> */}
      </section>

      {/* Featured Works */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Featured Works</h2>
          <Link
            href="/works"
            className="text-sm text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>

        {featuredWorks.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No works yet. Add some items in <code>content/works</code>.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {featuredWorks.map((work) => (
              <Link
                key={`${work.slug}-${work.lang}`}
                href={`/works/${work.slug}`}
                className="group block border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                {work.coverImage && (
                  <div className="overflow-hidden">
                    <img
                      src={work.coverImage}
                      alt={work.title}
                      className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-3">
                  <h3 className="text-sm font-semibold group-hover:underline">
                    {work.title}
                  </h3>
                  {work.role && (
                    <p className="text-xs text-gray-500 mt-1">{work.role}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Latest Blog Posts */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-sm text-blue-600 hover:underline"
          >
            Read all
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No posts yet. Add some items in <code>content/blog</code>.
          </p>
        ) : (
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={`${post.slug}-${post.lang}`}
                href={`/blog/${post.slug}`}
                className="block border-b border-gray-200 pb-3 hover:bg-gray-50 rounded-md px-2 -mx-2"
              >
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                {post.summary && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
