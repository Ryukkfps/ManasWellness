import { prisma } from "@/lib/prisma";
import { ButtonLink } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1 } from "@/components/ui/Heading";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Manaswellness's approach to individual and couples counselling.",
};

export default async function AboutPage() {
  let therapist: any = null;
  let sections: any[] = [];

  try {
    [therapist, sections] = await Promise.all([
      prisma.therapistProfile.findFirst(),
      prisma.aboutSection.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    ]);
  } catch (error) {
    console.error('Database error:', error);
  }

  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>About</Eyebrow>
          <H1 className="mt-3">
            {therapist ? `Meet ${therapist.fullName}` : 'About Manaswellness'}
          </H1>
          {therapist?.title && <p className="text-sage-700 font-medium mt-3">{therapist.title}</p>}
        </Container>
      </Section>

      {therapist && (
        <Section tone="cream">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="rounded-3xl overflow-hidden aspect-4/5 max-w-md mx-auto w-full">
              {therapist.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={therapist.photo} alt={therapist.fullName} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex flex-col gap-6">
              {therapist.shortBio && (
                <p className="text-ink leading-relaxed">{therapist.shortBio}</p>
              )}

              {therapist.qualifications?.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">Qualifications</h3>
                  <ul className="text-sm text-ink-muted space-y-1 list-disc list-inside">
                    {therapist.qualifications.map((q: string) => <li key={q}>{q}</li>)}
                  </ul>
                </div>
              )}

              {therapist.specialisations?.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">Areas of focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialisations.map((s: string) => (
                      <span key={s} className="text-xs font-medium bg-sage-100 text-sage-700 rounded-full px-3 py-1.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {therapist.languages?.length > 0 && (
                <p className="text-sm text-ink-muted">
                  <span className="font-medium text-ink">Languages: </span>
                  {therapist.languages.join(', ')}
                </p>
              )}

              {therapist.approach && (
                <div
                  className="rich-text-content text-ink-muted"
                  dangerouslySetInnerHTML={{ __html: therapist.approach }}
                />
              )}
            </div>
          </Container>
        </Section>
      )}

      {sections.map((section, index) => (
        <Section key={section.id} tone={index % 2 === 0 ? 'sand' : 'cream'}>
          <Container
            className={`flex flex-col ${
              section.layout === 'MIRRORED' ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-12 md:gap-16`}
          >
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden aspect-4/5 max-w-md mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {section.subtitle && <Eyebrow>{section.subtitle}</Eyebrow>}
              <h2 className="font-serif text-3xl text-ink">{section.title}</h2>
              <div className="text-ink-muted leading-relaxed space-y-4">
                {section.content.split('\n').map((para: string, i: number) => para.trim() && <p key={i}>{para}</p>)}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="sage">
        <Container className="text-center max-w-xl">
          <p className="text-ink mb-6">Have a question before getting started?</p>
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </Container>
      </Section>
    </div>
  );
}
