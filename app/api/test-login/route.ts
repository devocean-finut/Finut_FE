import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function POST(req: NextApiRequest, res: NextApiResponse) {
  const response = NextResponse.json({ message: "로그인 성공!" });

  // 쿠키 설정
  response.cookies.set("accessToken", "1234", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
  });

  return response;
}
