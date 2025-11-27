import type { AboutContent } from "@/lib/content";

type AboutProps = {
  content: AboutContent;
};

export function About({ content }: AboutProps) {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 md:px-12 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          {content.title}
        </h2>
        {content.headline && (
          <p className="text-2xl md:text-3xl font-semibold mb-6">
            {content.headline}
          </p>
        )}
        {content.body && (
          <div className="space-y-3 text-sm md:text-base text-gray-300 mb-8">
            {content.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}

        {content.highlightItems && content.highlightItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {content.highlightItems.map((item) => (
              <div
                key={item.label}
                className="border border-white/10 rounded-lg px-4 py-3"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                  {item.label}
                </div>
                <div className="text-base font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
