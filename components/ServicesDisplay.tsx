'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { Leaf } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';

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
}

const MODE_LABELS: Record<string, string> = {
  IN_PERSON: 'In-person',
  ONLINE: 'Online',
  PHONE: 'Phone',
};

function ServiceIcon({ name }: { name: string | null }) {
  const IconComponent = name && (Icons as any)[name] ? (Icons as any)[name] : Leaf;
  return <IconComponent className="w-6 h-6 text-sage-700" aria-hidden="true" />;
}

export default function ServicesDisplay({ limit }: { limit?: number }) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" />
      </div>
    );
  }

  if (services.length === 0) {
    return <EmptyState icon={Leaf} title="No services available" description="Please check back soon." />;
  }

  const shown = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shown.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.slug}`}
          className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(43,47,44,0.06)] flex flex-col gap-4 hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center">
            <ServiceIcon name={service.icon} />
          </div>
          <h3 className="font-serif text-xl text-ink">{service.title}</h3>
          <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
            {service.shortDescription || service.description.replace(/<[^>]*>/g, '')}
          </p>
          <div className="flex items-center justify-between mt-auto pt-2">
            {service.priceLabel && (
              <span className="text-sm font-semibold text-sage-700">{service.priceLabel}</span>
            )}
            {service.modes?.length > 0 && (
              <span className="text-xs text-ink-muted">
                {service.modes.map((m) => MODE_LABELS[m] || m).join(' · ')}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
