import HeroCarousel from "@/components/HeroCarousel";
import ContentSections from "@/components/ContentSections";
import ServicesDisplay from "@/components/ServicesDisplay";
import ReviewsDisplay from "@/components/ReviewsDisplay";
import { ButtonLink } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H2 } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { prisma } from "@/lib/prisma";
import { HeartHandshake, Users2, Sprout, CalendarHeart, MapPin } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const CONCERNS = [
  { icon: HeartHandshake, label: "Anxiety & Stress" },
  { icon: Users2, label: "Relationships" },
  { icon: Sprout, label: "Grief & Transitions" },
  { icon: CalendarHeart, label: "Self-Esteem" },
];

const STEPS = [
  { title: "Reach out", description: "Send a message or enquiry about what you're looking for." },
  { title: "We connect", description: "We'll get back to you to understand your needs and answer questions." },
  { title: "Begin", description: "Start sessions at a pace that feels right for you." },
];

const FAQS = [
  { q: "Is everything I share confidential?", a: "Yes. Confidentiality is central to our practice, with the usual exceptions required by law (such as risk of harm)." },
  { q: "Do you offer online sessions?", a: "Yes — most of our services are available both in-person and online, depending on the service." },
  { q: "What if I need to cancel or reschedule?", a: "Just reach out as early as you can — we'll do our best to accommodate a change." },
];

export default async function Home() {
  let slides: any[] = [];
  let therapist: any = null;
  let upcomingEvents: any[] = [];

  try {
    [slides, therapist, upcomingEvents] = await Promise.all([
      prisma.carouselSlide.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.therapistProfile.findFirst(),
      prisma.event.findMany({
        where: { isActive: true, startDate: { gte: new Date() } },
        orderBy: { startDate: 'asc' },
        take: 3,
      }),
    ]);
  } catch (error) {
    console.error('Database error:', error);
  }

  return (
    <div className="flex flex-col">
      <HeroCarousel initialSlides={slides} />

      {/* Is this for you? */}
      <Section tone="cream">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Is this for you?</Eyebrow>
            <H2 className="mt-3">Whatever brought you here, you don't have to carry it alone</H2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONCERNS.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center">
                  <c.icon className="w-6 h-6 text-sage-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink">{c.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Therapist intro */}
      {therapist && (
        <Section tone="sage">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              {therapist.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={therapist.photo} alt={therapist.fullName} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex flex-col gap-4">
              <Eyebrow>About your therapist</Eyebrow>
              <H2>{therapist.fullName}</H2>
              {therapist.title && <p className="text-sage-700 font-medium">{therapist.title}</p>}
              {therapist.shortBio && (
                <div
                  className="rich-text-content text-ink-muted"
                  dangerouslySetInnerHTML={{ __html: therapist.shortBio }}
                />
              )}
              <div>
                <ButtonLink href="/about" variant="secondary">Learn more about me</ButtonLink>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Services teaser */}
      <Section tone="cream">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>How I can help</Eyebrow>
            <H2 className="mt-3">Services tailored to where you are</H2>
          </div>
          <ServicesDisplay limit={6} />
          <div className="text-center mt-12">
            <ButtonLink href="/services" variant="secondary">View all services</ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Upcoming events teaser */}
      {upcomingEvents.length > 0 && (
        <Section tone="sand">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Eyebrow>Group events</Eyebrow>
              <H2 className="mt-3">Upcoming community wellness events</H2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="flex flex-col gap-3">
                  <span className="text-sm font-semibold text-sage-700">
                    {new Date(event.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <h3 className="font-serif text-lg text-ink">{event.title}</h3>
                  {event.location && (
                    <p className="text-sm text-ink-muted flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" /> {event.location}
                    </p>
                  )}
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <ButtonLink href="/events" variant="secondary">View all events</ButtonLink>
            </div>
          </Container>
        </Section>
      )}

      {/* How it works */}
      <Section tone="sage">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>How it works</Eyebrow>
            <H2 className="mt-3">Getting started is simple</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <Card key={step.title} className="flex flex-col gap-3">
                <span className="font-serif text-3xl text-sage-700">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-lg text-ink">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section tone="cream">
        <Container>
          <ReviewsDisplay variant="carousel" limit={5} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="sage">
        <Container className="max-w-3xl">
          <div className="text-center mb-12">
            <Eyebrow>Good to know</Eyebrow>
            <H2 className="mt-3">Frequently asked questions</H2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl p-6 group">
                <summary className="font-medium text-ink cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-sage-700 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-sm text-ink-muted leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CMS banner sections */}
      <ContentSections />

      {/* Final CTA */}
      <Section tone="sage">
        <Container className="text-center max-w-2xl">
          <H2>Ready to take the first step?</H2>
          <p className="text-ink-muted mt-4 mb-8 leading-relaxed">
            Reach out today — we're here to answer your questions and help you find the right kind of support.
          </p>
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </Container>
      </Section>
    </div>
  );
}
