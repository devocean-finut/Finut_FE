import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background max-w-[600px] w-screen h-screen overflow-y-scroll p-6">
      {children}
    </div>
  );
}

export default MainLayout;
