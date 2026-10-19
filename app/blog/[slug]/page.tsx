import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1, H3 } from "@/components/ui/Heading";
import type { Metadata } from "next";

async function getPost(slug: string) {
  return prisma.blogPost.findFirst({ where: { slug, status: 'PUBLISHED' } });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt || undefined };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  let related: any[] = [];
  if (post.tags.length > 0) {
    related = await prisma.blogPost.findMany({
      where: {
        status: 'PUBLISHED',
        slug: { not: post.slug },
        tags: { hasSome: post.tags },
      },
      take: 3,
    });
  }

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Blog</Eyebrow>
          <H1 className="mt-3">{post.title}</H1>
          <div className="flex items-center gap-4 mt-6 text-sm text-ink-muted">
            {post.authorName && <span>{post.authorName}</span>}
            {post.publishedAt && (
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            )}
          </div>
        </Container>
      </Section>

      {post.coverImage && (
        <Container className="max-w-4xl -mt-8 relative z-10">
          <div className="rounded-3xl overflow-hidden aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </Container>
      )}

      <Section tone="cream">
        <Container className="max-w-3xl">
          <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="sand">
          <Container>
            <h2 className="font-serif text-2xl text-ink mb-8">Related posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <H3>{r.title}</H3>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Container className="max-w-3xl py-12">
        <Link href="/blog" className="text-sage-700 font-medium hover:text-sage-800">
          ← Back to blog
        </Link>
      </Container>
    </div>
  );
}
