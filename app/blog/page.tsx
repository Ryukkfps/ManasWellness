import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1, H3 } from "@/components/ui/Heading";
import { EmptyState } from "@/components/ui/EmptyState";
import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and reflections on mental wellness from Manaswellness.",
};

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await prisma.blogPost.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
    });
  } catch (error) {
    console.error('Database error:', error);
  }

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>Blog</Eyebrow>
          <H1 className="mt-3">Notes on mental wellness</H1>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          {posts.length === 0 ? (
            <EmptyState icon={BookOpen} title="No posts yet" description="Check back soon for new articles." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(43,47,44,0.06)] hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="aspect-[16/9] bg-sand overflow-hidden">
                    {post.coverImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <span className="text-xs text-ink-muted">
                      {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <H3>{post.title}</H3>
                    {post.excerpt && <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">{post.excerpt}</p>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
