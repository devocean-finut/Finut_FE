import React from "react";
import { Button } from "../Common/Button";
import Image from "next/image";
import Attendance from "./Image/Attendance.png";
import Quiz from "./Image/Quiz.png";
import News from "./Image/News.png";
import Store from "./Image/Store.png";
import HeaderButton from "./components/HeaderButton";

function MainHeader() {
  const headerItems = [
    {
      id: 1,
      content: "출석하기",
      src: Attendance,
      alt: "출석하기",
      href: "/main/attendance",
    },
    {
      id: 2,
      content: "퀴즈풀기",
      src: Quiz,
      alt: "퀴즈풀기",
      href: "/main/quiz",
    },
    {
      id: 3,
      content: "오늘의뉴스",
      src: News,
      alt: "오늘의뉴스",
      href: "/main/daily-news",
    },
    {
      id: 4,
      content: "상점",
      src: Store,
      alt: "상점",
      href: "/main/shop",
    },
  ];
  return (
    <header className="flex gap-2 justify-center">
      {headerItems.map((item) => (
        <HeaderButton
          key={item.id}
          src={item.src}
          alt={item.alt}
          href={item.href}
        >
          {item.content}
        </HeaderButton>
      ))}
    </header>
  );
}

export default MainHeader;
