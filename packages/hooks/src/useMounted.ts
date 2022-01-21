import { useEffect, useState } from "react";

/**
 * Custom hook to get mounted state of component
 * @returns Mounted boolean
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
