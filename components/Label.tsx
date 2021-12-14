import { styled } from "../stitches.config";
import * as LabelPrimitive from "@radix-ui/react-label";
import { textStyles } from "..";

export const Label = styled(LabelPrimitive.Root, textStyles, {
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default",
});
