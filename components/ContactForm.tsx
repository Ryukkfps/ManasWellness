'use client';

import { useState } from 'react';
import { Field, Input, Textarea } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '', // honeypot — left empty by humans
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-sage-100 border border-sage-500/30 rounded-2xl p-6 text-center">
        <p className="font-medium text-sage-700 mb-1">Message sent.</p>
        <p className="text-sm text-ink-muted mb-4">Thank you for reaching out — we'll get back to you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="text-sm text-sage-700 underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-[#f0e6e4] border border-[#a65450]/30 text-[#a65450] px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Honeypot field — hidden from real visitors, catches simple bots */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name" htmlFor="name" required>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Email Address" htmlFor="email" required>
          <Input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
          />
        </Field>
      </div>

      <Field label="Phone Number" htmlFor="phone" hint="Optional">
        <Input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+91 98765 43210"
        />
      </Field>

      <Field label="Subject" htmlFor="subject" required>
        <Input
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="How can we help you?"
        />
      </Field>

      <Field label="Message" htmlFor="message" required>
        <Textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly, what would you like support with?"
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-ink-muted text-center">
        We respect your privacy and will never share your information. This form is not for emergencies.
      </p>
    </form>
  );
}
