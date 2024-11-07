"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  useEffect(() => {
    const LOGIN_INFO = localStorage.getItem("LOGIN_INFO");
    try {
      const userObject = LOGIN_INFO ? JSON.parse(LOGIN_INFO) : null;
      if (userObject.isFirst) {
        router.push("/main/level-test/start");
      }
    } catch (error) {
      alert("로그인 후 이용해주세요.");
      router.push("/sign-in");
    }
  }, []);

  return <div>Page</div>;
}

export default Page;
