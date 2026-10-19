'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Field, Input, Textarea } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ author: '', content: '', rating: 5 });
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to submit review');
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
        <p className="font-medium text-sage-700 mb-1">Thank you for sharing your experience.</p>
        <p className="text-sm text-ink-muted mb-4">Your review will be published after a quick review by our team.</p>
        <button onClick={() => setSubmitted(false)} className="text-sm text-sage-700 underline">
          Submit another review
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

      <Field label="Your Name" htmlFor="author" required>
        <Input
          id="author"
          required
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          placeholder="Enter your full name"
        />
      </Field>

      <div>
        <label className="block text-sm font-medium text-ink mb-2">
          Rating <span className="text-clay-700">*</span>
        </label>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setFormData({ ...formData, rating: i + 1 })}
              className="focus:outline-none"
              aria-label={`Rate ${i + 1} stars`}
            >
              <Star
                className={`w-7 h-7 transition-colors ${
                  i < formData.rating ? 'text-clay fill-current' : 'text-line hover:text-clay/50'
                }`}
              />
            </button>
          ))}
          <span className="ml-3 text-sm text-ink-muted">({formData.rating}/5)</span>
        </div>
      </div>

      <Field label="Your Review" htmlFor="content" required>
        <Textarea
          id="content"
          required
          rows={6}
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Share your experience..."
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </Button>

      <p className="text-xs text-ink-muted text-center">
        Your review will be published after approval by our team.
      </p>
    </form>
  );
}
