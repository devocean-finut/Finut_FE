"use client";

import { decode } from "js-base64";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page({ params }: { params: { link: string } }) {
  const link = params.link;
  return (
    <div className="h-[95%]">
      <iframe
        src="https://m.mk.co.kr/news/economy/11168118"
        // src={decode(link)}

        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
}
