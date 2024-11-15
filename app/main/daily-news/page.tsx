"use client";

import { API_BASE_URL } from "@/src/Constant/constant";
import NewsHeader from "@/src/Daily-news/NewsHeader";
import NewsPreview from "@/src/Daily-news/NewsPreview";
import { decode } from "js-base64";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type NewsListType = {
  title: string;
  link: string;
  description: string;
  number: number;
  imageUrl: string;
};
export const newsType = [
  { en: "economy", ko: "경제" },
  { en: "stock", ko: "주식" },
  { en: "realestate", ko: "부동산" },
];
export type NewsType = "stock" | "economy" | "realestate";

function Page() {
  const router = useRouter();
  const [currentNewsType, setCurrentNewsType] = useState<NewsType>(
    newsType[0].en as NewsType
  );
  const [newsList, setNewsList] = useState<NewsListType[]>([]);
  const onSelectType = (type: NewsType) => {
    setCurrentNewsType(type);
  };
  useEffect(() => {
    const LOGIN_INFO =
      localStorage.getItem("LOGIN_INFO") || router.push("/sign-in");
    if (LOGIN_INFO) {
      const accessToken = decode(JSON.parse(LOGIN_INFO).accessToken);
      fetch(`${API_BASE_URL}/news/${currentNewsType}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === "COMMON200") {
            console.log(data);
            setNewsList(data.result);
          } else if (data.code === "COMMON500") {
            alert("로그인 후 이용해주세요.");
            router.push("/sign-in");
          }
        });
    }
  }, [currentNewsType]);
  // const testStockNews = [
  //   {
  //     title: "키움증권, ‘주주알림’ 서비스 출시…보유종목 IR 정보 제공",
  //     link: "https://m.mk.co.kr/news/stock/11160843",
  //     description:
  //       "키움증권은 상장사의 기업설명(IR) 정보를 제공하는 ‘주주알림’ 서비스를 오픈했다고 6일 밝혔다. 주주알림 서비스는 보유종목에 IR 정보, 주주통지, 실적 발표 등이 발생할 경우 ..",
  //     number: 11160843,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241014.43a9776741c1477280f790e5d94eb988_R.jpg",
  //   },
  //   {
  //     title:
  //       "“60년대생은 좀 올드하지”...임원자리 꿰찬 X세대 70년대생, 10명 중 6명꼴",
  //     link: "https://m.mk.co.kr/news/economy/11160831",
  //     description:
  //       "100대 기업 임원 수 7400명으로 역대급 1971년생 최다…60년대생 30%대 하락 80년 이후 출생 2%…200명 돌파 초읽기국내 100대 기업 임원 수가 7400명대를 기록..",
  //     number: 11160831,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.c376ac90d2da433c821c20be17cc9092_R.jpg",
  //   },
  //   {
  //     title:
  //       "비보존 제약, ‘신약 기대감’ 랠리 마치자 초고수들 줍줍[주식 초고수는 지금]",
  //     link: "https://m.mk.co.kr/news/stock/11160792",
  //     description:
  //       "주식 투자 수익률 상위 1% 초고수들은 6일 오전 9시 30분 기준 비보존 제약, 현대차, 시조산업, LG에너지솔루션, 리가켐바이오 등을 가장 많이 순매수한 것으로 나타났다. 초고..",
  //     number: 11160792,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.43d8a4ce73254862bca04eee4a4c7616_R.png",
  //   },
  //   {
  //     title: "17억 빚지고 홍콩으로 떠났는데…5000억대 주식부자 된 백종원",
  //     link: "https://m.mk.co.kr/news/economy/11160791",
  //     description:
  //       "요리연구가이자 외식사업가인 백종원 더본코리아 대표가 5000억 원대 상장 주식을 보유한 자산가가 됐다. 6일 유가증권시장(코스피)에 상장한 더본코리아는 4만6350원에 거래를 시작..",
  //     number: 11160791,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.9e19039668cc4e509dfb5a5a84d7513d_R.jpg",
  //   },
  //   {
  //     title: "[속보] 고려아연 “유상증자 정정신고 요구받아…효력 정지”",
  //     link: "https://m.mk.co.kr/news/business/11160776",
  //     description:
  //       "금융감독원이 고려아연의 2조5000억원 규모 유상증자 계획에 제동을 걸었다. 6일 금감원은 고려아연이 지난달 30일 제출한 증권신고서에 대해 정정신고서를 제출할 것을 요구했다. 고..",
  //     number: 11160776,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.5c9438ebc2d4458c9db9ee4aa3fecaab_R.png",
  //   },
  //   {
  //     title: "바이오니아, AI자율제조 선도프로젝트 선정",
  //     link: "https://m.mk.co.kr/news/stock/11160744",
  //     description:
  //       "바이오파운더리 유전자 합성 기술 개발 박차바이오니아가 정부의 AI자율제조 선도프로젝트에 최종 선정되며 바이오파운더리 유전자 합성기술 개발에 본격적으로 착수한다고 6일 밝혔다. 이번..",
  //     number: 11160744,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.0033a945b385475490536896c39aec97_R.jpg",
  //   },
  //   {
  //     title:
  //       "서울 도심지역 오피스 매각 본격화…부동산 IB들이 눈독 들이는 자산은?",
  //     link: "https://m.mk.co.kr/news/stock/11160692",
  //     description:
  //       "서울 도심지역 오피스 자산들의 매각 작업이 본격화된다. 6일 투자은행(IB) 업계에 따르면 최근 페블스톤자산운용은 ‘페블스톤전문투자형사모부동산투자신탁 제9호’를 통해 보유한 퍼시픽..",
  //     number: 11160692,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241004.ef9e2c5ed3554848856d98b5fb90bbfa_R.jpg",
  //   },
  //   {
  //     title: "“상장했어유”…백종원 더본코리아, 코스피 입성 첫날 60%대 급등",
  //     link: "https://m.mk.co.kr/news/stock/11160661",
  //     description:
  //       "백종원 대표가 이끄는 더본코리아가 코스피 상장 첫날 강세를 보이고 있다. 6일 오전 9시 30분 현재 더본코리아 주가는 공모가(3만4000원) 대비 2만1700원(63.82%) 오..",
  //     number: 11160661,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/rcv.YNA.20241106.PYH2024110602290001301_R.jpg",
  //   },
  //   {
  //     title: "[속보] 백종원 더본코리아 상장 첫날 급등...시총 8000억",
  //     link: "https://m.mk.co.kr/news/stock/11160650",
  //     description:
  //       "외식 프랜차이즈 기업 더본코리아[475560]가 코스피 상장 첫날인 6일 장 초반 급등하며 시가총액이 8000억원을 넘어섰다. 이날 오전 9시 30분 현재 유가증권시장에서 더본코리..",
  //     number: 11160650,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.3af0030a334e4ea2b4a77e52bcfd7cc0_R.jpg",
  //   },
  //   {
  //     title: "밸류파인더, “맥스트, 195조 디지털 트윈 시장 정조준, 기대감↑”",
  //     link: "https://m.mk.co.kr/news/stock/11160589",
  //     description:
  //       "독립리서치 밸류파인더가 맥스트에 대해 “195조원 디지털트윈 시장을 타깃으로 AR 솔루션 개발 플랫폼 기술을 개발하고 있다”며 “메타와 애플의 스마트글라스 상용화로 관련 시장 이 ..",
  //     number: 11160589,
  //     imageUrl:
  //       "https://pimg.mk.co.kr/news/cms/202411/06/news-p.v1.20241106.8c1b42ec32f34c0d863260f5aff1b990_R.jpg",
  //   },
  // ];
  return (
    <div className="pb-6">
      <h1 className="font-medium text-xl pt-2">오늘의 뉴스</h1>
      <NewsHeader currentType={currentNewsType} onSelectType={onSelectType} />
      <div className="flex flex-col gap-4">
        {newsList.length === 0 ? (
          <div>뉴스를 불러오는 중입니다...</div>
        ) : (
          newsList.map((news) => <NewsPreview key={news.number} news={news} />)
        )}
      </div>
    </div>
  );
}

export default Page;
