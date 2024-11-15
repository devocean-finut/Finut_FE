"use client";

import { Button } from "../Common/Button";
import ChevronRight from "./ChevronRight";
import { useRouter } from "next/navigation";

function MyPageButtonGroup() {
  const router = useRouter();
  const handleRouter = (link: string) => {
    router.push(link);
  };
  const handleLogout = () => {
    localStorage.removeItem("LOGIN_INFO");
    router.push("/sign-in");
  };
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Button
        backgroundColor="primary"
        color="white"
        className=" drop-shadow-md"
      >
        <span className="flex justify-between animate-pulse">
          <span className="w-6"></span>
          퀴즈 풀고 경험치 얻기{" "}
          <span>
            <ChevronRight fill="white" />
          </span>
        </span>
      </Button>
      <div className="flex gap-6 w-full">
        <Button className="drop-shadow-md">출석체크하기</Button>
        <Button
          className="drop-shadow-md"
          onClick={() => handleRouter("/main/daily-news")}
        >
          오늘의 뉴스
        </Button>
      </div>
      <Button className="drop-shadow-md" onClick={handleLogout}>
        로그아웃
      </Button>
    </div>
  );
}

export default MyPageButtonGroup;
