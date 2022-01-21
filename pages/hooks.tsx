import {
  Flex,
  Container,
  Text,
  Button,
  Code,
  Tooltip,
} from "../packages/design-system";
import { useCopy } from "../packages/hooks";

export default function Hooks() {
  const { text: npmText, copy: copyNpm, copied: npmCopied } = useCopy(
    "npm i @styple/hooks"
  );

  return (
    <Flex
      css={{
        alignItems: "center",
        flexDirection: "column",
        gap: "$4xl",
        py: "$xl",
      }}
    >
      <Flex
        css={{
          gap: "$xl",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          <Container as="span" css={{ fontWeight: "$bold" }}>
            Note:
          </Container>{" "}
          proper docs for hooks coming soon.
        </Text>
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
      </Flex>
    </Flex>
  );
}
