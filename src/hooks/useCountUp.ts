
import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration = 2000,
  start = false
): number {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animFrame.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [target, duration, start]);

  return count;
}
