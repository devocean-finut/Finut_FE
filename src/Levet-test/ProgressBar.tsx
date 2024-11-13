import React from "react";

type ProgressBarProps = {
  current: number;
  total: number;
};

function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="w-full h-4 bg-gray-300 rounded-full">
      <div
        className="h-full bg-primary rounded-lg"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}

export default ProgressBar;
