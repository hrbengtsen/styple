import React from "react";
import { Button } from "../packages/design-system/components/Button";
import { useTheme } from "next-themes";
import { Sun, Moon, Coffee, MountainSnow } from "lucide-react";
import { Tooltip } from "../packages/design-system";

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

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
        return <Sun size="20" style={{ position: "relative", top: "2px" }} />;

      case "dark":
        return <Moon size="20" style={{ position: "relative", top: "2px" }} />;

      case "deep":
        return (
          <MountainSnow
            size="20"
            style={{ position: "relative", top: "2px" }}
          />
        );

      case "cozy":
        return (
          <Coffee size="20" style={{ position: "relative", top: "2px" }} />
        );
    }
  }

  return (
    <Tooltip
      content={
        <>
          Change <b>theme</b>
        </>
      }
    >
      <Button
        size="circle"
        ghost
        onClick={() => changeTheme()}
        css={{
          transition: "transform 200ms ease-in-out",
          willChange: "transform",
          "&:hover": {
            transform: "rotate(12deg)",
          },
        }}
      >
        {getThemeIcon()}
      </Button>
    </Tooltip>
  );
}
