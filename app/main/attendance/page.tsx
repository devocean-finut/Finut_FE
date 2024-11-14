"use client";

import Lottie from "react-lottie-player";
import CheckLottie from "@/public/lottie/Check.json";
import { useEffect, useState } from "react";
import { Button } from "@/src/Common/Button";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [attendanceStep, setAttendanceStep] = useState(0);

  useEffect(() => {
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
          <div className="fadeIn text-3xl text-center">
            5회 출석하면 <br /> 월급을 받을 수 있어요!
          </div>
          <div className="fadeIn flex gap-4 bg-white p-4 rounded-xl shadow-sm">
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
          </div>
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
