import React from "react";
import { Button } from "../Common/Button";
import ShopIcon from "./Image/Shop";
import Image from "next/image";
import Character from "./Image/Character.png";
import PencilIcon from "./Image/Pencil";
import { useRouter } from "next/navigation";

function MainCharacter() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/main/mypage");
  };
  return (
    <main className="flex flex-col items-center gap-1">
      <div className="max-w-[250px] w-full min-w-[200px] aspect-square relative mb-2">
        <Image src={Character} alt="캐릭터.png" layout="fill" />
      </div>
      <div className="flex items-center font-semibold text-xl">
        여기까지가끝인가보오{" "}
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
