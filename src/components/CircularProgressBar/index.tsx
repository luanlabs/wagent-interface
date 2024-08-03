interface CircularProgressBarProps {
  percentage: number;
}

function CircularProgressBar({ percentage }: CircularProgressBarProps) {
  const radius = 35;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  const positivePercentage = Math.abs(percentage);
  const progressLength = (positivePercentage / 100) * circumference;

  const strokeColor = percentage >= 0 ? '#26E165' : '#FF3939';

  return (
    <svg width="85" height="86" viewBox="0 0 85 86">
      <circle cx="42.5" cy="43" r={radius} fill="none" stroke="#D0D5DD" strokeWidth={strokeWidth} />
      <circle
        cx="42.5"
        cy="43"
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${progressLength} ${circumference}`}
        strokeLinecap="round"
        transform="rotate(-90 42.5 43)"
      />
    </svg>
  );
}

export default CircularProgressBar;
