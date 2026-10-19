import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1, H3 } from "@/components/ui/Heading";
import { EmptyState } from "@/components/ui/EmptyState";
import { Calendar, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Events",
  description: "Group wellness events and workshops hosted by Manaswellness.",
};

function EventCard({ event }: { event: any }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(43,47,44,0.06)] hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="aspect-[16/9] bg-sand overflow-hidden">
        {event.bannerImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={event.bannerImage} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-2">
        <span className="text-sm font-semibold text-sage-700 flex items-center gap-2">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          {new Date(event.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
        <H3>{event.title}</H3>
        {event.location && (
          <span className="text-sm text-ink-muted flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" /> {event.location}
          </span>
        )}
      </div>
    </Link>
  );
}

export default async function EventsPage() {
  let events: any[] = [];
  try {
    events = await prisma.event.findMany({
      where: { isActive: true },
      orderBy: { startDate: 'desc' },
    });
  } catch (error) {
    console.error('Database error:', error);
  }

  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.startDate) >= now).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  const past = events.filter((e) => new Date(e.startDate) < now);

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>Events</Eyebrow>
          <H1 className="mt-3">Community wellness events</H1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Group workshops and sessions designed to support connection and shared learning.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <h2 className="font-serif text-2xl text-ink mb-8">Upcoming</h2>
          {upcoming.length === 0 ? (
            <EmptyState icon={Calendar} title="No upcoming events right now" description="Check back soon for new dates." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          )}
        </Container>
      </Section>

      {past.length > 0 && (
        <Section tone="sand">
          <Container>
            <h2 className="font-serif text-2xl text-ink mb-8">Past events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {past.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}
