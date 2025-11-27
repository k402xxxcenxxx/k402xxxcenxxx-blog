import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getBlogPosts('en');
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug, 'en');

  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full mb-6 rounded"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article className="prose max-w-none">
        {/* 這裡可以先用危險插入（只接受純 Markdown->HTML 時），
            或後續加正式 MDX 渲染。
            先用簡單做法：直接顯示文字 (無格式)，之後可改成 MDX。
        */}
        <pre className="whitespace-pre-wrap font-sans">
          {post.content}
        </pre>
      </article>
    </main>
  );
}
