"use client";

import ProgressBar from "@/src/Levet-test/ProgressBar";
import QuizContent from "@/src/Levet-test/QuizContent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import Analyzing from "@/public/lottie/Analyzing.json";
import { decode } from "js-base64";
import { API_BASE_URL, levelNames } from "@/src/Constant/constant";
import LoadingSpinner from "@/src/Common/LoadingSpinner";

export type QuestionType = {
  id: number;
  quest: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  correctOption: number;
  description: string;
};

const levels = [
  { id: 1, nextLevel: "INTERN" },
  { id: 2, nextLevel: "STAFF" },
  { id: 3, nextLevel: "ASSOCIATEMANAGER" },
  { id: 4, nextLevel: "MANAGER" },
  { id: 5, nextLevel: "SENIORMANAGER" },
  { id: 6, nextLevel: "DIRECTOR" },
];
function Page() {
  const router = useRouter();
  const [quizData, setQuizData] = useState<QuestionType[]>([]);
  const [quizNumber, setQuizNumber] = useState(0);
  const [levelIdx, setLevelIdx] = useState<number>(0);
  const totalQuiz = quizData.length > 0 ? quizData.length : 999;
  const nextQuiz = () => {
    setQuizNumber(quizNumber + 1);
    if (quizNumber + 1 === totalQuiz) {
      const LOGIN_INFO =
        localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
      if (LOGIN_INFO) {
        const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
        fetch(`${API_BASE_URL}/quest/done-quest/${levelIdx - 1}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code === "COMMON200") {
            } else if (data.code === "COMMON500") {
              alert("로그인 후 이용해주세요.");
              router.push("/sign-in");
            }
          });
      }
    }
  };
  useEffect(() => {
    const LOGIN_INFO =
      localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
    if (LOGIN_INFO) {
      const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
      fetch(`${API_BASE_URL}/user/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === "COMMON200") {
            console.log(data);
            setLevelIdx(levelNames.indexOf(data.result.levelName) + 1);
            console.log(levelNames.indexOf(data.result.levelName) + 1);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
      fetch(`${API_BASE_URL}/quest/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === "COMMON200") {
            setQuizData(data.result);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
    }
  }, []);

  useEffect(() => {
    if (quizNumber === totalQuiz) {
      // 결과 페이지로 라우팅을 위한 타이머 설정
      const timer = setTimeout(() => {
        router.push("/main/level-test/result"); // 결과 페이지로 라우팅
      }, 2000);

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }
  }, [quizNumber, totalQuiz, router]);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {quizNumber === totalQuiz ? (
        <>
          <Lottie animationData={Analyzing} loop play />
          <div className="font-medium text-2xl">
            레벨 테스트 결과 분석 중...
          </div>
        </>
      ) : (
        <>
          <ProgressBar current={quizNumber} total={totalQuiz} />
          {quizData.length === 0 ? (
            <span>테스트 문제 가져오는 중...</span>
          ) : (
            <QuizContent
              quiz={quizData}
              quizNumber={quizNumber}
              nextQuiz={nextQuiz}
            />
          )}
        </>
      )}
    </main>
  );
}

export default Page;
