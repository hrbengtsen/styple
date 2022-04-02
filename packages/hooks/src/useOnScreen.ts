import { useState, useEffect, MutableRefObject } from "react";

/**
 * Custom hook to get whether a element (via ref) is visible (intersecting) on screen
 * @param ref Ref of element to be observed
 * @returns Boolean of whether element is on screen
 */
export const useOnScreen = (ref: MutableRefObject<Element | null>) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    if (ref.current) observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
