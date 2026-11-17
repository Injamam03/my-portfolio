"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  title: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  title,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, currentIndex, images, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshot lightbox`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative flex flex-col items-center max-h-[90vh] max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex w-full items-center justify-between pb-3 text-white">
          <div className="flex items-center gap-2">
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold sm:text-base">
              {title}
            </h3>
            <span className="font-[family-name:var(--font-mono)] text-xs text-neutral-400">
              ({currentIndex + 1} of {images.length})
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Screenshot View Frame */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-2 sm:p-4 shadow-2xl">
          <div className="relative h-[65vh] w-[320px] sm:w-[360px] md:w-[400px]">
            <Image
              src={currentImage}
              alt={`${title} screenshot ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 320px, (max-width: 768px) 360px, 400px"
              className="object-contain"
              priority
            />
          </div>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              aria-label="Previous screenshot"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/80 text-white border border-neutral-700 backdrop-blur transition-all hover:bg-neutral-800 hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              aria-label="Next screenshot"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/80 text-white border border-neutral-700 backdrop-blur transition-all hover:bg-neutral-800 hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Thumbnail Bar */}
        {images.length > 1 && (
          <div className="mt-3 flex items-center gap-2 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <button
                key={img}
                onClick={() => onNavigate(idx)}
                aria-label={`Jump to screenshot ${idx + 1}`}
                className={`relative h-14 w-10 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  idx === currentIndex
                    ? "border-[var(--color-accent)] scale-105"
                    : "border-neutral-700 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
