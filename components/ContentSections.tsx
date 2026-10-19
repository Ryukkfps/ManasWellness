'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentSection {
  id: string;
  title: string;
  subtitle: string | null;
  description: string;
  backgroundImage: string;
  ctaText: string | null;
  ctaLink: string | null;
  textColor: string;
  overlayOpacity: number;
  order: number;
  isActive: boolean;
}

export default function ContentSections() {
  const [content, setContent] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content');
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || content.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-6 md:px-8 py-16">
      {content.map((section) => (
        <section
          key={section.id}
          className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-center"
          style={{
            backgroundImage: `url(${section.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="absolute inset-0 bg-ink"
            style={{ opacity: section.overlayOpacity }}
          />

          <div className="relative z-10 px-8 md:px-16 py-12 max-w-xl">
            {section.subtitle && (
              <p className="text-sm tracking-[0.1em] uppercase font-semibold mb-3 text-sand">
                {section.subtitle}
              </p>
            )}

            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-5 leading-tight text-cream">
              {section.title}
            </h2>

            <p className="text-base mb-8 leading-relaxed text-cream/90 whitespace-pre-wrap">
              {section.description}
            </p>

            {section.ctaText && section.ctaLink && (
              section.ctaLink.startsWith('http') ? (
                <a
                  href={section.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-cream text-ink px-7 py-3 text-sm font-semibold hover:bg-white transition-colors"
                >
                  {section.ctaText}
                </a>
              ) : (
                <Link
                  href={section.ctaLink}
                  className="inline-flex items-center rounded-full bg-cream text-ink px-7 py-3 text-sm font-semibold hover:bg-white transition-colors"
                >
                  {section.ctaText}
                </Link>
              )
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
