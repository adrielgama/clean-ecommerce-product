'use client'

import { useEffect, useState } from 'react'

import { useProductStore } from '@/store/product.store'

export function useHasHydrated() {
  const [hasHydrated, setHasHydrated] = useState(false)

  const store = useProductStore as typeof useProductStore & {
    persist: {
      hasHydrated: () => boolean
      onFinishHydration: (callback: () => void) => () => void
    }
  }

  useEffect(() => {
    if (store.persist.hasHydrated()) {
      setHasHydrated(true)
      return
    }

    const unsub = store.persist.onFinishHydration(() => {
      setHasHydrated(true)
    })

    return () => {
      unsub()
    }
  }, [store])

  return hasHydrated
}
