import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'content', 'blog');
const worksDir = path.join(process.cwd(), 'content', 'works');

export type Lang = 'en' | 'zh';

type FrontMatter = {
  title: string;
  date: string;
  lang: Lang;
  slug: string;
  coverImage?: string;
  tags?: string[];
  role?: string;
  tech?: string[];
  [key: string]: any;
};

export type Post = FrontMatter & { content: string };

function getFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

function getAllContents(dir: string, lang: Lang): Post[] {
  const files = getFiles(dir).filter((f) => f.endsWith(`.${lang}.mdx`) || f.endsWith(`.${lang}.md`));

  const posts = files.map((file) => {
    const fullPath = path.join(dir, file);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContent);
    return { ...(data as FrontMatter), content };
  });

  // 依日期排序，新到舊
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getContentBySlug(dir: string, slug: string, lang: Lang): Post | null {
  const candidates = [
    path.join(dir, `${slug}.${lang}.mdx`),
    path.join(dir, `${slug}.${lang}.md`),
  ];

  const fullPath = candidates.find((p) => fs.existsSync(p));
  if (!fullPath) return null;

  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);
  return { ...(data as FrontMatter), content };
}

// Blog
export function getBlogPosts(lang: Lang) {
  return getAllContents(blogDir, lang);
}

export function getBlogPostBySlug(slug: string, lang: Lang) {
  return getContentBySlug(blogDir, slug, lang);
}

// Works
export function getWorks(lang: Lang) {
  return getAllContents(worksDir, lang);
}

export function getWorkBySlug(slug: string, lang: Lang) {
  return getContentBySlug(worksDir, slug, lang);
}
