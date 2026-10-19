'use client';

import { useState } from 'react';
import { Field, Input, Textarea } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';

interface Question {
  id: string;
  type: 'TEXT' | 'SINGLE_CHOICE' | 'MULTI_CHOICE' | 'SCALE';
  label: string;
  options: string[];
  required: boolean;
}

export default function SurveyRunner({ slug, questions }: { slug: string; questions: Question[] }) {
  const [respondentName, setRespondentName] = useState('');
  const [respondentEmail, setRespondentEmail] = useState('');
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const setAnswer = (questionId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const toggleMultiChoice = (questionId: string, option: string) => {
    const current = (answers[questionId] as string[]) || [];
    setAnswer(
      questionId,
      current.includes(option) ? current.filter((o) => o !== option) : [...current, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const missingRequired = questions.some((q) => {
      if (!q.required) return false;
      const value = answers[q.id];
      return value === undefined || value === '' || (Array.isArray(value) && value.length === 0);
    });

    if (missingRequired) {
      setError('Please answer all required questions.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/surveys/${slug}/responses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          respondentName,
          respondentEmail,
          answers: Object.entries(answers).map(([questionId, value]) => ({ questionId, value })),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong submitting your response. Please try again.');
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
        <p className="font-medium text-sage-700 mb-1">Thank you for completing this questionnaire.</p>
        <p className="text-sm text-ink-muted">Your response has been recorded.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-[#f0e6e4] border border-[#a65450]/30 text-[#a65450] px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your Name" htmlFor="respondentName" hint="Optional">
          <Input
            id="respondentName"
            value={respondentName}
            onChange={(e) => setRespondentName(e.target.value)}
          />
        </Field>
        <Field label="Your Email" htmlFor="respondentEmail" hint="Optional">
          <Input
            type="email"
            id="respondentEmail"
            value={respondentEmail}
            onChange={(e) => setRespondentEmail(e.target.value)}
          />
        </Field>
      </div>

      {questions.map((q) => (
        <div key={q.id} className="bg-white rounded-2xl p-6">
          <label className="block font-medium text-ink mb-4">
            {q.label} {q.required && <span className="text-clay-700">*</span>}
          </label>

          {q.type === 'TEXT' && (
            <Textarea
              rows={4}
              value={(answers[q.id] as string) || ''}
              onChange={(e) => setAnswer(q.id, e.target.value)}
            />
          )}

          {q.type === 'SINGLE_CHOICE' && (
            <div className="flex flex-col gap-2">
              {q.options.map((option) => (
                <label key={option} className="flex items-center gap-3 text-sm text-ink">
                  <input
                    type="radio"
                    name={q.id}
                    checked={answers[q.id] === option}
                    onChange={() => setAnswer(q.id, option)}
                    className="w-4 h-4 text-sage-700"
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

          {q.type === 'MULTI_CHOICE' && (
            <div className="flex flex-col gap-2">
              {q.options.map((option) => (
                <label key={option} className="flex items-center gap-3 text-sm text-ink">
                  <input
                    type="checkbox"
                    checked={((answers[q.id] as string[]) || []).includes(option)}
                    onChange={() => toggleMultiChoice(q.id, option)}
                    className="w-4 h-4 text-sage-700 rounded"
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

          {q.type === 'SCALE' && (
            <div className="flex gap-3">
              {q.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAnswer(q.id, option)}
                  className={`w-11 h-11 rounded-full border text-sm font-medium transition-colors ${
                    answers[q.id] === option
                      ? 'bg-sage-700 text-cream border-sage-700'
                      : 'bg-white text-ink border-line hover:border-sage-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Response'}
      </Button>
    </form>
  );
}
