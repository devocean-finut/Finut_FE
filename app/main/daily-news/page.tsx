"use client";

import NewsHeader from "@/src/Daily-news/NewsHeader";
import React, { useState } from "react";

export const newsType = [
  { en: "economy", ko: "경제" },
  { en: "stock", ko: "주식" },
  { en: "realestate", ko: "부동산" },
];
export type NewsType = "stock" | "economy" | "realestate";

function Page() {
  const [currentNewsType, setCurrentNewsType] = useState<NewsType>(
    newsType[0].en as NewsType
  );
  const onSelectType = (type: NewsType) => {
    setCurrentNewsType(type);
  };
  return (
    <div>
      <NewsHeader currentType={currentNewsType} onSelectType={onSelectType} />
    </div>
  );
}

export default Page;
