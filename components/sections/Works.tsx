import type { WorksContent } from "@/lib/content";

type WorksProps = {
  content: WorksContent;
};

export function Works({ content }: WorksProps) {
  return (
    <section
      id="works"
      className="bg-black text-white px-6 md:px-12 py-16 md:py-24 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-2xl md:text-3xl font-semibold">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="space-y-6">
          {content.projects.map((project) => (
            <a
              key={project.name}
              href={project.href ?? "#"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noreferrer" : undefined}
              className="block border border-white/10 rounded-xl p-5 hover:border-white/40 hover:bg-white/[0.03] transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                <div className="text-lg font-semibold">{project.name}</div>
                {project.role && (
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    {project.role}
                  </div>
                )}
              </div>
              {project.description && (
                <p className="text-sm text-gray-300 mb-2">
                  {project.description}
                </p>
              )}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
