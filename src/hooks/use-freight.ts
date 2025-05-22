import { useCallback, useState } from 'react'

export function useFreight() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchAddress = useCallback(async (zipcode: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/zipcode?zipcode=${zipcode}`)
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao buscar CEP')
      }

      const address = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
      return address
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    fetchAddress,
    loading,
    error,
  }
}
