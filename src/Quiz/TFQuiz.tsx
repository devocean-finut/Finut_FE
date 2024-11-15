"use client";

import { useState } from "react";
import { Button } from "../Common/Button";
import Modal from "../Common/Modal";
import { useRouter } from "next/navigation";
import CongratulationLottie from "@/public/lottie/Congratulation.json";
import Lottie from "react-lottie-player";
import { QuizData } from "@/app/main/quiz/page";

import { decode } from "js-base64";
import { API_BASE_URL } from "../Constant/constant";

type QuizContentProps = {
  quiz: QuizData;
  currentXP: number;
};
const difficultyKO = {
  LO: "쉬움",
  MI: "보통",
  HI: "어려움",
};

function TFQuiz({ quiz, currentXP }: QuizContentProps) {
  const router = useRouter();
  const { id, difficulty, question, answer, description } = quiz;
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [descriptionModalOpen, setDescriptionModalOpen] =
    useState<boolean>(false);
  const [promoteModalOpen, setPromoteModalOpen] = useState<boolean>(false);
  const checkAnswer = (userAnswer: "TRUE" | "FALSE") => {
    const LOGIN_INFO =
      localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
    if (LOGIN_INFO) {
      if (answer === userAnswer) {
        setIsCorrect(true);
        // 서버에 해당 퀴즈 정답이라고 전달
        const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
        fetch(`${API_BASE_URL}/quiz/correct/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code === "COMMON200") {
              // 100 xp에 도달하면 승진 퀴즈 알림
              if (currentXP + data.result.xp >= 100) {
                setTimeout(() => {
                  setPromoteModalOpen(true);
                }, 1000);
              }
            } else if (data.code === "COMMON500") {
              alert("로그인 후 이용해주세요.");
              router.push("/sign-in");
            }
          });
      } else {
        // 서버에 해당 퀴즈 오답이라고 전달
        setIsCorrect(false);
        const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
        fetch(`${API_BASE_URL}/quiz/wrong/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code === "COMMON500") {
              alert("로그인 후 이용해주세요.");
              router.push("/sign-in");
            }
          });
      }
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
      <div className="w-full flex flex-col items-center gap-8">
        <h1 className="text-2xl font-semibold">퀴즈</h1>
        <div className="w-full flex flex-col gap-2 justify-center items-center bg-white text-2xl p-4 rounded-lg break-words drop-shadow-sm min-h-[200px] ">
          <div className="w-full flex justify-start">
            <div className="w-fit">
              <Button
                paddingHorizontal={8}
                paddingVertical={0}
                disabled={true}
                backgroundColor="primary"
                color="white"
              >
                {difficultyKO[difficulty]}
              </Button>
            </div>
          </div>
          <div className="break-words">
            {question.length === 0 ? (
              <span className="shine">퀴즈 불러오는 중...</span>
            ) : (
              question
            )}
          </div>
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
            <div className="relative">
              <div className="text-md mb-4 relative">
                승진할 수 있는 퀴즈가 도착했어요!
                <Lottie
                  className="w-full aspect-square absolute top-0 left-0"
                  loop={false}
                  animationData={CongratulationLottie}
                  play={true}
                />
              </div>
              <Button
                backgroundColor="primary"
                color="white"
                onClick={() => router.push("/main/level-test/start")}
                className="fadeIn"
              >
                승진 시험 보기
              </Button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default TFQuiz;
