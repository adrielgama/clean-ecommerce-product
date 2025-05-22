'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  sizes: string[]
  colors: string[]
  selectedSize?: string
  selectedColor: string
  onSizeChange: (size: string) => void
  onColorChange: (color: string) => void
}

export function VariantSelector({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: Props) {
  const colorMap: { [key: string]: string } = {
    vermelho: 'bg-red-400',
    azul: 'bg-blue-400',
    verde: 'bg-teal-400',
    preto: 'bg-zinc-900',
    branco: 'bg-white border-gray-300',
    cinza: 'bg-gray-400',
    amarelo: 'bg-yellow-400',
    laranja: 'bg-orange-400',
    roxo: 'bg-purple-400',
    rosa: 'bg-pink-400',
  }

  return (
    <div className="flex flex-col gap-6">
      {sizes.length > 0 && (
        <div>
          <p className="mb-1 text-sm font-medium">Tamanho</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`cursor-pointer rounded border px-4 py-1 text-sm transition ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div>
          <p className="mb-1 text-sm font-medium">Cor</p>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => {
              const normalizedColor = color.toLowerCase()
              const isSelected = selectedColor === color
              const mappedColorClass = colorMap[normalizedColor]
              const isWhite = normalizedColor === 'branco'

              const buttonClasses = cn(
                'size-6 cursor-pointer rounded-full border transition-all duration-200 ease-in-out hover:ring-2 hover:ring-zinc-100 hover:ring-offset-2',
                isSelected ? 'ring-2 ring-zinc-300 ring-offset-2' : '',
                mappedColorClass || 'bg-gray-200 hover:bg-gray-300',
                isWhite ? 'text-black' : 'text-white',
                mappedColorClass ? `hover:${mappedColorClass}` : ''
              )

              return (
                <Button
                  size="icon"
                  key={color}
                  onClick={() => onColorChange(color)}
                  className={buttonClasses}
                  style={{
                    backgroundColor:
                      !isSelected && !mappedColorClass ? '' : undefined,
                  }}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
