"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import CongratulationLottie from "@/public/lottie/Congratulation.json";
import { Button } from "@/src/components/Button";

function Page() {
  // 결과 가져오기
  const router = useRouter();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [buttonShow, setButtonShow] = useState(false);
  const [lottiePlay, setLottiePlay] = useState(false);
  const result = "사원";
  const messages = [
    <div>피넛님의 레벨은</div>,
    <div>
      <span className="font-extrabold text-primary">{result}</span>입니다
    </div>,
    <Button
      width="auto"
      className="mt-8"
      weight="bold"
      fontSize="2xl"
      backgroundColor="primary"
      color="white"
      paddingHorizontal={32}
    >
      레벨업하러 가볼까요?
    </Button>,
  ];

  useEffect(() => {
    if (currentMessageIndex === messages.length) {
      setButtonShow(true);
    }
    // currentMessageIndex가 messages의 길이보다 작을 때만 타이머를 설정
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
        if (currentMessageIndex === 1) {
          setLottiePlay(true);
        }
      }, 1500); // 1초 간격으로 다음 문장 출력

      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리
    }
  }, [currentMessageIndex, messages.length]);
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-3xl">
      <h1 className="text-2xl mb-8">레벨 테스트 결과</h1>
      <Lottie
        className="absolute top-2/5 w-full"
        loop={false}
        animationData={CongratulationLottie}
        play={lottiePlay}
      />
      {messages.slice(0, currentMessageIndex).map((message, index) => (
        <p key={index} className="w-full text-center mb-2 fadeIn">
          {message}
        </p>
      ))}
    </div>
  );
}

export default Page;
