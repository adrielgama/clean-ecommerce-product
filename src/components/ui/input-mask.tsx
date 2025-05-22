'use client'

import { forwardRef, useEffect, useMemo } from 'react'

import { Input } from '@/components/ui/input'

function formatZipcode(value: string) {
  return value
    .replace(/\D+/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

type InputZipcodeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  value: string
  onChange: (value: string) => void
  onMask?: (masked: string) => void
}

export const InputZipcode = forwardRef<HTMLInputElement, InputZipcodeProps>(
  ({ value, onChange, onMask, ...props }, ref) => {
    const maskedValue = useMemo(() => formatZipcode(value), [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const masked = formatZipcode(e.target.value)
      onChange(masked)
    }

    useEffect(() => {
      onMask?.(maskedValue)
    }, [maskedValue, onMask])

    return (
      <Input {...props} ref={ref} value={maskedValue} onChange={handleChange} />
    )
  }
)

InputZipcode.displayName = 'InputZipcode'
