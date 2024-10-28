import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/main"]; // 로그인 정보가 있어야만 접근할 수 있는 페이지
const publicRoutes = ["/sign-in", "/sign-up"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken");
  const currentPath = request.nextUrl.pathname;
  if (!token && protectedRoutes.includes(currentPath)) {
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
