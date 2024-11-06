// O X 문자 수정 필요

import React from "react";
import { Button } from "../Button";

export type QuestionType = {
  id: number;
  difficulty: "HI" | "MI" | "LO";
  question: string;
  answer: boolean;
  description: string;
};
type QuizContentProps = {
  quiz: QuestionType[];
  quizNumber: number;
  nextQuiz: () => void;
};

function QuizContent({ quiz, quizNumber, nextQuiz }: QuizContentProps) {
  return (
    <div className="w-5/6 flex flex-col gap-8 pt-[30%]">
      <div className="bg-white text-2xl p-4 rounded-lg break-words drop-shadow-sm min-h-[200px] flex justify-center items-center">
        {quiz[quizNumber].question}
      </div>
      <div className="w-full flex gap-8">
        <Button
          width="100%"
          backgroundColor="blue-secondary"
          color="blue-primary"
          fontSize="2xl"
          weight="bold"
          className="drop-shadow-sm flex flex-col items-center"
        >
          <span className="text-5xl">O</span>
          <span>그렇다</span>
        </Button>
        <Button
          width="100%"
          backgroundColor="red-secondary"
          color="red-primary"
          fontSize="2xl"
          weight="bold"
          className="drop-shadow-sm flex flex-col items-center"
        >
          <span className="text-5xl">X</span> <span>아니다</span>
        </Button>
      </div>
      {/* <div>
        <button onClick={nextQuiz}>다음</button>
      </div> */}
    </div>
  );
}

export default QuizContent;
