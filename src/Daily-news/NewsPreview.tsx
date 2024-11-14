import { encode } from "js-base64";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsPreviewProps = {
  news: {
    title: string;
    description: string;
    link: string;
    number: number;
    imageUrl: string;
  };
};

function NewsPreview({ news }: NewsPreviewProps) {
  const { title, description, link, number, imageUrl } = news;
  return (
    <Link href={`/main/daily-news/${encode(link)}`}>
      <div className="flex gap-4 bg-white rounded-lg shadow-md p-4">
        <div className="w-1/3 aspect-square relative rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt="news"
            fill={true}
            unoptimized={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col max-w-[66%] gap-2">
          <h1
            className="text-lg font-semibold"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              wordBreak: "break-word",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </h1>
          <p
            className="text-sm text-gray-40"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              wordBreak: "break-word",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default NewsPreview;
