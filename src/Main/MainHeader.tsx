import React from "react";
import { Button } from "../Common/Button";
import Image from "next/image";
import Attendance from "./Icon/Attendance.png";
import Quiz from "./Icon/Quiz.png";
import News from "./Icon/News.png";
import Store from "./Icon/Store.png";
import HeaderButton from "./components/HeaderButton";

function MainHeader() {
  const headerItems = [
    {
      id: 1,
      content: "출석하기",
    },
  ];
  return (
    <header className="flex gap-2 justify-center">
      <HeaderButton src={Attendance} alt="출석하기" href="/main/attendance">
        출석하기
      </HeaderButton>
      <HeaderButton src={Quiz} alt="출석하기" href="/main/attendance">
        퀴즈풀기
      </HeaderButton>
      <HeaderButton src={News} alt="출석하기" href="/main/attendance">
        오늘의뉴스
      </HeaderButton>
      <HeaderButton src={Store} alt="출석하기" href="/main/attendance">
        상점
      </HeaderButton>
    </header>
  );
}

export default MainHeader;
