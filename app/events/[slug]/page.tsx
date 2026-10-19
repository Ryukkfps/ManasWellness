import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1 } from "@/components/ui/Heading";
import { Calendar, MapPin } from "lucide-react";
import type { Metadata } from "next";

async function getEvent(slug: string) {
  return prisma.event.findFirst({
    where: { slug, isActive: true },
    include: { images: { orderBy: { order: 'asc' } } },
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return {};
  return { title: event.title };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Event</Eyebrow>
          <H1 className="mt-3">{event.title}</H1>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-ink-muted">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {new Date(event.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              {event.endDate && ` – ${new Date(event.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
            </span>
            {event.location && (
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" /> {event.location}
              </span>
            )}
          </div>
        </Container>
      </Section>

      {event.bannerImage && (
        <Container className="max-w-4xl -mt-8 relative z-10">
          <div className="rounded-3xl overflow-hidden aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={event.bannerImage} alt={event.title} className="w-full h-full object-cover" />
          </div>
        </Container>
      )}

      <Section tone="cream">
        <Container className="max-w-3xl">
          <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: event.description }} />
        </Container>
      </Section>

      {event.images.length > 0 && (
        <Section tone="sand">
          <Container>
            <h2 className="font-serif text-2xl text-ink mb-8">Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.images.map((image) => (
                <div key={image.id} className="rounded-2xl overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image.imageUrl} alt={image.caption || event.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}
