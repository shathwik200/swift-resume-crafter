
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ATSScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const ATSScoreRing = ({ 
  score, 
  size = 120, 
  strokeWidth = 8,
  className 
}: ATSScoreRingProps) => {
  const [displayScore, setDisplayScore] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayScore(score);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [score]);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;
  
  // Determine color based on score
  const getScoreColor = () => {
    if (displayScore >= 80) return 'stroke-resume-success';
    if (displayScore >= 60) return 'stroke-resume-teal';
    if (displayScore >= 40) return 'stroke-resume-warning';
    return 'stroke-resume-error';
  };
  
  return (
    <div className={cn("ats-score-ring", className)}>
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        className="transform rotate-[-90deg]"
      >
        {/* Background circle */}
        <circle 
          cx={size / 2} 
          cy={size / 2} 
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-gray-200"
        />
        
        {/* Score circle */}
        <circle 
          cx={size / 2} 
          cy={size / 2} 
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={getScoreColor()}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-3xl font-bold">{Math.round(displayScore)}</span>
        <span className="text-sm text-muted-foreground">ATS Score</span>
      </div>
    </div>
  );
};

export default ATSScoreRing;
