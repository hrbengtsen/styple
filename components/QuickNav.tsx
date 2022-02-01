import { Container, Link, Text } from "../packages/design-system";
import { RemoveScroll } from "react-remove-scroll";
import { useEffect, useState } from "react";

export const QuickNav = () => {
  const [headings, setHeadings] = useState<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const headingElements: HTMLParagraphElement[] = Array.from(
      document.querySelectorAll("[data-heading]")
    );

    setHeadings(headingElements);
  }, []);

  return (
    <Container
      as="aside"
      className={RemoveScroll.classNames.zeroRight}
      css={{
        display: "none",
        "@bp4": {
          display: "block",
          width: 200,
          bg: "$bg200A",
          zIndex: 1,
          position: "fixed",
          right: 0,
          top: "$max",
        },
      }}
    >
      <Text color="heading" css={{ fontWeight: "$bold" }}>
        Contents
      </Text>
      <Container
        as="ul"
        css={{
          listStyleType: "none",
          p: 0,
          m: 0,
        }}
      >
        {headings.map(({ id, innerText, dataset }) => (
          <Container as="li" key={id}>
            <Link
              href={`#${id}`}
              css={{
                fontSize: "$xs",
                // Indent heading if it has data-heading="2"
                ml: `${dataset["heading"] === "2" ? "$md" : 0}`,
              }}
            >
              {innerText}
            </Link>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
