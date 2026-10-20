import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SurveyRunner from "@/components/public/SurveyRunner";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1 } from "@/components/ui/Heading";
import type { Metadata } from "next";

async function getSurvey(slug: string) {
  return prisma.survey.findFirst({
    where: { slug, isActive: true },
    include: { questions: { orderBy: { order: 'asc' } } },
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const survey = await getSurvey(slug);
  if (!survey) return {};
  return { title: survey.title };
}

export default async function SurveyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const survey = await getSurvey(slug);

  if (!survey) {
    notFound();
  }

  return (
    <div>
      <Section tone="sage" className="py-16 md:py-20">
        <Container className="max-w-2xl text-center">
          <Eyebrow>Questionnaire</Eyebrow>
          <H1 className="mt-3">{survey.title}</H1>
          {survey.description && <p className="text-ink-muted mt-4 leading-relaxed">{survey.description}</p>}
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="max-w-2xl">
          <SurveyRunner
            slug={survey.slug}
            questions={survey.questions.map((q) => ({
              id: q.id,
              type: q.type as 'TEXT' | 'SINGLE_CHOICE' | 'MULTI_CHOICE' | 'SCALE',
              label: q.label,
              options: q.options,
              required: q.required,
            }))}
          />
        </Container>
      </Section>
    </div>
  );
}
