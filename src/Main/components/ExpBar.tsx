import { Button } from "@/src/Common/Button";
import { levelNames } from "@/src/Constant/constant";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type ExpBarProps = {
  currentExp: number;
  maxExp: number;
  levelName?: string;
};

function ExpBar({
  currentExp = 0,
  maxExp = 100,
  levelName = "아르바이트",
}: ExpBarProps) {
  const router = useRouter();
  const [experience, setExperience] = useState<number>(0); // 경험치 상태와 타입 정의

  const experiencePercent = (
    (Math.min(currentExp, maxExp) / maxExp) *
    100
  ).toFixed(2);

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex gap-2 ">
        <div className="w-full h-6 rounded-full bg-gray-20 drop-shadow-sm overflow-hidden">
          <div
            className={`h-full flex items-center justify-end pr-2 font-bold ${
              currentExp > 0 &&
              "bg-gradient-to-r from-[#FFD7B3] via-[#FFC89D] to-[#E0A678]"
            }`}
            style={{
              width: `${experiencePercent}%`,
            }}
          ></div>
        </div>
        <div className="font-medium">{experiencePercent}%</div>
      </div>
      {currentExp >= 100 ? (
        <div className="w-full flex justify-between items-center mt-4 text-sm">
          <span>경험치가 다 찼습니다!</span>
          <Button
            width="fit-content"
            backgroundColor="character"
            paddingHorizontal={16}
            paddingVertical={4}
            color="black"
            className="shine"
            fontSize="sm"
            onClick={() => {
              router.push("/main/level-test/start");
            }}
          >
            승진 시험 보기
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-end gap-1 text-sm pt-2 ">
          <span className="font-bold text-primary">
            {
              levelNames[
                Math.min(
                  levelNames.indexOf(levelName) + 1,
                  levelNames.length - 1
                )
              ]
            }
          </span>{" "}
          승진까지 <span className="font-bold">{maxExp - currentExp} XP</span>
        </div>
      )}
    </div>
  );
}

export default ExpBar;
