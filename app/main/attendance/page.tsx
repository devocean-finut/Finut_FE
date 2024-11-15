"use client";

import Lottie from "react-lottie-player";
import CheckLottie from "@/public/lottie/Check.json";
import { useEffect, useState } from "react";
import { Button } from "@/src/Common/Button";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/src/Constant/constant";
import { decode } from "js-base64";
import ByeByeLottie from "@/public/lottie/Hello.json";
import SalaryLottie from "@/public/lottie/AttendanceSalary.json";

const messageArr = [
  "출석했습니다!",
  "월급을 받았습니다!",
  "오늘은 이미 월급을 받았습니다!",
  "연속 5회 출석했습니다!",
];

function Page() {
  const router = useRouter();
  const [attendanceStep, setAttendanceStep] = useState(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const LOGIN_INFO =
      localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
    if (LOGIN_INFO) {
      const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
      fetch(`${API_BASE_URL}/user/attend`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.code === "COMMON200") {
            console.log(data);
            setMessage(data.result.message);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
    }

    const timer = setTimeout(() => {
      setAttendanceStep((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {attendanceStep === 0 && (
        <div className="flex flex-col gap-6 justify-center items-center">
          <Lottie
            className="w-1/2"
            loop={false}
            animationData={CheckLottie}
            play={true}
          />
          <span className="fadeIn text-3xl">출석 체크 완료!</span>
        </div>
      )}
      {attendanceStep === 1 && (
        <div className="w-full flex flex-col gap-6">
          {messageArr.indexOf(message) === 0 && (
            <div className="flex flex-col items-center gap-8">
              <div className="text-[200px] bounce">💪</div>
              <div className="flex flex-col items-center gap-4">
                <div className="fadeIn text-2xl text-center">{message}</div>
                <div className="text-lg text-gray-40">
                  5번 출석하면 월급을 받을 수 있어요
                </div>
              </div>
            </div>
          )}
          {messageArr.indexOf(message) === 1 && (
            <div className="flex flex-col items-center gap-8">
              <Lottie
                animationData={SalaryLottie}
                play
                loop={false}
                className="w-[300px]"
              />
              <div className="fadeIn text-2xl text-center">{message}</div>
            </div>
          )}
          {messageArr.indexOf(message) === 2 && (
            <div className="flex flex-col items-center gap-8">
              <Lottie
                animationData={ByeByeLottie}
                play
                className="w-[200px] ml-[75px]"
              />
              <div className="fadeIn text-2xl text-center">{message}</div>
            </div>
          )}
          {/* <div className="fadeIn flex gap-4 bg-white p-4 rounded-xl shadow-sm">
            <span className="w-1/5 aspect-square  bg-blue-primary text-white rounded-full text-4xl flex justify-center items-center shadow-sm">
              ✓
            </span>
            <span className="w-1/5 aspect-square  bg-gray-20 text-white rounded-full text-4xl flex justify-center items-center shadow-sm">
              ✓
            </span>{" "}
            <span className="w-1/5 aspect-square  bg-gray-20 text-white rounded-full text-4xl flex justify-center items-center shadow-sm">
              ✓
            </span>{" "}
            <span className="w-1/5 aspect-square  bg-gray-20 text-white rounded-full text-4xl flex justify-center items-center shadow-sm">
              ✓
            </span>{" "}
            <span className="w-1/5 aspect-square  bg-gray-20 text-white rounded-full text-4xl flex justify-center items-center shadow-sm">
              ✓
            </span>
          </div> */}
          <Button
            backgroundColor="primary"
            color="white"
            weight="semibold"
            fontSize="xl"
            className="fadeIn"
            onClick={() => router.push("/main")}
          >
            홈으로
          </Button>
        </div>
      )}
    </div>
  );
}

export default Page;
