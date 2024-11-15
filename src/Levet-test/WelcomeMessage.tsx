"use client";

import React, { useEffect, useState } from "react";
import styles from "./WelcomeMessage.module.css";
import { Button } from "../Common/Button";
import { useRouter } from "next/navigation";
import ChevronRight from "../My-Page/ChevronRight";

function WelcomeMessage() {
  const router = useRouter();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [buttonShow, setButtonShow] = useState(false);
  const messages = [
    // "첫 방문을 진심으로 환영합니다!",
    `레벨 테스트를 통해 \n승진할 준비 되셨나요?`,
  ];

  useEffect(() => {
    if (currentMessageIndex === messages.length) {
      setButtonShow(true);
    }
    // currentMessageIndex가 messages의 길이보다 작을 때만 타이머를 설정
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, 1500); // 2초 간격으로 다음 문장 출력

      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리
    }
  }, [currentMessageIndex, messages.length]);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 text-2xl">
      {messages.slice(0, currentMessageIndex).map((message, index) => (
        <p
          key={index}
          className={`text-center whitespace-pre-wrap ${styles.fadeIn} mb-2`}
        >
          {message}
        </p>
      ))}
      <Button
        width="auto"
        paddingHorizontal={24}
        paddingVertical={8}
        backgroundColor="primary"
        color="white"
        fontSize="2xl"
        className={`${buttonShow ? "block" : "hidden"} ${
          styles.fadeIn
        } flex items-center justify-end`}
        onClick={() => router.push("/main/level-test")}
      >
        <div className="w-2"></div>
        테스트 시작
        <ChevronRight size={40} fill="white" />
      </Button>
    </div>
  );
}

export default WelcomeMessage;
