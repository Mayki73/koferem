import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_req: NextRequest) {
  return new NextResponse('Not Found', {
    status: 404,
    headers: { 'Cache-Control': 'no-store' },
  })
}

export const config = {
  matcher: '/:path*', // перехватываем все пути
}
