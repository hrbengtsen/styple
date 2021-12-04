import React from "react";
import { Button } from "../components/Button";
import { useTheme } from "next-themes";
import { Sun, Moon, Coffee } from "lucide-react";
import { useHasMounted } from "../lib/hooks/useHasMounted";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  function changeTheme() {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;

      case "dark":
        setTheme("cozy");
        break;

      case "cozy":
        setTheme("light");
        break;
    }
  }

  function getThemeIcon() {
    switch (theme) {
      case "light":
        return <Sun style={{ verticalAlign: "middle", display: "block" }} />;

      case "dark":
        return <Moon style={{ verticalAlign: "middle", display: "block" }} />;

      case "cozy":
        return <Coffee style={{ verticalAlign: "middle", display: "block" }} />;
    }
  }

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
        onClick={() => changeTheme()}
      >
        {getThemeIcon()}
      </Button>
    )
  );
}
