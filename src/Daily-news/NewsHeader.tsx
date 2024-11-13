import React, { useState } from "react";
import { Button } from "../Common/Button";
import { newsType, NewsType } from "@/app/main/daily-news/page";

type NewsHeaderProps = {
  currentType: NewsType;
  onSelectType: (type: NewsType) => void;
};

function NewsHeader({ currentType, onSelectType }: NewsHeaderProps) {
  return (
    <div className="flex justify-center gap-4 py-4">
      {newsType.map((type) => (
        <Button
          backgroundColor="none"
          color={currentType === type.en ? "blue-primary" : "black"}
          onClick={() => onSelectType(type.en as NewsType)}
          className="underline underline-thickness-thin underline-offset-4"
        >
          {type.ko}
        </Button>
      ))}
    </div>
  );
}

export default NewsHeader;
