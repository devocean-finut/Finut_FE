"use client";

import React from "react";
import { Button } from "../Button";
import ChevronLeft from "@/src/Daily-news/Icon/ChevronLeft";
import { useRouter } from "next/navigation";

function TopBar() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="p-6 pb-0 ">
      <Button
        backgroundColor="none"
        paddingHorizontal={0}
        paddingVertical={0}
        onClick={goBack}
      >
        <ChevronLeft />
      </Button>
    </div>
  );
}

export default TopBar;
