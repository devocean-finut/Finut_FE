import React from "react";
import CoinIcon from "./Icon/Coin";
import ExpIcon from "./Icon/Exp";

function MainFooter() {
  return (
    <footer className="flex flex-col gap-4 bg-white p-4 rounded-xl drop-shadow-sm">
      <span>현재 계급 : 인턴</span>
      <div className="flex gap-2 items-center">
        <CoinIcon /> 5,000
      </div>
      <div className="flex gap-2 items-center">
        <ExpIcon /> 90/100
      </div>
    </footer>
  );
}

export default MainFooter;
