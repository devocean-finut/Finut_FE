"use client";

import ProgressBar from "@/src/Levet-test/ProgressBar";
import QuizContent, { QuestionType } from "@/src/Levet-test/QuizContent";
import { useEffect, useState } from "react";

function Page() {
  const [quizNumber, setQuizNumber] = useState(0);
  const totalQuiz = 3;
  const nextQuiz = () => {
    setQuizNumber(quizNumber + 1);
  };

  const sampleQuiz: QuestionType[] = [
    {
      id: 1,
      difficulty: "LO",
      question: "정부는 물가 상승을 억제하기 위해 금리를 낮춘다.",
      answer: false,
      description:
        "정부는 물가 상승을 억제하기 위해 금리를 높이는 정책을 시행한다. 금리를 높이면 돈을 빌리는 것이 어려워지기 때문에 소비가 줄어들고, 생산이 감소하게 되어 물가 상승을 억제할 수 있다.",
    },
    {
      id: 2,
      difficulty: "MI",
      question: "환율이 하락하면 수출업자에게 유리하다.",
      answer: true,
      description:
        "환율이 하락하면 외국인이 한국의 수출물을 더 싸게 구입할 수 있기 때문에 수출업자에게 유리하다. 따라서 수출이 증가하게 되어 국내 경제에 긍정적인 영향을 미친다.",
    },
    {
      id: 3,
      difficulty: "HI",
      question:
        "긴축 정책은 통화 공급을 줄여 인플레이션을 억제하고 경기를 둔화시키기 위한 경제 정책이다.",
      answer: true,
      description:
        "긴축 정책은 통화 공급을 줄여 인플레이션을 억제하고 경기를 둔화시키기 위한 경제 정책이다. 긴축 정책은 통화량을 줄이기 때문에 금리가 오르고, 소비와 투자가 감소하게 된다.",
    },
  ];
  useEffect(() => {
    // quiz fetch하기
  }, []);
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <ProgressBar current={quizNumber} total={totalQuiz} />
      <QuizContent
        quiz={sampleQuiz}
        quizNumber={quizNumber}
        nextQuiz={nextQuiz}
      />
    </main>
  );
}

export default Page;
