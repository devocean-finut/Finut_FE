// O X 문자 수정 필요

import React, { useState } from "react";
import { Button } from "../Common/Button";
import Modal from "../Common/Modal";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { id, difficulty, question, answer, description } = quiz[quizNumber];
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [descriptionModalOpen, setDescriptionModalOpen] =
    useState<boolean>(false);
  const checkAnswer = (userAnswer: boolean) => {
    if (answer === userAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsDescription(true);
  };
  const handleNextQuiz = () => {
    setIsCorrect(null);
    setIsDescription(false);
    nextQuiz();
    setIsCorrect(null);
    setIsDescription(false);
  };

  const handleDescriptionModal = () => {
    setDescriptionModalOpen(!descriptionModalOpen);
  };

  return (
    <>
      <div className="w-5/6 flex flex-col gap-8 pt-[20%]">
        <div className="bg-white text-2xl p-4 rounded-lg break-words drop-shadow-sm min-h-[200px] flex justify-center items-center">
          {question}
        </div>

        {isDescription ? (
          <>
            <div
              className={`${
                isCorrect ? "text-blue-primary" : "text-red-primary"
              } text-2xl font-bold text-center`}
            >
              {isCorrect ? (
                "정답입니다!"
              ) : (
                <span>
                  오답입니다! <br /> 정답은 {answer ? "O" : "X"} 입니다.
                </span>
              )}
            </div>
            <Button onClick={handleDescriptionModal} className="fadeIn">
              해설보기
            </Button>
            {descriptionModalOpen && (
              <Modal
                title="해설"
                show={descriptionModalOpen}
                onClose={handleDescriptionModal}
              >
                {description}
              </Modal>
            )}
          </>
        ) : (
          <div className="w-full flex gap-8">
            <Button
              width="100%"
              backgroundColor="blue-secondary"
              color="blue-primary"
              fontSize="2xl"
              weight="bold"
              borderRadius={16}
              className="drop-shadow-sm flex flex-col items-center"
              onClick={() => checkAnswer(true)}
            >
              <span className="text-3xl">O</span>
              <span>그렇다</span>
            </Button>
            <Button
              width="100%"
              backgroundColor="red-secondary"
              color="red-primary"
              fontSize="2xl"
              weight="bold"
              className="drop-shadow-sm flex flex-col items-center"
              borderRadius={16}
              onClick={() => checkAnswer(false)}
            >
              <span className="text-3xl">X</span> <span>아니다</span>
            </Button>
          </div>
        )}
        <div className={`${isCorrect !== null ? "" : "hidden"}`}>
          <Button
            onClick={handleNextQuiz}
            backgroundColor="primary"
            color="white"
            className="fadeIn"
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
}

export default QuizContent;
