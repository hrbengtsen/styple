import React from "react";
import { Button } from "../components/Button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useHasMounted } from "../lib/hooks/useHasMounted";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <Button
        style={{
          position: "fixed",
          zIndex: 999,
          right: 8,
          top: 8,
        }}
        size="circle"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {theme === "dark" ? (
          <Moon style={{ verticalAlign: "middle", display: "block" }} />
        ) : (
          <Sun style={{ verticalAlign: "middle", display: "block" }} />
        )}
      </Button>
    )
  );
}
