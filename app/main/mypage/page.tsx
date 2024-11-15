"use client";

import { API_BASE_URL } from "@/src/Constant/constant";
import MyPageButtonGroup from "@/src/My-Page/ButtonGroup";
import MyPageUserInfo from "@/src/My-Page/UserInfo";
import { decode } from "js-base64";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type UserData = {
  userId: number;
  name: string;
  money: number;
  picture: string;
  xp: number;
  levelName: string;
};

function Page() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    userId: 0,
    name: "",
    money: 0,
    picture: "",
    xp: 0,
    levelName: "",
  });
  const LOGIN_INFO =
    localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
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

  return (
    <>
      <h1 className="font-medium text-xl py-4">마이페이지</h1>
      <div className="w-full flex flex-col items-center gap-6">
        <MyPageUserInfo userData={userData} />
        <MyPageButtonGroup />
      </div>
    </>
  );
}

export default Page;
