'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galleryContent, galleryPageContent } from '@/content/gallery'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const hasImages = galleryContent.length > 0

  const selectedImageData = galleryContent.find((img) => img.id === selectedImage)

  return (
    <div className="relative min-h-screen">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-60 top-60 h-96 w-96 rounded-full bg-neon-pink/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-neon-purple/15 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative px-6 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            {galleryPageContent.showUnderConstruction && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1">
                <span className="text-sm">🚧</span>
                <span className="text-xs font-medium text-yellow-400">Under Construction</span>
              </div>
            )}
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {galleryPageContent.title}
            </h1>
            <p className="mt-4 text-lg text-white/60">
              {galleryPageContent.subtitle}
            </p>
          </div>

          {/* Gallery Grid */}
          {hasImages ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryContent.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100" />
                    
                    {/* Caption on hover */}
                    {(image.caption || image.date) && (
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 group-hover:translate-y-0">
                        {image.caption && (
                          <p className="font-medium text-white">{image.caption}</p>
                        )}
                        {image.date && (
                          <p className="mt-1 text-sm text-white/60">{image.date}</p>
                        )}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5">
                <svg className="h-12 w-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg text-white/50">{galleryPageContent.emptyMessage}</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-950/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImageData.url}
              alt={selectedImageData.alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto object-contain"
            />
            {(selectedImageData.caption || selectedImageData.date) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-950/90 to-transparent p-6">
                {selectedImageData.caption && (
                  <p className="text-lg font-medium text-white">{selectedImageData.caption}</p>
                )}
                {selectedImageData.date && (
                  <p className="mt-1 text-white/60">{selectedImageData.date}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
