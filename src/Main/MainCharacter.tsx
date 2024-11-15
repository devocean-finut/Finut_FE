import { useEffect, useState } from "react";
import { Button } from "../Common/Button";
import ShopIcon from "./Image/Shop";
import Image from "next/image";
import Character from "./Image/Character.png";
import PencilIcon from "./Image/Pencil";
import { useRouter } from "next/navigation";
import { decode } from "js-base64";
import { API_BASE_URL } from "../Constant/constant";

export type UserData = {
  userId: number;
  name: string;
  money: number;
  picture: string;
  xp: number;
  levelName: string;
};

function MainCharacter() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    userId: 0,
    name: "string",
    money: 0,
    picture: "string",
    xp: 0,
    levelName: "string",
  });
  const handleOnClick = () => {
    router.push("/main/mypage");
  };
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
    <main className="flex flex-col items-center gap-1">
      <div className="max-w-[250px] w-full min-w-[200px] aspect-square relative mb-2">
        <Image src={Character} alt="캐릭터.png" layout="fill" />
      </div>
      <div className="flex items-center font-semibold text-xl">
        {userData && userData.name}
        <Button
          width="fit-content"
          backgroundColor="background"
          paddingHorizontal={6}
          paddingVertical={4}
          onClick={handleOnClick}
        >
          <PencilIcon />
        </Button>
      </div>
      <Button
        paddingVertical={6}
        paddingHorizontal={12}
        width="fit-content"
        backgroundColor="character"
        className="flex gap-2 items-center"
        fontSize="md"
      >
        <ShopIcon />
        꾸미기
      </Button>
    </main>
  );
}

export default MainCharacter;
