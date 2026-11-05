import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';


export default async function Proxy(request: NextRequest) {
    const auth = request.cookies.get('auth');
    if(!auth && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
}