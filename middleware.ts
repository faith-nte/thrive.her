import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Minimal middleware to satisfy Next.js requirement.
// Adjust behavior (redirects, rewrites, headers, etc.) as needed.
export function middleware(request: NextRequest) {
	return NextResponse.next()
}

// Optionally scope the middleware. Remove or change the matcher if you
// want middleware to run for different routes.
export const config = {
	matcher: '/:path*',
}
