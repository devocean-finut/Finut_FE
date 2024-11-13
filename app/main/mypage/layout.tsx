import TopBar from "@/src/Common/TopBar";
import React from "react";

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="pb-6 pt-0">{children}</main>
    </>
  );
}

export default MyPageLayout;
