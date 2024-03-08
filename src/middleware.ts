import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['pt', 'en', 'fr']
let defaultLocale = 'en'


function getLocale(request: NextRequest) {
    const headers = { 'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5' };
    let languages = new Negotiator({ headers: headers }).languages()
    return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some(
      (locale) => pathname === `/${locale}`
    )
   
    if (pathnameHasLocale) return
   
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|_static).*)"],
}