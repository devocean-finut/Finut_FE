"use client";

import { Button } from "@/src/Common/Button";
import GoogleButton from "@/src/Common/Button/GoogleButton";
import KakaoButton from "@/src/Common/Button/KakaoButton";
import NaverButton from "@/src/Common/Button/NaverButton";
import { Input } from "@/src/Common/Input";
import { API_BASE_URL } from "@/src/Constant/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });

  const handleLogin = () => {
    if (!loginInfo.id || !loginInfo.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (loginInfo.id === "test" && loginInfo.password === "test") {
      try {
        fetch("/api/test-login", {
          method: "POST",
          credentials: "include", // 쿠키를 포함하여 요청, 응답에서 수신할 수 있게 함
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.ok) {
            localStorage.setItem(
              "LOGIN_INFO",
              JSON.stringify({ accessToken: "1234", isFirst: true })
            );
            router.push("/main");
          } else {
            alert("로그인 실패!");
          }
        });
      } catch (error) {
        console.error(error);
      }
      return;
    }
    alert("존재하지 않는 아이디입니다.");
    return;
  };
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
        onClick={handleLogin}
      >
        이메일로 로그인
      </Button>
      <div className="flex w-full">
        <Button fontSize="sm">회원가입</Button>
        <Button fontSize="sm">아이디 찾기</Button>
        <Button fontSize="sm">비밀번호 찾기</Button>
      </div>
      <div className="flex flex-col items-center gap-3 my-auto">
        <div className="flex gap-6">
          <NaverButton />
          <Button
            paddingHorizontal={0}
            paddingVertical={0}
            // onClick={() => {
            //   router.push(
            //     "http://ec2-15-165-175-91.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao"
            //   );
            // }}
          >
            <KakaoButton />
          </Button>
          <Button
            paddingHorizontal={0}
            paddingVertical={0}
            onClick={() => {
              router.push(`${API_BASE_URL}/oauth2/authorization/google`);
            }}
          >
            <GoogleButton />
          </Button>
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
