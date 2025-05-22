import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { TTL } from '@/config/constants'
import { createJSONStorageWithTTL } from '@/lib/storage'
import { Product } from '@/types/product'

type Variant = {
  size?: string
  color?: string
}

type Freight = {
  zipcode: string
  address?: string
}

export type ProductStoreState = {
  activeImage: string
  setActiveImage: (url: string) => void

  variant: Variant

  freight: Freight
  setFreight: (freight: Freight) => void

  selectedProduct: Product | null
  setSelectedProductAndVariant: (product: Product | null) => void
  setSelectedSizeForCurrentVariant: (size: string | undefined) => void

  reset: () => void
}

const initialState: Omit<
  ProductStoreState,
  | 'setActiveImage'
  | 'setFreight'
  | 'setSelectedProductAndVariant'
  | 'setSelectedSizeForCurrentVariant'
  | 'reset'
> = {
  activeImage: '',
  variant: { color: undefined, size: undefined },
  freight: { zipcode: '', address: '' },
  selectedProduct: null,
}

export const useProductStore = create<ProductStoreState>()(
  persist(
    (set) => ({
      ...initialState,
      setActiveImage: (url) => set({ activeImage: url }),
      setFreight: (freight) => set({ freight }),
      setSelectedProductAndVariant: (product) => {
        if (product) {
          set({
            selectedProduct: product,
            activeImage: product.image[0] || 'https://placehold.co/800x600',
            variant: { color: product.color, size: undefined },
          })
        } else {
          set({
            selectedProduct: null,
            activeImage: 'https://placehold.co/800x600',
            variant: { color: undefined, size: undefined },
          })
        }
      },
      setSelectedSizeForCurrentVariant: (size) => {
        set((state) => ({
          variant: { ...state.variant, size },
        }))
      },

      reset: () => set(initialState),
    }),
    {
      name: 'CLEAN-ECOMMERCE-PRODUCT-STORE',
      version: 3,
      storage: createJSONStorageWithTTL(TTL),
    }
  )
)
