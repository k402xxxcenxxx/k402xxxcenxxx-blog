"use client";

import Image from "next/image";
import type { HeroContent } from "@/lib/content";
import { withAssetPrefix } from "@/lib/assetPrefix";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  const {
    title,
    subtitle,
    description,
    primaryButton,
    secondaryButton,
    backgroundImage,
  } = content;

  return (
    <section
      id="home"
      className="relative min-h-screen text-white overflow-hidden"
    >
      {backgroundImage && (
        <Image
          src={withAssetPrefix(backgroundImage)}
          alt=""
          fill
          priority
          className="object-cover"
        />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-6 py-5 md:px-12">
          <div className="text-lg font-semibold tracking-widest uppercase">
            k402xxxcenxxx
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
            <a href="/works" className="hover:text-gray-200">
              Works
            </a>
            <a href="/blog" className="hover:text-gray-200">
              Blog
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </nav>
        </header>

        {/* hero 內容 */}
        <div className="flex-1 flex items-center px-6 md:px-12 pb-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-xl md:text-2xl text-gray-200 mb-4">
                {subtitle}
              </h2>
            )}
            {description && (
              <p className="text-sm md:text-base text-gray-300 max-w-xl mb-8">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-200 transition"
                >
                  {primaryButton.label}
                </a>
              )}
              {secondaryButton && (
                <a
                  href={secondaryButton.href}
                  className="px-6 py-3 rounded-full border border-white/60 text-sm font-medium tracking-wide hover:bg-white/10 transition"
                >
                  {secondaryButton.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
