import React from "react";
import Lottie from "react-lottie-player";
import LoadingLottie from "@/public/lottie/Loading.json";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div> */}
      <Lottie animationData={LoadingLottie} loop play />
    </div>
  );
}

export default LoadingSpinner;
