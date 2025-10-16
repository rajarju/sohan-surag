'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SanityImage } from '@/types/sanity';
import { urlFor } from '@/sanity/lib/image';

interface ImageCarouselProps {
  images: SanityImage[];
  altPrefix?: string;
}

export default function ImageCarousel({ images, altPrefix = 'Image' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main Image Display */}
      <div className="relative w-full min-h-[400px] bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={urlFor(images[currentIndex]).width(1200).url()}
          alt={`${altPrefix} ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority={currentIndex === 0}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#4A9FFF] w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center mt-2 text-sm text-white/60">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
