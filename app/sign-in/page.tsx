"use client";

import { Button } from "@/src/components/Button";
import GoogleButton from "@/src/components/Button/GoogleButton";
import KakaoButton from "@/src/components/Button/KakaoButton";
import NaverButton from "@/src/components/Button/NaverButton";
import { Input } from "@/src/components/Input";
import { useState } from "react";

function Page() {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });
  return (
    <div className="w-full h-screen flex flex-col gap-8 items-center justify-center">
      <div className="mt-auto">
        <img src="/Finut-Logo.svg" alt="Logo" />
      </div>
      <Input
        type="email"
        borderWidth={1}
        borderColor="gray-30"
        backgroundColor="gray-10"
        placeholder="이메일"
        value={loginInfo.id}
        onChange={(e) => setLoginInfo({ ...loginInfo, id: e.target.value })}
      />
      <Input
        type="password"
        borderWidth={1}
        borderColor="gray-30"
        backgroundColor="gray-10"
        placeholder="비밀번호"
        value={loginInfo.password}
        onChange={(e) =>
          setLoginInfo({ ...loginInfo, password: e.target.value })
        }
        maxLength={20}
      />
      <Button
        backgroundColor="primary"
        color="white"
        weight="bold"
        onClick={() => console.log("clicked")}
      >
        이메일로 로그인
      </Button>
      <div className="flex flex-col items-center gap-3 my-auto">
        <div className="flex gap-6">
          <NaverButton />
          <KakaoButton />
          <GoogleButton />
        </div>
        <div>
          <Button
            backgroundColor="white"
            borderWidth={1}
            borderColor="gray-10"
            paddingHorizontal={16}
            paddingVertical={8}
            fontSize="sm"
            color="black"
            weight="bold"
            disabled={true}
          >
            SNS 계정으로 간편하게 회원가입/로그인 하세요
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
