'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useProductStore } from '@/store/product.store'
import { FreightCalculator } from './freight-calculator'
import { ImageGallery } from './image-gallery'
import { VariantSelector } from './variant-selector'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { formatCurrency } from '@/lib/utils'
import { Loader } from 'lucide-react'
import { Product } from '@/types/product'

type Props = {
  productVariants: Product[]
  initialVariant: Product
  colors: string[]
}

export function ProductClient({
  productVariants,
  initialVariant,
  colors,
}: Props) {
  const {
    activeImage,
    setActiveImage,
    variant,
    setSelectedProductAndVariant,
    setSelectedSizeForCurrentVariant,
    selectedProduct,
  } = useProductStore()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setSelectedProductAndVariant(initialVariant)
  }, [initialVariant, setSelectedProductAndVariant])

  const handleColorChange = (color: string) => {
    const variant = productVariants.find((v) => v.color === color)
    if (variant) {
      setSelectedProductAndVariant(variant)
    }
  }

  const handleSizeChange = (size: string) => {
    setSelectedSizeForCurrentVariant(size)
  }

  const handleAddToCart = () => {
    if (!variant.color || !variant.size) return

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success('Adicionado ao carrinho!', {
        description: `${selectedProduct?.name} - ${variant.color}, ${variant.size} - ${formatCurrency(selectedProduct?.price ?? 0)}`,
      })
    }, 1000)
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
      <ImageGallery
        images={selectedProduct?.image ?? []}
        activeImage={activeImage}
        onImageChange={setActiveImage}
      />

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {`${selectedProduct?.name} - ${variant.color}`}
          </h1>

          <p className="text-lg font-medium text-gray-600">
            {formatCurrency(selectedProduct?.price ?? 0)}
          </p>
        </div>

        <VariantSelector
          sizes={selectedProduct?.sizes ?? []}
          colors={colors}
          selectedSize={variant.size}
          selectedColor={variant.color ?? ''}
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
        />

        <FreightCalculator />

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="max-w-md">
              <Button
                className="w-full cursor-pointer rounded-sm"
                size="lg"
                disabled={!variant.color || !variant.size || isLoading}
                onClick={handleAddToCart}
              >
                {isLoading ? 'Adicionando...' : 'Adicionar ao carrinho'}
                {isLoading && <Loader className="ml-2 size-4 animate-spin" />}
              </Button>
            </div>
          </TooltipTrigger>
          {(!variant.color || !variant.size) && !isLoading && (
            <TooltipContent>
              <p>Selecione cor e tamanho para continuar</p>
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </div>
  )
}
