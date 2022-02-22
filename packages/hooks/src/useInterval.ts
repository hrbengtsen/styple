import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom hook to start an interval for a callback
 * @param callback    Callback function called in interval
 * @param delay       Delay between function calls
 * @param dependency  Dependency to update interval with
 * @returns Function to toggle interval on/off
 */
export const useInterval = (
  callback: () => void,
  delay: number = 0,
  dependency: any = null
): (() => void) => {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout>();
  const [currentDelay, setDelay] = useState<number>(delay);

  const toggleRunning = useCallback(
    () => setDelay((currentDelay) => (currentDelay === 0 ? delay : 0)),
    [delay]
  );

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }

    if (intervalId.current) clearInterval(intervalId.current);

    if (currentDelay !== 0) intervalId.current = setInterval(tick, delay);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [currentDelay, dependency, delay]);

  return toggleRunning;
};
