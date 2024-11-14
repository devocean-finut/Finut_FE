import TopBar from "@/src/Common/TopBar";
import React from "react";

function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <TopBar />
      {children}
    </div>
  );
}

export default NewsLayout;
