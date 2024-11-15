import TopBar from "@/src/Common/TopBar";
import React from "react";

function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="w-full h-5/6 flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}

export default QuizLayout;
