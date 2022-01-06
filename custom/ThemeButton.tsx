import React from "react";
import { Button } from "../components/Button";
import { useTheme } from "next-themes";
import { Sun, Moon, Coffee, MountainSnow } from "lucide-react";
import { useHasMounted } from "../lib/hooks/useHasMounted";
import { Tooltip } from "..";

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  function changeTheme() {
    switch (resolvedTheme) {
      case "light":
        setTheme("dark");
        break;

      case "dark":
        setTheme("deep");
        break;

      case "deep":
        setTheme("cozy");
        break;

      case "cozy":
        setTheme("light");
        break;
    }
  }

  function getThemeIcon() {
    switch (resolvedTheme) {
      case "light":
        return <Sun size="20" style={{ verticalAlign: "middle" }} />;

      case "dark":
        return <Moon size="20" style={{ verticalAlign: "middle" }} />;

      case "deep":
        return <MountainSnow size="20" style={{ verticalAlign: "middle" }} />;

      case "cozy":
        return <Coffee size="20" style={{ verticalAlign: "middle" }} />;
    }
  }

  return (
    hasMounted && (
      <Tooltip
        content={
          <>
            Change <b>theme</b>
          </>
        }
      >
        <Button
          css={{
            position: "fixed",
            zIndex: "$1",
            right: 8,
            top: 8,
          }}
          size="circle"
          onClick={() => changeTheme()}
        >
          {getThemeIcon()}
        </Button>
      </Tooltip>
    )
  );
}
