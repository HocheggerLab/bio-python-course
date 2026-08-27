import React from 'react'

/**
 * An image with its caption bound to it, sized to the column rather than
 * to a fixed height. Used for the hand-drawn Claudia panels and diagrams.
 */
export function Figure({
  src,
  alt,
  caption,
  maxHeight,
  className = '',
}: {
  src: string
  alt: string
  caption?: React.ReactNode
  /**
   * Cap the image height, in viewport-height units. A near-square figure in
   * a half-width column is taller than the slide; without a cap it pushes
   * its own caption off the bottom edge.
   */
  maxHeight?: string
  className?: string
}) {
  return (
    <figure className={`w-full ${className}`}>
      <div className="rounded-md overflow-hidden border border-white/10 bg-bio-dark/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          style={maxHeight ? { maxHeight, width: 'auto', margin: '0 auto' } : undefined}
        />
      </div>
      {caption && (
        <figcaption className="text-gray-400 text-sm md:text-base xl:text-lg leading-relaxed mt-3 md:mt-4 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
