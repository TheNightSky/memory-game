import { useState, useEffect, useRef } from "react";

const useTime = (isActive) => {
  const [isTiming, setIsTiming] = useState(isActive);
  const [stopwatch, setStopwatch] = useState(0);

  let id = useRef(null);

  useEffect(() => {
    if (!isTiming) {
      clearInterval(id.current);
    } else {
      id.current = setInterval(() => {
        setStopwatch((st) => st + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id.current);
    };
  }, [setIsTiming]);

  const pause = () => {
    setIsTiming(false);
  };
  const play = () => {
    setIsTiming(true);
  };

  const resetTime = () => {
    setStopwatch(0);
  };

  return {
    stopwatch,
    pause,
    play,
    resetTime,
  };
};

export default useTime;
