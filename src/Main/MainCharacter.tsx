import React from "react";
import { Button } from "../components/Button";
import ShopIcon from "./Icon/Shop";

function MainCharacter() {
  return (
    <main className="flex flex-col items-center gap-2">
      <div>character</div>
      <div>세상에서 제일 가는 피넛</div>
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