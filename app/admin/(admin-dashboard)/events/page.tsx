'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, CalendarHeart, Image as ImageIcon, X } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Field, Input, Textarea } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { EmptyState } from '@/components/ui/EmptyState';

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string | null;
}

interface EventItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string | null;
  location: string | null;
  bannerImage: string | null;
  isActive: boolean;
  images: GalleryImage[];
}

const EMPTY_FORM = {
  title: '', slug: '', description: '', startDate: '', endDate: '', location: '', bannerImage: '', isActive: true,
};

export default function AdminEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [uploading, setUploading] = useState(false);
  const [galleryEvent, setGalleryEvent] = useState<EventItem | null>(null);
  const [uploadingGallery, setUploadingGallery] = useState(false);

  useEffect(() => { fetchEvents(); }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events?admin=true');
      if (res.ok) setEvents(await res.json());
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => setForm(EMPTY_FORM);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/events/${editing.id}` : '/api/events';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      await fetchEvents();
      setShowForm(false);
      setEditing(null);
      resetForm();
    } else {
      alert('Error saving event');
    }
  };

  const handleEdit = (event: EventItem) => {
    setEditing(event);
    setForm({
      title: event.title,
      slug: event.slug,
      description: event.description,
      startDate: event.startDate.slice(0, 10),
      endDate: event.endDate ? event.endDate.slice(0, 10) : '',
      location: event.location || '',
      bannerImage: event.bannerImage || '',
      isActive: event.isActive,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this event and its gallery photos?')) return;
    const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
    if (res.ok) await fetchEvents();
  };

  const handleBannerUpload = async (file: File) => {
    setUploading(true);
    try {
      const data = new FormData();
      data.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: data });
      if (res.ok) {
        const result = await res.json();
        setForm((prev) => ({ ...prev, bannerImage: result.filePath }));
      }
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryUpload = async (file: File) => {
    if (!galleryEvent) return;
    setUploadingGallery(true);
    try {
      const data = new FormData();
      data.append('file', file);
      const uploadRes = await fetch('/api/upload', { method: 'POST', body: data });
      if (uploadRes.ok) {
        const { filePath } = await uploadRes.json();
        const res = await fetch(`/api/events/${galleryEvent.id}/images`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageUrl: filePath }),
        });
        if (res.ok) {
          const updated = await fetch(`/api/events/${galleryEvent.id}`).then((r) => r.json());
          setGalleryEvent(updated);
          await fetchEvents();
        }
      }
    } finally {
      setUploadingGallery(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    if (!galleryEvent) return;
    const res = await fetch(`/api/events/${galleryEvent.id}/images/${imageId}`, { method: 'DELETE' });
    if (res.ok) {
      setGalleryEvent({ ...galleryEvent, images: galleryEvent.images.filter((i) => i.id !== imageId) });
      await fetchEvents();
    }
  };

  if (loading) {
    return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" /></div>;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl text-ink">Events</h1>
            <p className="text-sm text-ink-muted mt-1">Group events shown on the public Events page</p>
          </div>
          <Button onClick={() => { resetForm(); setEditing(null); setShowForm(true); }} className="gap-2">
            <Plus className="w-4 h-4" /> Add Event
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] divide-y divide-line">
          {events.length === 0 ? (
            <EmptyState icon={CalendarHeart} title="No events yet" />
          ) : (
            events.map((event) => (
              <div key={event.id} className="p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-ink">{event.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${event.isActive ? 'bg-sage-100 text-sage-700' : 'bg-gray-100 text-gray-600'}`}>
                      {event.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted mt-1">
                    {new Date(event.startDate).toLocaleDateString()} {event.location && `· ${event.location}`} · {event.images.length} photo{event.images.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => setGalleryEvent(event)} className="p-2 text-ink-muted hover:text-sage-700" title="Manage gallery">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleEdit(event)} className="p-2 text-ink-muted hover:text-sage-700" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(event.id)} className="p-2 text-red-400 hover:text-red-600" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <Modal open={showForm} onClose={() => setShowForm(false)} title={editing ? 'Edit Event' : 'Add Event'}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Title" htmlFor="title" required>
              <Input id="title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </Field>
            <Field label="Slug" htmlFor="slug" hint="Leave blank to auto-generate">
              <Input id="slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
            </Field>
            <Field label="Description" htmlFor="description" required>
              <RichTextEditor value={form.description} onChange={(value) => setForm({ ...form, description: value })} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Start Date" htmlFor="startDate" required>
                <Input id="startDate" type="date" required value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
              </Field>
              <Field label="End Date" htmlFor="endDate" hint="Optional">
                <Input id="endDate" type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
              </Field>
            </div>
            <Field label="Location" htmlFor="location" hint="Optional">
              <Input id="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </Field>
            <Field label="Banner Image" htmlFor="bannerImage">
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploading}
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleBannerUpload(f); }}
                  className="block w-full text-sm text-ink-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-sage-700 file:text-cream hover:file:bg-sage-800"
                />
                <Input value={form.bannerImage} onChange={(e) => setForm({ ...form, bannerImage: e.target.value })} placeholder="Or paste an image URL" />
              </div>
            </Field>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="isActive" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="w-4 h-4 text-sage-700" />
              <label htmlFor="isActive" className="text-sm text-ink">Active (visible on website)</label>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button type="submit">{editing ? 'Update' : 'Create'}</Button>
            </div>
          </form>
        </Modal>

        <Modal open={!!galleryEvent} onClose={() => setGalleryEvent(null)} title={`Gallery — ${galleryEvent?.title || ''}`}>
          {galleryEvent && (
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                disabled={uploadingGallery}
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleGalleryUpload(f); }}
                className="block w-full text-sm text-ink-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-sage-700 file:text-cream hover:file:bg-sage-800"
              />
              <div className="grid grid-cols-3 gap-3">
                {galleryEvent.images.map((image) => (
                  <div key={image.id} className="relative aspect-square rounded-xl overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.imageUrl} alt={image.caption || ''} className="w-full h-full object-cover" />
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove photo"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
