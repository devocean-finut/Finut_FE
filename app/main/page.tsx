"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/src/Common/LoadingSpinner";
import MainHeader from "@/src/Main/MainHeader";
import MainCharacter from "@/src/Main/MainCharacter";
import MainFooter from "@/src/Main/MainFooter";

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const accessToken = searchParams.get("accessToken");

  if (email && accessToken) {
    localStorage.setItem("LOGIN_INFO", JSON.stringify({ email, accessToken }));
    router.push("/main");
  }
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const LOGIN_INFO = localStorage.getItem("LOGIN_INFO");
    try {
      const userObject = LOGIN_INFO ? JSON.parse(LOGIN_INFO) : null;
      if (!userObject) {
        throw new Error("로그인 후 이용해주세요.");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      alert("로그인 후 이용해주세요.");
      router.push("/sign-in");
    }
  }, []);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="h-full flex flex-col justify-between">
      <MainHeader />
      <MainCharacter />
      <MainFooter />
    </div>
  );
}

export default Page;
