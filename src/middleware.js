import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const path = request.nextUrl.pathname

  const publicPath = path === "/"

  const token = request.cookies.get('token')?.value || ""

  if (publicPath && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (!publicPath&& !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
 

export const config = {
  matcher: [
    '/','/about','/signup','/service'
  ]
}