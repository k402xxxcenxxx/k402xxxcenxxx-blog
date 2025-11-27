import Link from 'next/link';
import { getWorks } from '@/lib/content';

export const metadata = {
  title: 'Works | k402xxxcenxxx',
};

export default function WorkPage() {
  const posts = getWorks('en');

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Works</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={`${post.slug}-${post.lang}`} className="border-b pb-4">
            <Link href={`/works/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
