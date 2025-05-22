import { productVariants } from '@/lib/product'
import { ProductClient } from './_components/product-client'

export default function ProductPage() {
  const colors = productVariants.map((v) => v.color)
  const initialVariant = productVariants[0]

  return (
    <ProductClient
      productVariants={productVariants}
      initialVariant={initialVariant}
      colors={colors}
    />
  )
}
