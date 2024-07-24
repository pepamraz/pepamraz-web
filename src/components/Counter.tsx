import React, { useEffect, useState } from "react";

interface CounterProps {
  number: number;
  afterNumber?: string;
  title: string | JSX.Element;
  isYear?: boolean;
  animationTime?: number;
}

export const Counter: React.FC<CounterProps> = ({
  number,
  afterNumber,
  title,
  isYear = false,
  animationTime = 1000,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const increment = () => {
      if (currentNumber < number) {
        setTimeout(() => {
          setCurrentNumber(currentNumber + 1);
        }, animationTime / number);
      }
    };
    increment();
  }, [currentNumber, number, animationTime]);

  const getYearSuffix = (num: number) => {
    if (num === 0) {
      return " roků";
    } else if (num === 1) {
      return " rok";
    } else if (num >= 2 && num <= 4) {
      return " roky";
    } else {
      return " let";
    }
  };

  const displayAfterNumber = isYear ? getYearSuffix(currentNumber) : afterNumber;

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="text-3xl font-bold text-blue-600">
        {currentNumber}{displayAfterNumber}
      </div>
      <div className="text-base text-gray-600">{title}</div>
    </div>
  );
};

export default Counter;
