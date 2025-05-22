import { PersistStorage, StorageValue } from 'zustand/middleware'

export function createJSONStorageWithTTL<S>(ttl: number): PersistStorage<S> {
  return {
    getItem: (name): StorageValue<S> | null => {
      const str = localStorage.getItem(name)
      if (!str) return null

      try {
        const { value, timestamp } = JSON.parse(str)

        const isExpired = Date.now() - timestamp > ttl
        if (isExpired) {
          localStorage.removeItem(name)
          return null
        }

        return value
      } catch {
        localStorage.removeItem(name)
        return null
      }
    },

    setItem: (name, value) => {
      const payload = {
        value,
        timestamp: Date.now(),
      }
      localStorage.setItem(name, JSON.stringify(payload))
    },

    removeItem: (name) => {
      localStorage.removeItem(name)
    },
  }
}
