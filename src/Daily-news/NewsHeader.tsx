import React, { useState } from "react";
import { Button } from "../Common/Button";
import { newsType, NewsType } from "@/app/main/daily-news/page";

type NewsHeaderProps = {
  currentType: NewsType;
  onSelectType: (type: NewsType) => void;
};

function NewsHeader({ currentType, onSelectType }: NewsHeaderProps) {
  return (
    <div className="flex justify-start gap-6">
      {newsType.map((type) => (
        <Button
          key={type.en}
          backgroundColor="none"
          color={currentType === type.en ? "blue-primary" : "black"}
          onClick={() => onSelectType(type.en as NewsType)}
          paddingHorizontal={0}
          width="fit-content"
          className="underline underline-thickness-thin underline-offset-4 text-left "
        >
          {type.ko}
        </Button>
      ))}
    </div>
  );
}

export default NewsHeader;
