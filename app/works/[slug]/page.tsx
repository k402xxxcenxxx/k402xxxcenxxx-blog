import { getWorkBySlug, getWorks } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getWorks('en');
  if (posts.length > 0) {
    return posts.map((post) => ({ slug: post.slug }));
  } else {
    return [{ slug: "not-found" }];
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug, 'en');

  if (!work) {
    return notFound();
  }

  const htmlContent = await markdownToHtml(work.content);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8 pt-20">
        {work.coverImage && (
          <img
            src={work.coverImage}
            alt={work.title}
            className="w-full mb-6 rounded"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{work.title}</h1>
        <p className="text-sm text-gray-500 mb-2">{work.date}</p>
        {work.role && (
          <p className="text-sm text-gray-500 mb-4">Role: {work.role}</p>
        )}
        {work.tech && work.tech.length > 0 && (
          <p className="text-sm text-gray-500 mb-6">
            Tech: {work.tech.join(', ')}
          </p>
        )}

        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
}
