"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/src/components/LoadingSpinner";

function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const LOGIN_INFO = localStorage.getItem("LOGIN_INFO");
    try {
      const userObject = LOGIN_INFO ? JSON.parse(LOGIN_INFO) : null;
      if (userObject.isFirst) {
        router.push("/main/level-test/start");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      alert("로그인 후 이용해주세요.");
      router.push("/sign-in");
    }
  }, []);
  if (isLoading) return <LoadingSpinner />;
  return <div>Page</div>;
}

export default Page;
