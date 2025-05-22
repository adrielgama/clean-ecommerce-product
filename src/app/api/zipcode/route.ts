import { NextResponse } from 'next/server'

import { toast } from 'sonner'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const zipcode = searchParams.get('zipcode')

  if (!zipcode) {
    return NextResponse.json({ error: 'CEP não informado' }, { status: 400 })
  }

  const viaCepURL = `${process.env.NEXT_PUBLIC_VIACEP_URL}/${zipcode}/json/`

  try {
    const res = await fetch(viaCepURL)

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Erro na busca do CEP' },
        { status: 500 }
      )
    }

    const data = await res.json()

    if (data.erro) {
      return NextResponse.json({ error: 'CEP inválido' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    toast.error('Erro ao buscar o CEP')
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
