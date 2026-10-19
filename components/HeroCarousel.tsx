'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink?: string;
}

export default function HeroCarousel({ initialSlides }: { initialSlides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = initialSlides.length > 0 ? initialSlides : [
    {
      id: 'default-1',
      title: "A gentle space to feel heard",
      subtitle: "Individual & Couples Counselling",
      description: "A calm, confidential space to work through anxiety, stress, relationships, and life's transitions — at your own pace.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1920",
      ctaText: "Explore Services",
      ctaLink: "/services"
    }
  ];

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[85vh] min-h-[560px] max-h-[760px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/25 to-transparent z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="relative z-20 h-full flex flex-col items-start justify-center text-left text-cream px-6 md:px-16 max-w-2xl">
            <span className="text-sm tracking-[0.12em] font-semibold uppercase mb-4 text-sand animate-fadeInUp">
              {slide.subtitle}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6 animate-fadeInUp delay-100">
              {slide.title}
            </h1>
            <p className="max-w-xl text-base md:text-lg text-sand/90 mb-10 leading-relaxed animate-fadeInUp delay-200">
              {slide.description}
            </p>
            <Link
              href={slide.ctaLink || '/services'}
              className="inline-flex items-center rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-semibold hover:bg-white transition-colors animate-fadeInUp delay-300"
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-cream/70 hover:text-cream transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-cream/70 hover:text-cream transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide ? "bg-cream w-8" : "bg-cream/40 w-2.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
