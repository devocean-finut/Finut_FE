"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import CongratulationLottie from "@/public/lottie/Congratulation.json";
import { Button } from "@/src/Common/Button";
import { decode } from "js-base64";
import { API_BASE_URL } from "@/src/Constant/constant";
import { UserData } from "../../mypage/page";

function Page() {
  // 결과 가져오기
  const router = useRouter();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [buttonShow, setButtonShow] = useState(false);
  const [lottiePlay, setLottiePlay] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData>({
    userId: 0,
    name: "",
    money: 0,
    picture: "",
    xp: 0,
    levelName: "",
  });

  useEffect(() => {
    // 로그인 정보 확인
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
            setUserInfo(data.result);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
    }
    // 추후 로직 변경 필요
    const currentLoginInfo = JSON.parse(
      localStorage.getItem("LOGIN_INFO") || "{}"
    );
    localStorage.setItem(
      "LOGIN_INFO",
      JSON.stringify({ ...currentLoginInfo, isFirst: false })
    );
  }, []);

  const goToHome = () => {
    router.push("/main");
  };
  const messages = [
    <div>{userInfo.name}님의 레벨은</div>,
    <div>
      <span className="font-extrabold text-primary">{userInfo.levelName}</span>
      입니다
    </div>,
    <Button
      width="auto"
      className="mt-8"
      weight="medium"
      fontSize="2xl"
      backgroundColor="primary"
      color="white"
      paddingHorizontal={32}
      onClick={goToHome}
    >
      홈으로
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
