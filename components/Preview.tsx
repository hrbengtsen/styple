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
      py: "$lg",
      borderTopLeftRadius: "$xl",
      borderTopRightRadius: "$xl",
      boxShadow: "inset 0 0 0 1px $colors$button100",
      ...css,
    }}
  />
);
