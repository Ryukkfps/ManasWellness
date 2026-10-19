'use client';

import { useState, useEffect, useMemo } from 'react';
import { StatTile } from '@/components/ui/StatTile';
import { Input, Select, Textarea } from '@/components/ui/Field';
import { Badge } from '@/components/ui/Badge';
import { Mail, Users, CheckCircle, Trophy, Archive } from 'lucide-react';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  adminNotes: string | null;
  createdAt: string;
}

const STATUSES = ['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'ARCHIVED'] as const;

const STATUS_BADGE: Record<string, 'mist' | 'sand' | 'sage' | 'sageFilled' | 'clay'> = {
  NEW: 'mist',
  CONTACTED: 'sand',
  QUALIFIED: 'sage',
  CONVERTED: 'sageFilled',
  ARCHIVED: 'clay',
};

export default function EnquiriesManagement() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [notesDraft, setNotesDraft] = useState('');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch('/api/enquiries');
      const data = await response.json();
      setEnquiries(data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateEnquiry = async (id: string, body: { status?: string; adminNotes?: string }) => {
    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        await fetchEnquiries();
        setSelected((prev) => (prev && prev.id === id ? { ...prev, ...body } : prev));
      }
    } catch (error) {
      console.error('Error updating enquiry:', error);
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const response = await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
      if (response.ok) {
        await fetchEnquiries();
        if (selected?.id === id) setSelected(null);
      }
    } catch (error) {
      console.error('Error deleting enquiry:', error);
    }
  };

  const counts = useMemo(() => {
    const c: Record<string, number> = { NEW: 0, CONTACTED: 0, QUALIFIED: 0, CONVERTED: 0, ARCHIVED: 0 };
    enquiries.forEach((e) => { c[e.status] = (c[e.status] || 0) + 1; });
    return c;
  }, [enquiries]);

  const filtered = enquiries.filter((e) => {
    if (statusFilter !== 'all' && e.status !== statusFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q) || e.subject.toLowerCase().includes(q);
    }
    return true;
  });

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-2xl text-ink mb-1">Enquiries</h1>
        <p className="text-sm text-ink-muted mb-6">Lead tracking for contact-form enquiries</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <StatTile label="New" value={counts.NEW} icon={Mail} />
          <StatTile label="Contacted" value={counts.CONTACTED} icon={Users} />
          <StatTile label="Qualified" value={counts.QUALIFIED} icon={CheckCircle} />
          <StatTile label="Converted" value={counts.CONVERTED} icon={Trophy} />
          <StatTile label="Archived" value={counts.ARCHIVED} icon={Archive} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                placeholder="Search by name, email, or subject..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1"
              />
              <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="sm:w-auto">
                <option value="all">All statuses</option>
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </Select>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] overflow-hidden">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-ink-muted">No enquiries found.</div>
              ) : (
                <ul className="divide-y divide-line">
                  {filtered.map((enquiry) => (
                    <li
                      key={enquiry.id}
                      className={`px-5 py-4 cursor-pointer hover:bg-sand/40 ${selected?.id === enquiry.id ? 'bg-sage-100' : ''}`}
                      onClick={() => { setSelected(enquiry); setNotesDraft(enquiry.adminNotes || ''); }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-ink truncate">{enquiry.subject}</p>
                        <Badge tone={STATUS_BADGE[enquiry.status]}>{enquiry.status}</Badge>
                      </div>
                      <p className="text-sm text-ink-muted mt-1">{enquiry.name} · {enquiry.email}</p>
                      <p className="text-xs text-ink-muted/70 mt-1">
                        {new Date(enquiry.createdAt).toLocaleDateString()} at {new Date(enquiry.createdAt).toLocaleTimeString()}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            {selected ? (
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] p-6">
                <h3 className="font-serif text-lg text-ink mb-4">Enquiry Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-ink-muted">Name</dt>
                    <dd className="text-ink">{selected.name}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">Email</dt>
                    <dd><a href={`mailto:${selected.email}`} className="text-sage-700 hover:underline">{selected.email}</a></dd>
                  </div>
                  {selected.phone && (
                    <div>
                      <dt className="text-ink-muted">Phone</dt>
                      <dd className="text-ink">{selected.phone}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-ink-muted">Message</dt>
                    <dd className="text-ink whitespace-pre-wrap">{selected.message}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted mb-1">Status</dt>
                    <Select
                      value={selected.status}
                      onChange={(e) => updateEnquiry(selected.id, { status: e.target.value })}
                    >
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </Select>
                  </div>
                  <div>
                    <dt className="text-ink-muted mb-1">Internal notes (never shown publicly)</dt>
                    <Textarea
                      rows={3}
                      value={notesDraft}
                      onChange={(e) => setNotesDraft(e.target.value)}
                      onBlur={() => updateEnquiry(selected.id, { adminNotes: notesDraft })}
                    />
                  </div>
                </dl>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-cream bg-sage-700 hover:bg-sage-800"
                  >
                    Reply via Email
                  </a>
                  <button
                    onClick={() => deleteEnquiry(selected.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-red-600 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] p-6 text-center text-ink-muted">
                Select an enquiry to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
