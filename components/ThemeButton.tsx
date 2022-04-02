import React, { useEffect } from "react";
import { Button } from "../packages/design-system/components/Button";
import { useTheme } from "next-themes";
import { Sun, Moon, Coffee, MountainSnow } from "lucide-react";
import { useMounted } from "../packages/hooks/src/useMounted";
import { Tooltip } from "../packages/design-system";

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Custom colorScheme solution instead of enableColorScheme in next-themes due to stitches deep-theme needing to set dark color scheme
  useEffect(() => {
    const colorScheme =
      resolvedTheme === "deep" || resolvedTheme === "dark" ? "dark" : "light";
    document.documentElement.style.colorScheme = colorScheme;
  }, [resolvedTheme]);

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

  if (!mounted) return null;

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
