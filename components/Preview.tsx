import { Container } from "../packages/design-system";

type PreviewProps = React.ComponentProps<typeof Container>;

export const Preview = ({ css, ...props }: PreviewProps) => (
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
