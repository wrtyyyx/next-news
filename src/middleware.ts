import { match } from 'assert';

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*','/create/:path*']
}