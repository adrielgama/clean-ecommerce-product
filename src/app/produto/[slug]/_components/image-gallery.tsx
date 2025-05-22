'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'

type Props = {
  images: string[]
  activeImage: string
  onImageChange: (image: string) => void
}

export function ImageGallery({ images, activeImage, onImageChange }: Props) {
  const mainImage = activeImage || images[0]

  if (!images || images.length === 0) {
    return <div>No images available</div>
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-background-image overflow-hidden rounded-lg border">
        <Image
          src={mainImage}
          alt="Imagem do produto"
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-contain"
          quality={50}
          priority
        />
      </div>

      <div className="flex gap-8">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => onImageChange(img)}
            className={cn(
              'cursor-pointer overflow-hidden rounded-lg shadow-lg transition hover:ring-2 hover:ring-zinc-200',
              img === mainImage && 'ring-2 ring-zinc-300'
            )}
          >
            <Image
              src={img}
              alt="Miniatura"
              width={64}
              height={64}
              quality={50}
              className="size-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
