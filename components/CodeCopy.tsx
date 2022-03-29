import { Flex, Button, Code, Tooltip, Text } from "../packages/design-system";
import { useCopy } from "../packages/hooks/src/useCopy";

export function CodeCopy() {
  const {
    text: npmText,
    copy: copyNpm,
    copied: npmCopied,
  } = useCopy("npm i @styple/design-system");
  const { copy: copyStarter, copied: starterCopied } = useCopy(
    "npx create-next-app [project-name] -e https://github.com/hrbengtsen/nextjs-styple-starter.git"
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

            position: "relative",
            "&::after": {
              content: "",
              bg: "$accent100A",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              transition: "$transform",
              borderRadius: "$lg",
            },
            "&:hover::after": {
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            copyNpm();
          }}
          size="sm"
          ghost
        >
          {npmCopied ? (
            "Copied!"
          ) : (
            <>
              <Code
                css={{
                  bg: "transparent",
                }}
              >
                {npmText}
              </Code>
            </>
          )}
        </Button>
      </Tooltip>
      <Text
        css={{
          mx: "$xl",
        }}
      >
        or
      </Text>
      <Tooltip content={<>Copy to clipboard</>}>
        <Button
          css={{
            display: "flex",
            alignItems: "center",

            position: "relative",
            "&::after": {
              content: "",
              bg: "$accent100A",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              transition: "$transform",
              borderRadius: "$lg",
            },
            "&:hover::after": {
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            copyStarter();
          }}
          size="sm"
          ghost
        >
          {starterCopied ? (
            "Copied!"
          ) : (
            <>
              <Code
                css={{
                  bg: "transparent",
                }}
              >
                via Next.js starter
              </Code>
            </>
          )}
        </Button>
      </Tooltip>
    </Flex>
  );
}
