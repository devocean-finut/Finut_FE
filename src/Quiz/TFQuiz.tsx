"use client";

import { useState } from "react";
import { Button } from "../Common/Button";
import Modal from "../Common/Modal";
import { useRouter } from "next/navigation";
import CongratulationLottie from "@/public/lottie/Congratulation.json";
import Lottie from "react-lottie-player";

export type QuestionType = {
  id: number;
  difficulty: "HI" | "MI" | "LO";
  question: string;
  answer: "TRUE" | "FALSE";
  description: string;
  quizDoneList: number[];
};
type QuizContentProps = {
  quiz: QuestionType;
};

function TFQuiz({ quiz }: QuizContentProps) {
  const router = useRouter();
  const { id, difficulty, question, answer, description } = quiz;
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [descriptionModalOpen, setDescriptionModalOpen] =
    useState<boolean>(false);
  const [promoteModalOpen, setPromoteModalOpen] = useState<boolean>(false);
  const checkAnswer = (userAnswer: "TRUE" | "FALSE") => {
    if (answer === userAnswer) {
      setIsCorrect(true);
      // 서버에 해당 퀴즈 정답이라고 전달

      // 100 xp에 도달하면 승진 퀴즈 알림
      setTimeout(() => {
        setPromoteModalOpen(true);
      }, 1000);
    } else {
      // 서버에 해당 퀴즈 오답이라고 전달
      setIsCorrect(false);
    }
    setIsDescription(true);
  };

  const handleDescriptionModal = () => {
    setDescriptionModalOpen(!descriptionModalOpen);
  };
  const handlePromoteModal = () => {
    setPromoteModalOpen(!promoteModalOpen);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-8">
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
            </Button>{" "}
            <Button
              backgroundColor="primary"
              color="white"
              onClick={() => router.push("/main")}
              className="fadeIn"
            >
              홈으로
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
              onClick={() => checkAnswer("TRUE")}
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
              onClick={() => checkAnswer("FALSE")}
            >
              <span className="text-3xl">X</span> <span>아니다</span>
            </Button>
          </div>
        )}
        {promoteModalOpen && (
          <Modal
            title="축하합니다!"
            show={promoteModalOpen}
            onClose={handlePromoteModal}
          >
            <Lottie
              className="w-full"
              loop={false}
              animationData={CongratulationLottie}
              play={true}
            />
            승진할 수 있는 퀴즈가 도착했어요!
          </Modal>
        )}
      </div>
    </>
  );
}

export default TFQuiz;
