import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to delay a callback when some associated state is updated
 * @param callback      Callback function called after delay (unless state updates again)
 * @param initialValue  Initial state value
 * @param delay         Debounce delay in ms
 * @returns Array of state and setState (like useState)
 */
export const useDebounce = (
  callback: () => void,
  initialValue: any,
  delay: number
) => {
  // To prevent calling the callback function on component mount
  const didMountRef = useRef<boolean>(false);

  const [state, setState] = useState<typeof initialValue>(initialValue);

  useEffect(() => {
    let delayDebounceFn: NodeJS.Timeout;

    if (didMountRef.current) {
      delayDebounceFn = setTimeout(callback, delay);
    } else {
      didMountRef.current = true;
    }

    return () => clearTimeout(delayDebounceFn);
  }, [state, callback, delay]);

  return [state, setState];
};
