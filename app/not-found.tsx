import { ButtonLink } from "@/components/ui/Button";
import { Section, Container } from "@/components/ui/Section";
import { Eyebrow, H1 } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <Section tone="cream" className="min-h-[60vh] flex items-center">
      <Container className="text-center max-w-xl">
        <Eyebrow>404</Eyebrow>
        <H1 className="mt-3">We couldn't find that page</H1>
        <p className="text-ink-muted mt-4 mb-8 leading-relaxed">
          The page you're looking for may have moved or no longer exists.
        </p>
        <ButtonLink href="/">Back to Home</ButtonLink>
      </Container>
    </Section>
  );
}
