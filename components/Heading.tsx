import { styled } from "../stitches.config";
import { Text } from "./Text";

export const StyledHeading = styled(Text, {
  // Reset
  m: "0",
  fontWeight: "$reg",

  defaultVariants: {
    size: "sm",
    color: "text1",
  },
});

export const Heading = (props) => {
  const { type, ...rest } = props;

  return <StyledHeading as={type} {...rest} />;
};

Heading.defaultProps = {
  type: "h1",
};
