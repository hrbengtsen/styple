import { styled } from "../stitches.config";

export const Code = styled("code", {
  fontFamily: "$mono",
  fontSize: "max($xs, 85%)",
  whiteSpace: "nowrap",

  color: "$accent200",
  bg: "$accent200A",
});
