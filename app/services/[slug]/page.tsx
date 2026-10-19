import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ButtonLink } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1 } from "@/components/ui/Heading";
import * as Icons from "lucide-react";
import type { Metadata } from "next";

const MODE_LABELS: Record<string, string> = {
  IN_PERSON: "In-person",
  ONLINE: "Online",
  PHONE: "Phone",
};

async function getService(slug: string) {
  return prisma.service.findFirst({ where: { slug, isActive: true } });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription || undefined,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = (service.icon && (Icons as any)[service.icon]) || Icons.Leaf;

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Service</Eyebrow>
          <div className="flex items-center gap-4 mt-3">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
              <IconComponent className="w-6 h-6 text-sage-700" aria-hidden="true" />
            </div>
            <H1>{service.title}</H1>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-ink-muted">
            {service.durationMinutes && <span>{service.durationMinutes} minutes</span>}
            {service.priceLabel && <span className="font-semibold text-sage-700">{service.priceLabel}</span>}
            {service.modes?.length > 0 && <span>{service.modes.map((m) => MODE_LABELS[m] || m).join(' · ')}</span>}
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="max-w-3xl">
          <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: service.description }} />
          <div className="mt-10">
            <ButtonLink href="/contact">Enquire about this service</ButtonLink>
          </div>
        </Container>
      </Section>
    </div>
  );
}
