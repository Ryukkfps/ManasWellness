import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1 } from "@/components/ui/Heading";
import { EmptyState } from "@/components/ui/EmptyState";
import { Image as ImageIcon } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Gallery",
  description: "Highlights from Manaswellness community wellness events.",
};

export default async function GalleryPage() {
  let images: any[] = [];
  try {
    images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: 'desc' },
      include: { event: { select: { title: true, slug: true, isActive: true } } },
    });
    images = images.filter((img) => img.event.isActive);
  } catch (error) {
    console.error('Database error:', error);
  }

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>Gallery</Eyebrow>
          <H1 className="mt-3">Event highlights</H1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Moments from our community wellness events and workshops.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          {images.length === 0 ? (
            <EmptyState icon={ImageIcon} title="No photos yet" description="Check back after our next event." />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image) => (
                <Link
                  key={image.id}
                  href={`/events/${image.event.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-square block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.imageUrl}
                    alt={image.caption || image.event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                    <span className="text-cream text-xs font-medium">{image.event.title}</span>
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
