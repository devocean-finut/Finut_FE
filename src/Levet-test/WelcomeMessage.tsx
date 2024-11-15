"use client";

import React, { useEffect, useState } from "react";
import styles from "./WelcomeMessage.module.css";
import { Button } from "../Common/Button";
import { useRouter } from "next/navigation";

function WelcomeMessage() {
  const router = useRouter();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [buttonShow, setButtonShow] = useState(false);
  const messages = [
    // "첫 방문을 진심으로 환영합니다!",
    `레벨 테스트를 통해 \n여러분의 경제 실력을 확인해보세요.`,
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
    <div className="h-full flex flex-col items-center gap-6 pt-[60%] text-2xl">
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
        paddingHorizontal={32}
        paddingVertical={16}
        backgroundColor="primary"
        color="white"
        fontSize="2xl"
        className={`${buttonShow ? "block" : "hidden"} ${styles.fadeIn}`}
        onClick={() => router.push("/main/level-test")}
      >
        테스트 {">"}
      </Button>
    </div>
  );
}

export default WelcomeMessage;
