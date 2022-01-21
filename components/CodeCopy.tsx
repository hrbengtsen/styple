import { Flex, Button, Code, Tooltip, Text } from "../packages/design-system";
import { useCopy } from "../packages/hooks/src/useCopy";

export function CodeCopy() {
  const { text: npmText, copy: copyNpm, copied: npmCopied } = useCopy(
    "npm i @styple/design-system"
  );
  const { copy: copyStarter, copied: starterCopied } = useCopy(
    "npx create-next-app [project-name] -e https://github.com..."
  );

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
            copyNpm();
          }}
          highlight
        >
          {npmCopied ? (
            "Copied!"
          ) : (
            <>
              <Code>{npmText}</Code>
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
            copyStarter();
          }}
          highlight
        >
          {starterCopied ? (
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
