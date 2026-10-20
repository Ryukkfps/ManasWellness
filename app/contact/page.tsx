import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { Section, Container } from '@/components/ui/Section';
import { Eyebrow, H1 } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Manaswellness to ask questions or start your first session.",
};

export default function ContactPage() {
  return (
    <div>
      <Section tone="sage" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>Contact</Eyebrow>
          <H1 className="mt-3">Let's start the conversation</H1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Reach out with any questions — we'll get back to you within 24 hours.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <h2 className="font-serif text-2xl text-ink mb-6">Send a message</h2>
            <ContactForm />
          </Card>

          <div className="flex flex-col gap-8">
            <ContactInfo variant="card" showTitle />
          </div>
        </Container>
      </Section>
    </div>
  );
}
