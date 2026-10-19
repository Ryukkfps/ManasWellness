'use client';

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';

interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  isApproved: boolean;
  createdAt: string;
}

interface ReviewsDisplayProps {
  variant?: 'grid' | 'carousel' | 'list';
  limit?: number;
  showTitle?: boolean;
  className?: string;
}

export default function ReviewsDisplay({
  variant = 'grid',
  limit,
  showTitle = true,
  className = ''
}: ReviewsDisplayProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(limit ? data.slice(0, limit) : data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-clay fill-current' : 'text-line'}`}
      />
    ));
  };

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-sand rounded-2xl h-32" />
          ))}
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return <EmptyState icon={Star} title="No testimonials yet" />;
  }

  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] p-6 h-full">
      <div className="flex items-start gap-4">
        <Quote className="w-7 h-7 text-sage-500 shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">{renderStars(review.rating)}</div>
          </div>

          <blockquote className="text-ink mb-4 leading-relaxed">&ldquo;{review.content}&rdquo;</blockquote>

          <div>
            <p className="font-medium text-ink">{review.author}</p>
            <p className="text-sm text-ink-muted">
              {new Date(review.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (variant === 'carousel') {
    return (
      <div className={className}>
        {showTitle && (
          <h2 className="font-serif text-2xl text-ink text-center mb-8">Client Testimonials</h2>
        )}

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full shrink-0 px-4">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {reviews.length > 1 && (
            <>
              <button
                onClick={prevReview}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-sand transition-colors"
              >
                <svg className="w-5 h-5 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextReview}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-sand transition-colors"
              >
                <svg className="w-5 h-5 text-ink-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="flex justify-center mt-6 gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-sage-700' : 'bg-line'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className={className}>
        {showTitle && <h2 className="font-serif text-2xl text-ink mb-8">Client Reviews</h2>}
        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="font-serif text-2xl text-ink text-center mb-8">What our clients say</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
