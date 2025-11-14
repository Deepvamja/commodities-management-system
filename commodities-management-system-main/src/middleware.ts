import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This is a client-side auth system, so middleware just passes through
  // Real authentication would be handled here
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/products/:path*'],
};
