import React, { useEffect } from "react";
import CoinIcon from "./Icon/Coin";
import ExpIcon from "./Icon/Exp";
import ExpBar from "./components/ExpBar";

function MainFooter() {
  useEffect(() => {
    // 현재 계급, 경험치, 보유 코인 정보 서버에서 가져오기
  }, []);
  return (
    <footer className="flex flex-col gap-4 bg-white p-4 rounded-xl drop-shadow-sm">
      <div className="w-full flex justify-between items-center">
        {/* 아이디 */}
        <span className="font-semibold text-2xl">
          여기까지가끝인가보오<span className="text-lg font-normal">님</span>
        </span>
        <span className="text-primary font-bold">인턴</span>
      </div>
      <div className="flex gap-2 items-center">
        <CoinIcon /> 5,000
      </div>
      <div className="w-full flex gap-2 items-start">
        <ExpIcon /> <ExpBar currentExp={50} maxExp={100} />
      </div>
    </footer>
  );
}

export default MainFooter;
