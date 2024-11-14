import TFQuiz from "@/src/Quiz/TFQuiz";
import React from "react";

function Page() {
  // 퀴즈 데이터 가져오기

  const sampleQuiz = {
    id: 13,
    difficulty: "LO" as "HI" | "MI" | "LO",
    question:
      "DTI(총부채상환비율)는 연 소득 대비 금융비용 부담률을 나타내는 지표입니다.",
    answer: "TRUE" as "TRUE" | "FALSE",
    description:
      "DTI(Debt to Income : 총부채상환비율)는 연 소득 대비 금융비용 부담률을 의미합니다. 소득과 비교한 대출금 수준을 판단하는 지표예요. DTI는 ‘나의 연소 득’에서 ‘주택담보대출의 원금 상환과 이자, 다른 대출의 이자로 나가는 금액’이 차지하는 비중으로 구합니다. 내가 가진 모든 대출의 원리금 상환금액을 합쳐 따지는 DSR보다는 유한 기준입니다.",
    quizDoneList: [],
  };
  return (
    <>
      <TFQuiz quiz={sampleQuiz} />
    </>
  );
}

export default Page;
