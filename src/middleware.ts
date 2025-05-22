import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProductRoute = pathname.startsWith('/produto')

  if (!isProductRoute && pathname !== '/favicon.ico') {
    const url = request.nextUrl.clone()
    url.pathname = '/produto/tenis-esportivo'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api|static|.*\\..*).*)'],
}
