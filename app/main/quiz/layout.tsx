import React from "react";

function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
}

export default QuizLayout;
