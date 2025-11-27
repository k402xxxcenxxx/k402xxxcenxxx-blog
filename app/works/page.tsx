import Link from 'next/link';
import { getWorks } from '@/lib/content';

export const metadata = {
  title: 'Works | Portfolio',
};

export default function WorksPage() {
  const works = getWorks('en') || [];

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Works</h1>

      {works.length === 0 ? (
        <p className="text-gray-500">No works yet. Coming soon.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {works.map((work) => (
            <Link
              key={`${work.slug}-${work.lang}`}
              href={`/works/${work.slug}`}
              className="group block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              {work.coverImage && (
                <div className="overflow-hidden">
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1 group-hover:underline">
                  {work.title}
                </h2>
                <p className="text-xs text-gray-500 mb-2">{work.date}</p>
                {work.role && (
                  <p className="text-sm text-gray-600 mb-1">{work.role}</p>
                )}
                {work.tech && work.tech.length > 0 && (
                  <p className="text-xs text-gray-500">
                    {work.tech.join(' • ')}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
