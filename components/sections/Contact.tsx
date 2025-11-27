import type { ContactContent } from "@/lib/content";

type ContactProps = {
  content: ContactContent;
};

export function Contact({ content }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 md:px-12 py-16 md:py-24 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
          {content.title}
        </h2>
        {content.subtitle && (
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            {content.subtitle}
          </p>
        )}
        {content.description && (
          <p className="text-sm md:text-base text-gray-300 mb-8">
            {content.description}
          </p>
        )}

        {content.email && (
          <div className="mb-6">
            <a
              href={`mailto:${content.email}`}
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/60 text-sm font-medium tracking-wide hover:bg-white/10 transition"
            >
              {content.email}
            </a>
          </div>
        )}

        {content.socials && content.socials.length > 0 && (
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            {content.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
