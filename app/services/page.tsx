import ServicesDisplay from "@/components/ServicesDisplay";
import { ButtonLink } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1, H2 } from "@/components/ui/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Individual therapy, couples counselling, and group wellness support — in-person, online, or by phone.",
};

export default function ServicesPage() {
  return (
    <div>
      <Section tone="sand" className="py-16 md:py-20">
        <Container className="text-center max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <H1 className="mt-3">Support for wherever you are right now</H1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            Sessions are offered in-person, online, and by phone, at a pace that works for you.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <ServicesDisplay />
        </Container>
      </Section>

      <Section tone="sage">
        <Container className="text-center max-w-xl">
          <H2>Not sure where to start?</H2>
          <p className="text-ink-muted mt-4 mb-8 leading-relaxed">
            Reach out and we'll help you find the right service for what you're going through.
          </p>
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </Container>
      </Section>
    </div>
  );
}
