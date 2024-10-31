import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background w-full h-screen overflow-y-scroll">
      {children}
    </div>
  );
}

export default MainLayout;
