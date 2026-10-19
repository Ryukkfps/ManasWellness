'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, ClipboardList, X, Eye } from 'lucide-react';
import { Field, Input, Textarea, Select } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { EmptyState } from '@/components/ui/EmptyState';

interface Question {
  id?: string;
  type: 'TEXT' | 'SINGLE_CHOICE' | 'MULTI_CHOICE' | 'SCALE';
  label: string;
  options: string[];
  required: boolean;
}

interface Survey {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  isActive: boolean;
  questions: Question[];
}

interface SurveyAnswer { questionId: string; value: string; }
interface SurveyResponse {
  id: string;
  respondentName: string | null;
  respondentEmail: string | null;
  submittedAt: string;
  answers: SurveyAnswer[];
}

const EMPTY_FORM = { title: '', slug: '', description: '', isActive: true, questions: [] as Question[] };

// Multi-choice/scale answers are stored as a JSON-stringified array
// (see app/api/surveys/[id]/responses/route.ts); render them as a
// readable list instead of raw JSON.
function formatAnswer(value: string): string {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.join(', ') : value;
  } catch {
    return value;
  }
}
const EMPTY_QUESTION: Question = { type: 'TEXT', label: '', options: [], required: false };

export default function AdminSurveys() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Survey | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [responsesSurvey, setResponsesSurvey] = useState<Survey | null>(null);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);

  useEffect(() => { fetchSurveys(); }, []);

  const fetchSurveys = async () => {
    try {
      const res = await fetch('/api/surveys?admin=true');
      if (res.ok) setSurveys(await res.json());
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/surveys/${editing.id}` : '/api/surveys';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      await fetchSurveys();
      setShowForm(false);
      setEditing(null);
      setForm(EMPTY_FORM);
    } else {
      alert('Error saving survey');
    }
  };

  const handleEdit = (survey: Survey) => {
    setEditing(survey);
    setForm({
      title: survey.title,
      slug: survey.slug,
      description: survey.description || '',
      isActive: survey.isActive,
      questions: survey.questions,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this survey and all its responses?')) return;
    const res = await fetch(`/api/surveys/${id}`, { method: 'DELETE' });
    if (res.ok) await fetchSurveys();
  };

  const viewResponses = async (survey: Survey) => {
    setResponsesSurvey(survey);
    const res = await fetch(`/api/surveys/${survey.id}/responses`);
    if (res.ok) setResponses(await res.json());
  };

  const addQuestion = () => setForm((prev) => ({ ...prev, questions: [...prev.questions, { ...EMPTY_QUESTION }] }));
  const updateQuestion = (index: number, patch: Partial<Question>) => {
    setForm((prev) => ({
      ...prev,
      questions: prev.questions.map((q, i) => (i === index ? { ...q, ...patch } : q)),
    }));
  };
  const removeQuestion = (index: number) => {
    setForm((prev) => ({ ...prev, questions: prev.questions.filter((_, i) => i !== index) }));
  };

  if (loading) {
    return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" /></div>;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl text-ink">Surveys</h1>
            <p className="text-sm text-ink-muted mt-1">Build questionnaires; the real one can be entered here once supplied by the client</p>
          </div>
          <Button onClick={() => { setForm(EMPTY_FORM); setEditing(null); setShowForm(true); }} className="gap-2">
            <Plus className="w-4 h-4" /> Add Survey
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] divide-y divide-line">
          {surveys.length === 0 ? (
            <EmptyState icon={ClipboardList} title="No surveys yet" />
          ) : (
            surveys.map((survey) => (
              <div key={survey.id} className="p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-ink">{survey.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${survey.isActive ? 'bg-sage-100 text-sage-700' : 'bg-gray-100 text-gray-600'}`}>
                      {survey.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted mt-1">/survey/{survey.slug} · {survey.questions.length} question{survey.questions.length !== 1 ? 's' : ''}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => viewResponses(survey)} className="p-2 text-ink-muted hover:text-sage-700" title="View responses">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleEdit(survey)} className="p-2 text-ink-muted hover:text-sage-700" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(survey.id)} className="p-2 text-red-400 hover:text-red-600" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <Modal open={showForm} onClose={() => setShowForm(false)} title={editing ? 'Edit Survey' : 'Add Survey'} maxWidth="max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Title" htmlFor="title" required>
              <Input id="title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </Field>
            <Field label="Slug" htmlFor="slug" hint="Leave blank to auto-generate; this is the public URL">
              <Input id="slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
            </Field>
            <Field label="Description" htmlFor="description" hint="Optional">
              <Textarea id="description" rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Field>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-ink">Questions</label>
                <Button type="button" variant="secondary" size="sm" onClick={addQuestion}>+ Add Question</Button>
              </div>
              <div className="space-y-4">
                {form.questions.map((q, i) => (
                  <div key={i} className="bg-sand/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <Input
                        value={q.label}
                        onChange={(e) => updateQuestion(i, { label: e.target.value })}
                        placeholder="Question text"
                        className="flex-1"
                      />
                      <button type="button" onClick={() => removeQuestion(i)} className="p-2 text-red-400 hover:text-red-600 shrink-0">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Select value={q.type} onChange={(e) => updateQuestion(i, { type: e.target.value as Question['type'] })} className="w-auto">
                        <option value="TEXT">Text</option>
                        <option value="SINGLE_CHOICE">Single Choice</option>
                        <option value="MULTI_CHOICE">Multiple Choice</option>
                        <option value="SCALE">Scale</option>
                      </Select>
                      <label className="flex items-center gap-2 text-sm text-ink">
                        <input type="checkbox" checked={q.required} onChange={(e) => updateQuestion(i, { required: e.target.checked })} className="w-4 h-4 text-sage-700" />
                        Required
                      </label>
                    </div>
                    {(q.type === 'SINGLE_CHOICE' || q.type === 'MULTI_CHOICE' || q.type === 'SCALE') && (
                      <Input
                        value={q.options.join(', ')}
                        onChange={(e) => updateQuestion(i, { options: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                        placeholder="Options, comma-separated"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="isActive" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="w-4 h-4 text-sage-700" />
              <label htmlFor="isActive" className="text-sm text-ink">Active (publicly accessible)</label>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button type="submit">{editing ? 'Update' : 'Create'}</Button>
            </div>
          </form>
        </Modal>

        <Modal open={!!responsesSurvey} onClose={() => setResponsesSurvey(null)} title={`Responses — ${responsesSurvey?.title || ''}`} maxWidth="max-w-3xl">
          {responsesSurvey && (
            responses.length === 0 ? (
              <EmptyState icon={ClipboardList} title="No responses yet" />
            ) : (
              <div className="space-y-4">
                {responses.map((response) => (
                  <div key={response.id} className="bg-sand/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-ink">{response.respondentName || 'Anonymous'}</span>
                      <span className="text-xs text-ink-muted">{new Date(response.submittedAt).toLocaleString()}</span>
                    </div>
                    {response.respondentEmail && <p className="text-xs text-ink-muted mb-2">{response.respondentEmail}</p>}
                    <dl className="space-y-2 text-sm">
                      {response.answers.map((a) => {
                        const question = responsesSurvey.questions.find((q) => q.id === a.questionId);
                        return (
                          <div key={a.questionId}>
                            <dt className="text-ink-muted">{question?.label || 'Question'}</dt>
                            <dd className="text-ink">{formatAnswer(a.value)}</dd>
                          </div>
                        );
                      })}
                    </dl>
                  </div>
                ))}
              </div>
            )
          )}
        </Modal>
      </div>
    </div>
  );
}
