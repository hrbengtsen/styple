import React from "react";
import { Button } from "../components/Button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      style={{ position: "fixed", zIndex: 999, right: 8, top: 8 }}
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <Moon style={{ verticalAlign: "middle" }} />
      ) : (
        <Sun style={{ verticalAlign: "middle" }} />
      )}
    </Button>
  );
}
