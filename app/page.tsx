import Link from 'next/link';

export const metadata = {
  title: 'Home | Portfolio & Blog',
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white">
      <div
        className="
          absolute inset-0 
          bg-cover bg-center bg-no-repeat
          bg-[url('/k402xxxcenxxx-blog/uploads/hero-background.jpg')]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav Bar */}
        <header className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-bold text-lg">
              T
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About me
            </Link>
            <Link href="/works" className="hover:text-gray-200">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-gray-200">
              Blog
            </Link>
          </nav>
        </header>

        {/* Hero section */}
        <main className="flex-1 flex items-center">
          <section className="px-6 md:px-12 lg:px-24 max-w-4xl">
            <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-gray-200 mb-3">
              SRE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              I&apos;m k402xxxcenxxx
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-xl mb-8">
              A Site Reliability Engineer (SRE) passionate about building
              scalable and reliable systems. I love automating tasks, improving
              system performance, and ensuring seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/works"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/80 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </section>
        </main>

        <footer className="px-6 md:px-12 py-4 text-xs text-gray-300">
          © {new Date().getFullYear()} k402xxxcenxxx. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
