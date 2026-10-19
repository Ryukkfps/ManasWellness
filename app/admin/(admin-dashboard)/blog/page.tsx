'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, BookOpen } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Field, Input, Textarea, Select } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { EmptyState } from '@/components/ui/EmptyState';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  tags: string[];
  authorName: string | null;
  status: 'DRAFT' | 'PUBLISHED';
}

const EMPTY_FORM = {
  title: '', slug: '', excerpt: '', content: '', coverImage: '', tags: '', authorName: '', status: 'DRAFT' as 'DRAFT' | 'PUBLISHED',
};

export default function AdminBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog?admin=true');
      if (res.ok) setPosts(await res.json());
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/blog/${editing.id}` : '/api/blog';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean) }),
    });
    if (res.ok) {
      await fetchPosts();
      setShowForm(false);
      setEditing(null);
      setForm(EMPTY_FORM);
    } else {
      alert('Error saving post');
    }
  };

  const handleEdit = (post: Post) => {
    setEditing(post);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content,
      coverImage: post.coverImage || '',
      tags: post.tags.join(', '),
      authorName: post.authorName || '',
      status: post.status,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
    if (res.ok) await fetchPosts();
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const data = new FormData();
      data.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: data });
      if (res.ok) {
        const result = await res.json();
        setForm((prev) => ({ ...prev, coverImage: result.filePath }));
      }
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" /></div>;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl text-ink">Blog</h1>
            <p className="text-sm text-ink-muted mt-1">Articles shown on the public Blog page</p>
          </div>
          <Button onClick={() => { setForm(EMPTY_FORM); setEditing(null); setShowForm(true); }} className="gap-2">
            <Plus className="w-4 h-4" /> Add Post
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] divide-y divide-line">
          {posts.length === 0 ? (
            <EmptyState icon={BookOpen} title="No posts yet" />
          ) : (
            posts.map((post) => (
              <div key={post.id} className="p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-ink">{post.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${post.status === 'PUBLISHED' ? 'bg-sage-100 text-sage-700' : 'bg-gray-100 text-gray-600'}`}>
                      {post.status}
                    </span>
                  </div>
                  {post.tags.length > 0 && <p className="text-sm text-ink-muted mt-1">{post.tags.join(', ')}</p>}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => handleEdit(post)} className="p-2 text-ink-muted hover:text-sage-700" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="p-2 text-red-400 hover:text-red-600" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <Modal open={showForm} onClose={() => setShowForm(false)} title={editing ? 'Edit Post' : 'Add Post'} maxWidth="max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Title" htmlFor="title" required>
              <Input id="title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </Field>
            <Field label="Slug" htmlFor="slug" hint="Leave blank to auto-generate">
              <Input id="slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
            </Field>
            <Field label="Excerpt" htmlFor="excerpt" hint="Short summary for the listing page">
              <Textarea id="excerpt" rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
            </Field>
            <Field label="Content" htmlFor="content" required>
              <RichTextEditor value={form.content} onChange={(value) => setForm({ ...form, content: value })} />
            </Field>
            <Field label="Cover Image" htmlFor="coverImage">
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploading}
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); }}
                  className="block w-full text-sm text-ink-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-sage-700 file:text-cream hover:file:bg-sage-800"
                />
                <Input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} placeholder="Or paste an image URL" />
              </div>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Tags" htmlFor="tags" hint="Comma-separated">
                <Input id="tags" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
              </Field>
              <Field label="Author" htmlFor="authorName" hint="Optional">
                <Input id="authorName" value={form.authorName} onChange={(e) => setForm({ ...form, authorName: e.target.value })} />
              </Field>
            </div>
            <Field label="Status" htmlFor="status">
              <Select id="status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as 'DRAFT' | 'PUBLISHED' })}>
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
              </Select>
            </Field>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
              <Button type="submit">{editing ? 'Update' : 'Create'}</Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
