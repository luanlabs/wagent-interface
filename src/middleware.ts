import { NextRequest, NextResponse } from 'next/server';
import { Pages } from './constants/pages';

export default async function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('token')?.value;
  const currentPath = req.nextUrl.pathname;
  const authorizedRoutes = [Pages.DASHBOARD];
  const unauthorizedRoutes = [Pages.FORGET, Pages.SIGNIN, Pages.SIGNUP];

  if (authorizedRoutes.some((path) => currentPath.startsWith(path))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(Pages.SIGNIN, req.url));
    }
    return NextResponse.next();
  } else if (unauthorizedRoutes.some((path) => currentPath.startsWith(path))) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(Pages.DASHBOARD, req.url));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}
