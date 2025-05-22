'use client'

import { useState } from 'react'

import { Loader, MapPinCheckInside } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { InputZipcode } from '@/components/ui/input-mask'
import { useFreight } from '@/hooks/use-freight'
import { useProductStore } from '@/store/product.store'

export function FreightCalculator() {
  const freight = useProductStore((s) => s.freight)
  const setFreight = useProductStore((s) => s.setFreight)

  const { fetchAddress, loading, error } = useFreight()

  const [input, setInput] = useState('')

  const handleSearch = async () => {
    if (!input) return

    try {
      const address = await fetchAddress(input)
      setFreight({ zipcode: input, address })
    } catch {
      setFreight({ zipcode: input, address: '' })
    }
  }

  return (
    <div className="flex max-w-md flex-col gap-2">
      <label className="text-sm">Calcular frete</label>
      <div className="flex gap-4">
        <InputZipcode
          placeholder="Informe seu CEP"
          value={input}
          onChange={(value: string) => setInput(value)}
          className="h-full"
        />
        <Button
          onClick={handleSearch}
          disabled={loading}
          className="cursor-pointer rounded-sm text-sm text-white transition-colors"
          size="lg"
        >
          {loading ? 'Buscando' : 'Buscar'}
          {loading && <Loader className="ml-2 size-4 animate-spin" />}
        </Button>
      </div>

      {freight.address && (
        <div className="flex items-center gap-2">
          <MapPinCheckInside className="size-4 text-green-600" />
          <p className="text-sm text-green-600">{freight.address}</p>
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
