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
  delay: number,
  dependency: any = null
): (() => void) => {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef(null);
  const [currentDelay, setDelay] = useState<number>(delay);

  const toggleRunning = useCallback(
    () => setDelay((currentDelay) => (currentDelay === null ? delay : null)),
    [delay]
  );

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (intervalId.current) clearInterval(intervalId.current);

    if (currentDelay !== null) intervalId.current = setInterval(tick, delay);

    return () => clearInterval(intervalId.current);
  }, [currentDelay, dependency, delay]);

  return toggleRunning;
};
