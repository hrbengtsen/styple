import { useState, useEffect } from "react";

/**
 * Custom hook to get active (focused) element
 * @returns Current active element
 */
export const useActiveElement = () => {
  const [activeElement, setActiveElement] = useState<Element | null>(null);

  const handleFocusIn = () => {
    setActiveElement(document.activeElement);
  };

  const handleFocusOut = () => {
    setActiveElement(null);
  };

  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return activeElement;
};
