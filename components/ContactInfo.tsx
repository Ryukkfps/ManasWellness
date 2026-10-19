'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoData {
  id: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string | null;
}

interface ContactInfoProps {
  variant?: 'default' | 'footer' | 'card';
  showTitle?: boolean;
  className?: string;
}

export default function ContactInfo({
  variant = 'default',
  showTitle = true,
  className = ''
}: ContactInfoProps) {
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info');
      if (response.ok) {
        const data = await response.json();
        setContactInfo(data);
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-sand rounded w-3/4 mb-2" />
        <div className="h-4 bg-sand rounded w-1/2 mb-2" />
        <div className="h-4 bg-sand rounded w-2/3" />
      </div>
    );
  }

  if (!contactInfo) return null;

  const isCard = variant === 'card';
  const containerClass = isCard ? 'bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)]' : '';
  const titleClass = isCard ? 'font-serif text-xl text-ink mb-6' : 'font-semibold text-ink mb-4';
  const textClass = 'text-ink-muted text-sm';
  const linkClass = 'text-sage-700 hover:text-sage-800 font-medium';

  return (
    <div className={`${containerClass} ${className}`}>
      {showTitle && <h3 className={titleClass}>Contact Information</h3>}

      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 mt-0.5 text-sage-700 shrink-0" aria-hidden="true" />
          <div className={textClass}>
            {contactInfo.address.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 mt-0.5 text-sage-700 shrink-0" aria-hidden="true" />
          <a href={`tel:${contactInfo.phone}`} className={linkClass}>
            {contactInfo.phone}
          </a>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 mt-0.5 text-sage-700 shrink-0" aria-hidden="true" />
          <a href={`mailto:${contactInfo.email}`} className={linkClass}>
            {contactInfo.email}
          </a>
        </div>

        {contactInfo.workingHours && (
          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 mt-0.5 text-sage-700 shrink-0" aria-hidden="true" />
            <div className={textClass}>{contactInfo.workingHours}</div>
          </div>
        )}
      </div>
    </div>
  );
}
