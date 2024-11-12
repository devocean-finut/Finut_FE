import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Finut",
  description: "경제교육의 시작은 Finut",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full my-0 mx-auto h-screen">
      <body
        className={`${pretendard.className} flex min-w-[320px] max-w-[600px] min-h-screen flex-col items-center justify-between px-6`}
      >
        {children}
      </body>
    </html>
  );
}
