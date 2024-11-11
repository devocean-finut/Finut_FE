import { Button } from "@/src/Common/Button";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type HeaderButtonProps = {
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
  href: string;
};

function HeaderButton({ src, alt, children, href }: HeaderButtonProps) {
  const router = useRouter();
  const handleOnclick = () => {
    router.push(href);
  };
  return (
    <Button
      backgroundColor="background"
      paddingHorizontal={0}
      className="flex flex-col gap-2 justify-center items-center"
      onClick={handleOnclick}
    >
      <div className="w-4/6 aspect-square relative">
        <Image src={src} alt={alt} layout="fill" />
      </div>
      {children}
    </Button>
  );
}

export default HeaderButton;
