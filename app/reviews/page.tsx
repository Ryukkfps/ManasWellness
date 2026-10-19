import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/ReviewForm';
import { Section, Container } from '@/components/ui/Section';
import { Eyebrow, H1, H2 } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what clients say about their experience with Manaswellness.",
};

export default function ReviewsPage() {
  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>Testimonials</Eyebrow>
          <H1 className="mt-3">What clients say</H1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Shared with consent — real words from people who've worked with us.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <ReviewsDisplay variant="grid" showTitle={false} />
        </Container>
      </Section>

      <Section tone="sand">
        <Container className="max-w-2xl">
          <div className="text-center mb-10">
            <Eyebrow>Share your experience</Eyebrow>
            <H2 className="mt-3">Leave a testimonial</H2>
            <p className="text-ink-muted mt-3 leading-relaxed">
              Your feedback helps others feel more comfortable reaching out. We'll ask for your
              consent before publishing anything.
            </p>
          </div>
          <Card>
            <ReviewForm />
          </Card>
        </Container>
      </Section>
    </div>
  );
}
