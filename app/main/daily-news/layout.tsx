import TopBar from "@/src/Common/TopBar";
import React from "react";

function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full">
      <TopBar />
      {children}
    </main>
  );
}

export default NewsLayout;
