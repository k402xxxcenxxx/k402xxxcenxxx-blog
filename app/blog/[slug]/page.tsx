import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import { Navbar } from '@/components/layout/Navbar';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts('en');
  if (posts.length > 0) {
    return posts.map((post) => ({ slug: post.slug }));
  } else {
    return [{ slug: "not-found" }];
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, 'en');

  if (!post) {
    return notFound();
  }

  const htmlContent = await markdownToHtml(post.content);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-20 pb-8">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full mb-6 rounded"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
}
