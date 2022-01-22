import { Container } from "../packages/design-system";

export const Preview = ({ css, ...props }) => (
  <Container
    {...props}
    data-preview
    css={{
      position: "relative",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      py: "$2xl",
      borderRadius: "$xl",
      ...css,
    }}
  />
);
