import { Container, Link } from "../packages/design-system";
import { RemoveScroll } from "react-remove-scroll";
import { useEffect, useState } from "react";

export const QuickNav = () => {
  const [components, setComponents] = useState<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const comps: HTMLParagraphElement[] = Array.from(
      document.querySelectorAll("[data-component]")
    );

    setComponents(comps);
  }, []);

  return (
    <Container
      as="aside"
      className={RemoveScroll.classNames.zeroRight}
      css={{
        display: "none",
        "@bp4": {
          display: "block",
          width: 150,
          bg: "$bg200A",
          zIndex: 1,
          position: "fixed",
          right: 0,
          top: "$4xl",
        },
      }}
    >
      <Container
        as="ul"
        css={{
          listStyleType: "none",
          p: 0,
          m: 0,
        }}
      >
        {components.map(({ id, innerText }) => (
          <Container as="li" key={id}>
            <Link href={`#${id}`} css={{ fontSize: "$xs" }}>
              {innerText.split(" ")[0]}
            </Link>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
