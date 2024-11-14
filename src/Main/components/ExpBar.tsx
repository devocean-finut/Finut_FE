import { Button } from "@/src/Common/Button";
import React, { useState } from "react";

type ExpBarProps = {
  currentExp: number;
  maxExp: number;
};

function ExpBar({ currentExp = 0, maxExp = 100 }: ExpBarProps) {
  const [experience, setExperience] = useState<number>(0); // 경험치 상태와 타입 정의

  const experiencePercent = ((currentExp / maxExp) * 100).toFixed(2);

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full flex gap-2 ">
        <div className="w-full h-6 rounded-full bg-gray-20 drop-shadow-sm overflow-hidden">
          <div
            className={` h-full flex items-center justify-end pr-2 font-bold bg-gradient-to-r from-[#FFD7B3] via-[#FFC89D] to-[#E0A678]`}
            style={{
              width: `${experiencePercent}%`,
            }}
          ></div>
        </div>
        <div className="font-medium">{experiencePercent}%</div>
      </div>
      {currentExp === 100 ? (
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
          >
            승진 시험 보기
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-end gap-1 text-sm pt-2 ">
          <span className="font-bold text-primary">사원</span> 승진까지{" "}
          <span className="font-bold">{maxExp - currentExp} XP</span>
        </div>
      )}
    </div>
  );
}

export default ExpBar;
