import React from "react";
import { Button } from "../components/Button";

function MainHeader() {
  return (
    <header className="flex justify-center">
      <Button backgroundColor="background">출석하기</Button>
      <Button backgroundColor="background">퀴즈 풀기</Button>
      <Button backgroundColor="background">오늘의 뉴스</Button>
    </header>
  );
}

export default MainHeader;
