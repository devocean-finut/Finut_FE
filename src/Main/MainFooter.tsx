import React, { useEffect, useState } from "react";
import CoinIcon from "./Image/Coin";
import ExpIcon from "./Image/Exp";
import ExpBar from "./components/ExpBar";
import { useRouter } from "next/navigation";
import { decode } from "js-base64";
import { API_BASE_URL } from "../Constant/constant";
type UserData = {
  userId: number;
  name: string;
  money: number;
  picture: string;
  xp: number;
  levelName: string;
};

function MainFooter() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    userId: 0,
    name: "",
    money: 0,
    picture: "",
    xp: 0,
    levelName: "",
  });
  useEffect(() => {
    const LOGIN_INFO =
      localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
    if (LOGIN_INFO) {
      const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);

      fetch(`${API_BASE_URL}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === "COMMON200") {
            setUserData(data.result);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
    }
  }, []);
  useEffect(() => {
    // 현재 계급, 경험치, 보유 코인 정보 서버에서 가져오기
  }, []);
  return (
    <footer className="flex flex-col gap-4 bg-white p-4 rounded-xl drop-shadow-sm">
      <div className="w-full flex justify-between items-center"></div>
      <div className="flex gap-2 items-center">
        <CoinIcon /> {userData.money.toLocaleString("en-US")}
      </div>
      <div className="w-full flex gap-2 items-start">
        <ExpIcon />{" "}
        <ExpBar
          currentExp={userData.xp}
          maxExp={100}
          levelName={userData.levelName}
        />
      </div>
    </footer>
  );
}

export default MainFooter;
