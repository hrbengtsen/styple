import { Flex, Button, Code, Tooltip, Text } from "..";
import { Copy } from "lucide-react";
import { useState } from "react";

export function CodeCopy() {
  const [npmCopy, setNpmCopy] = useState<boolean>(false);
  const [starterCopy, setStarterCopy] = useState<boolean>(false);

  return (
    <Flex
      css={{
        mt: "$4xl",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "@bp1": {
          flexDirection: "row",
        },
      }}
    >
      <Tooltip content={<>Copy to clipboard</>}>
        <Button
          css={{
            display: "flex",
            alignItems: "center",
            maxHeight: "40px",
          }}
          onClick={() => {
            navigator.clipboard.writeText("npm i @styple/design-system");
            setNpmCopy(true);
            setTimeout(() => setNpmCopy(false), 2000);
          }}
          highlight
        >
          {npmCopy ? (
            "Copied!"
          ) : (
            <>
              <Code>npm i @styple/design-system</Code>
            </>
          )}
        </Button>
      </Tooltip>
      <Text
        css={{
          mx: "$sm",
        }}
      >
        or
      </Text>
      <Tooltip content={<>Copy to clipboard</>}>
        <Button
          css={{
            display: "flex",
            alignItems: "center",
            maxHeight: "40px",
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              "npx create-next-app [project-name] -e https://github.com..."
            );
            setStarterCopy(true);
            setTimeout(() => setStarterCopy(false), 2000);
          }}
          highlight
        >
          {starterCopy ? (
            "Copied!"
          ) : (
            <>
              <Code>via Next.js starter</Code>
            </>
          )}
        </Button>
      </Tooltip>
    </Flex>
  );
}
