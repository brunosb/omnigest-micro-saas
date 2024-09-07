import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const token = request.cookies.get('next-auth.session-token')
	const pathname = request.nextUrl.pathname

	console.log('token', token)
	console.log('pathname', pathname)

	if (token && pathname.startsWith('/auth')) {
		return NextResponse.redirect(new URL('/app', request.url))
	}

	if (!token && pathname.startsWith('/app')) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
