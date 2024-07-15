import React from 'react';

type ProgressBarProps = { progress: number };

const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className="flex gap-2 items-center">
    <div className="relative w-[150px] h-2 bg-[#F2F2F2] rounded">
      <div
        className="absolute top-0 h-2 bg-emeraldGreen rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    <span className="text-cadetBlue"> {progress}%</span>
  </div>
);

export default ProgressBar;
