"use client";

import Image from "next/image";
import React from "react";
import CoinIcon from "../Main/Image/Coin";
import ExpBar from "../Main/components/ExpBar";
import Character from "../Main/Image/Character.png";

type UserData = {
  userId: number;
  name: string;
  money: number;
  picture: string;
  xp: number;
  levelName: string;
};

type MyPageUserInfoProps = {
  userData: UserData;
};

function MyPageUserInfo({ userData }: MyPageUserInfoProps) {
  const { name, money, picture, xp, levelName } = userData;

  return (
    <>
      <div className="w-full flex flex-col gap-4 items-center bg-white rounded-xl shadow-md p-4">
        <div className="max-w-[200px] w-full min-w-[200px] aspect-square relative mb-2">
          <Image src={Character} alt="캐릭터.png" layout="fill" />
        </div>
        {/* <div className="w-1/2 aspect-square relative bg-gray-20 rounded-full overflow-hidden">
          <Image src={picture && picture} alt={name + ".png"} layout="fill" />
        </div> */}
        <div className="flex flex-col items-center gap-1">
          <div className="font-bold text-3xl">{name}</div>
          <div className="font-medium text-xl text-primary">{levelName}</div>
        </div>
        <div className="flex items-center self-start gap-2 text-lg ">
          <CoinIcon size={24} /> {money.toLocaleString("en-US")}
        </div>
        <ExpBar currentExp={userData.xp} maxExp={100} />
        <div>
          <div className="text-lg mb-1 ">
            다음 승진까지{" "}
            <span className="font-bold text-primary pr-1">
              {Math.max(100 - xp, 0)} XP
            </span>
            남았습니다
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPageUserInfo;
