'use client';

import { useState, useEffect } from 'react';
import { Section, Container } from '@/components/ui/Section';

interface LegalPage {
  title: string;
  content: string;
  updatedAt: string;
}

export default function LegalPageContent({ slug }: { slug: string }) {
  const [page, setPage] = useState<LegalPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      const response = await fetch(`/api/legal-pages?slug=${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPage(data);
      }
    } catch (error) {
      console.error('Error fetching legal page:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" />
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-ink mb-4">Page Not Found</h1>
          <p className="text-ink-muted">The requested page does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <Section tone="cream">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl text-ink mb-4 border-b border-line pb-8">
          {page.title}
        </h1>
        <p className="text-sm text-ink-muted mb-12">
          Last Updated: {new Date(page.updatedAt).toLocaleDateString()}
        </p>
        <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: page.content }} />
      </Container>
    </Section>
  );
}
