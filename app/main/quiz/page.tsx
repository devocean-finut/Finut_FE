"use client";

import { API_BASE_URL } from "@/src/Constant/constant";
import TFQuiz from "@/src/Quiz/TFQuiz";
import { decode } from "js-base64";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type QuizData = {
  answer: "TRUE" | "FALSE";
  createdDate: string;
  description: string;
  difficulty: "LO" | "MI" | "HI";
  id: number;
  modifiedDate: string;
  question: string;
};
function Page() {
  const router = useRouter();
  const [quizData, setQuizData] = useState<QuizData>({
    answer: "TRUE",
    createdDate: "",
    description: "",
    difficulty: "LO",
    id: 0,
    modifiedDate: "",
    question: "",
  });
  const [userXP, setUserXP] = useState<number>(0);
  useEffect(() => {
    // 퀴즈 데이터 가져오기
    const LOGIN_INFO =
      localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
    if (LOGIN_INFO) {
      const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
      fetch(`${API_BASE_URL}/quiz`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === "COMMON200") {
            console.log(data);
            setQuizData(data.result);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
      fetch(`${API_BASE_URL}/user/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === "COMMON200") {
            setUserXP(data.result.xp);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
    }
  }, []);

  return (
    <>
      <TFQuiz quiz={quizData} currentXP={userXP} />
    </>
  );
}

export default Page;
