import { useState, useEffect } from "react";

/**
 * Custom hook to copy content to clipboard
 * @param text the string to copy
 * @param delay delay (in ms) to return to initial state
 * @returns Object with: text to copy, copy callback and copied state
 */
export function useCopy(text: string, delay = 2000) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [delay, copied]);

  return { text, copy, copied };
}
