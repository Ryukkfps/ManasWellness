'use client';

import { useState, useEffect } from 'react';
import { Field, Input } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import RichTextEditor from '@/components/admin/RichTextEditor';

interface Profile {
  fullName: string;
  title: string;
  photo: string;
  shortBio: string;
  qualifications: string[];
  specialisations: string[];
  languages: string[];
  approach: string;
  yearsExperience: string;
  registrationNo: string;
}

const EMPTY: Profile = {
  fullName: '', title: '', photo: '', shortBio: '',
  qualifications: [], specialisations: [], languages: [],
  approach: '', yearsExperience: '', registrationNo: '',
};

// Comma-separated list fields (qualifications, specialisations, languages)
// are edited as plain text and split/joined — avoids building a separate
// tag-input widget for three simple string-array fields.
function listToText(list: string[]) {
  return list.join(', ');
}
function textToList(text: string) {
  return text.split(',').map((s) => s.trim()).filter(Boolean);
}

export default function TherapistProfilePage() {
  const [form, setForm] = useState<Profile>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch('/api/profile')
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          setForm({
            fullName: data.fullName || '',
            title: data.title || '',
            photo: data.photo || '',
            shortBio: data.shortBio || '',
            qualifications: data.qualifications || [],
            specialisations: data.specialisations || [],
            languages: data.languages || [],
            approach: data.approach || '',
            yearsExperience: data.yearsExperience ? String(data.yearsExperience) : '',
            registrationNo: data.registrationNo || '',
          });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const uploadData = new FormData();
      uploadData.append('file', file);
      const response = await fetch('/api/upload', { method: 'POST', body: uploadData });
      if (response.ok) {
        const result = await response.json();
        setForm((prev) => ({ ...prev, photo: result.filePath }));
      }
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          yearsExperience: form.yearsExperience ? parseInt(form.yearsExperience) : null,
        }),
      });
      if (response.ok) setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl text-ink mb-1">Therapist Profile</h1>
        <p className="text-sm text-ink-muted mb-6">Shown on the Home and About pages</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] p-6 space-y-6">
          {saved && (
            <div className="bg-sage-100 text-sage-700 px-4 py-3 rounded-xl text-sm">Saved.</div>
          )}

          <Field label="Full Name" htmlFor="fullName" required>
            <Input id="fullName" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
          </Field>

          <Field label="Title" htmlFor="title" hint="e.g. Counselling Psychologist">
            <Input id="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>

          <Field label="Photo" htmlFor="photo">
            <div className="space-y-2">
              <input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); }}
                className="block w-full text-sm text-ink-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-sage-700 file:text-cream hover:file:bg-sage-800"
              />
              <Input id="photo" value={form.photo} onChange={(e) => setForm({ ...form, photo: e.target.value })} placeholder="Or paste an image URL" />
              {form.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={form.photo} alt="Preview" className="h-24 w-24 object-cover rounded-xl" />
              )}
            </div>
          </Field>

          <Field label="Short Bio" htmlFor="shortBio">
            <RichTextEditor value={form.shortBio} onChange={(value) => setForm({ ...form, shortBio: value })} />
          </Field>

          <Field label="Qualifications" htmlFor="qualifications" hint="Comma-separated">
            <Input id="qualifications" value={listToText(form.qualifications)} onChange={(e) => setForm({ ...form, qualifications: textToList(e.target.value) })} />
          </Field>

          <Field label="Areas of Focus" htmlFor="specialisations" hint="Comma-separated">
            <Input id="specialisations" value={listToText(form.specialisations)} onChange={(e) => setForm({ ...form, specialisations: textToList(e.target.value) })} />
          </Field>

          <Field label="Languages" htmlFor="languages" hint="Comma-separated">
            <Input id="languages" value={listToText(form.languages)} onChange={(e) => setForm({ ...form, languages: textToList(e.target.value) })} />
          </Field>

          <Field label="Therapeutic Approach" htmlFor="approach">
            <RichTextEditor value={form.approach} onChange={(value) => setForm({ ...form, approach: value })} />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Years of Experience" htmlFor="yearsExperience">
              <Input id="yearsExperience" type="number" value={form.yearsExperience} onChange={(e) => setForm({ ...form, yearsExperience: e.target.value })} />
            </Field>
            <Field label="Registration No." htmlFor="registrationNo" hint="Optional">
              <Input id="registrationNo" value={form.registrationNo} onChange={(e) => setForm({ ...form, registrationNo: e.target.value })} />
            </Field>
          </div>

          <Button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</Button>
        </form>
      </div>
    </div>
  );
}
