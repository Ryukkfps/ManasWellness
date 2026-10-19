'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Briefcase } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';

const MODE_OPTIONS = [
  { value: 'IN_PERSON', label: 'In-person' },
  { value: 'ONLINE', label: 'Online' },
  { value: 'PHONE', label: 'Phone' },
];

interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string | null;
  description: string;
  durationMinutes: number | null;
  priceLabel: string | null;
  modes: string[];
  image: string | null;
  icon: string | null;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const emptyForm = {
  title: '',
  slug: '',
  shortDescription: '',
  description: '',
  durationMinutes: '',
  priceLabel: '',
  modes: [] as string[],
  image: '',
  icon: '',
  order: 0,
  isActive: true,
};

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services?admin=true');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      alert('Title and description are required');
      return;
    }

    setActionLoading('form');

    try {
      const method = editingService ? 'PUT' : 'POST';
      const url = editingService ? `/api/services/${editingService.id}` : '/api/services';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          durationMinutes: formData.durationMinutes ? parseInt(formData.durationMinutes) : null,
        }),
      });

      if (response.ok) {
        await fetchServices();
        setShowForm(false);
        setEditingService(null);
        resetForm();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Error saving service');
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      slug: service.slug,
      shortDescription: service.shortDescription || '',
      description: service.description,
      durationMinutes: service.durationMinutes ? String(service.durationMinutes) : '',
      priceLabel: service.priceLabel || '',
      modes: service.modes || [],
      image: service.image || '',
      icon: service.icon || '',
      order: service.order,
      isActive: service.isActive,
    });
    setShowForm(true);
  };

  const handleDelete = async (serviceId: string) => {
    if (!confirm('Are you sure you want to delete this service?')) {
      return;
    }

    setActionLoading(serviceId);
    try {
      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchServices();
      } else {
        alert('Error deleting service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Error deleting service');
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleActive = async (serviceId: string, currentStatus: boolean) => {
    setActionLoading(serviceId);
    try {
      const service = services.find(s => s.id === serviceId);
      if (!service) return;

      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...service,
          isActive: !currentStatus,
        }),
      });

      if (response.ok) {
        await fetchServices();
      }
    } catch (error) {
      console.error('Error toggling service status:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploadingImage(true);
    try {
      const uploadData = new FormData();
      uploadData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (response.ok) {
        const result = await response.json();
        setFormData(prev => ({ ...prev, image: result.filePath }));
      } else {
        const errorData = await response.json();
        alert(`Upload failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setUploadingImage(false);
    }
  };

  const toggleMode = (mode: string) => {
    setFormData(prev => ({
      ...prev,
      modes: prev.modes.includes(mode)
        ? prev.modes.filter(m => m !== mode)
        : [...prev.modes, mode],
    }));
  };

  const resetForm = () => {
    setFormData({ ...emptyForm, order: services.length + 1 });
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-serif text-sage-700 uppercase tracking-widest mb-2">
              Services Management
            </h1>
            <p className="text-gray-600">
              Manage your service offerings — duration, pricing, and consultation modes
            </p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setEditingService(null);
              setShowForm(true);
            }}
            className="flex items-center px-4 py-2 bg-sage-700 text-white text-sm font-medium rounded-md hover:bg-sage-800 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Service
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Services</h2>
            <p className="text-sm text-gray-500 mt-1">
              {services.length} service{services.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {services.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No services found</p>
                <button
                  onClick={() => {
                    resetForm();
                    setShowForm(true);
                  }}
                  className="mt-2 text-sage-700 hover:underline text-sm"
                >
                  Create your first service
                </button>
              </div>
            ) : (
              services.map((service) => (
                <div key={service.id} className="p-6">
                  <div className="flex items-start justify-between flex-wrap gap-y-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
                        <h3 className="font-medium text-gray-900">{service.title}</h3>
                        {service.priceLabel && (
                          <span className="text-sm text-gray-500">• {service.priceLabel}</span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          service.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {service.isActive ? 'Active' : 'Inactive'}
                        </span>
                        <span className="text-xs text-gray-400">Order: {service.order}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {service.shortDescription || service.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        {service.durationMinutes && <span>{service.durationMinutes} min</span>}
                        {service.modes?.length > 0 && <span>{service.modes.join(', ')}</span>}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleToggleActive(service.id, service.isActive)}
                        disabled={actionLoading === service.id}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title={service.isActive ? 'Deactivate' : 'Activate'}
                      >
                        {service.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => handleEdit(service)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(service.id)}
                        disabled={actionLoading === service.id}
                        className="p-2 text-red-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        {actionLoading === service.id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-400"></div>
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingService ? 'Edit Service' : 'Add Service'}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900 placeholder-gray-600"
                      placeholder="Service title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug (leave blank to auto-generate)
                    </label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900 placeholder-gray-600"
                      placeholder="individual-therapy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description
                  </label>
                  <textarea
                    rows={2}
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900 placeholder-gray-600"
                    placeholder="Brief service description (used in listings)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Description (Rich Text) *
                  </label>
                  <RichTextEditor
                    value={formData.description}
                    onChange={(value) => setFormData({ ...formData, description: value })}
                    placeholder="Detailed service description..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image
                  </label>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Upload image (JPG, PNG, GIF, WebP - Max 5MB)</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            await handleFileUpload(file);
                          }
                        }}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-sage-700 file:text-white hover:file:bg-sage-800"
                        disabled={uploadingImage}
                      />
                      {uploadingImage && (
                        <p className="text-sm text-blue-600 mt-1">Uploading image...</p>
                      )}
                    </div>

                    <div className="text-center text-sm text-gray-500">or</div>
                    <div>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900 placeholder-gray-600"
                        placeholder="Enter image URL"
                      />
                    </div>

                    {formData.image && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600 mb-2">Preview:</p>
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="h-20 w-32 object-cover rounded border"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (minutes)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.durationMinutes}
                      onChange={(e) => setFormData({ ...formData, durationMinutes: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900"
                      placeholder="50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Label
                    </label>
                    <input
                      type="text"
                      value={formData.priceLabel}
                      onChange={(e) => setFormData({ ...formData, priceLabel: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900"
                      placeholder="₹1,800 / 50 min"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon (lucide-react name)
                  </label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-700 focus:border-transparent text-gray-900"
                    placeholder="HeartHandshake"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Modes
                  </label>
                  <div className="flex gap-4">
                    {MODE_OPTIONS.map((mode) => (
                      <label key={mode.value} className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={formData.modes.includes(mode.value)}
                          onChange={() => toggleMode(mode.value)}
                          className="w-4 h-4 text-sage-700 border-gray-300 rounded focus:ring-sage-700"
                        />
                        {mode.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-4 h-4 text-sage-700 border-gray-300 rounded focus:ring-sage-700"
                  />
                  <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                    Active (visible on website)
                  </label>
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingService(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading === 'form'}
                    className="px-8 py-3 bg-sage-700 text-white text-sm font-medium rounded-md hover:bg-sage-800 disabled:opacity-50"
                  >
                    {actionLoading === 'form' ? 'Saving...' : editingService ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
