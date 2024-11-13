import TopBar from "@/src/Common/TopBar";
import React from "react";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="px-6">{children}</main>
    </>
  );
}

export default MyPageLayout;
