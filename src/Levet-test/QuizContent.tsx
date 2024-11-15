// O X 문자 수정 필요

import React, { useState } from "react";
import { Button } from "../Common/Button";
import Modal from "../Common/Modal";
import { useRouter } from "next/navigation";
import { QuestionType } from "@/app/main/level-test/page";

type QuizContentProps = {
  quiz: QuestionType[];
  quizNumber: number;
  nextQuiz: () => void;
};

function QuizContent({ quiz, quizNumber, nextQuiz }: QuizContentProps) {
  const router = useRouter();
  const {
    id,
    quest,
    question,
    option1,
    option2,
    option3,
    correctOption,
    description,
  } = quiz[quizNumber];
  const options = [option1, option2, option3];
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [descriptionModalOpen, setDescriptionModalOpen] =
    useState<boolean>(false);
  const checkAnswer = (answer: number) => {
    if (answer === correctOption) {
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
      <div className="w-full flex flex-col gap-8 pt-[20%]">
        <div className="bg-white text-2xl font-semibold p-4 rounded-lg break-words drop-shadow-sm min-h-[200px] flex justify-center items-center">
          {question}
        </div>

        {isDescription ? (
          <>
            <div
              className={`${
                isCorrect ? "text-blue-primary" : "text-red-primary"
              } text-xl font-medium text-center`}
            >
              {isCorrect ? (
                <span>
                  정답입니다!
                  <br />
                  <span style={{ wordBreak: "break-word", marginTop: "12px" }}>
                    {options[correctOption - 1]}
                  </span>
                </span>
              ) : (
                <span>
                  오답입니다! <br /> 정답은 {correctOption}번 입니다
                  <br />
                  <span style={{ wordBreak: "break-word", marginTop: "12px" }}>
                    {options[correctOption - 1]}
                  </span>
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
          <div className="flex flex-col gap-4">
            {options.map((option, index) => {
              return (
                <Button
                  width="100%"
                  backgroundColor="white"
                  color="primary"
                  fontSize="xl"
                  weight="medium"
                  borderRadius={16}
                  className="drop-shadow-sm flex flex-col items-center break-words"
                  onClick={() => checkAnswer(index + 1)}
                >
                  <span>{option}</span>
                </Button>
              );
            })}
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
