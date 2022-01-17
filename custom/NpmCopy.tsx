import { Flex, Button, Code, Tooltip } from "..";
import { Copy } from "lucide-react";
import { useState } from "react";

export function NpmCopy() {
  const [urlCopy, setUrlCopy] = useState<boolean>(false);

  return (
    <Flex
      css={{
        mt: "$4xl",
        justifyContent: "center",
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
            navigator.clipboard.writeText("npm i styple@ui");
            setUrlCopy(true);
            setTimeout(() => setUrlCopy(false), 2000);
          }}
          highlight
        >
          {urlCopy ? (
            "Copied!"
          ) : (
            <>
              <Code
                css={{
                  mr: "$sm",
                }}
              >
                npm i styple@ui
              </Code>{" "}
              <Copy size="16" style={{ verticalAlign: "middle" }} />
            </>
          )}
        </Button>
      </Tooltip>
    </Flex>
  );
}
