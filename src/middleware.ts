import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/server';

const protectedPaths = ['/mypola', '/ranking'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isChallengeProof = /^\/challenge\/[^/]+\/proof\/?$/.test(pathname);
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path)) || isChallengeProof;

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    const redirectUrl = new URL('/signin', request.url);
    redirectUrl.searchParams.set('redirectedFrom', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/mypola/:path*', '/ranking/:path*', '/challenge/:path*'],
};
