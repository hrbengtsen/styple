import { styled, keyframes } from "../stitches.config";

const pulse = keyframes({
  "0%": { opacity: ".5" },
  "100%": { opacity: "1" },
});

export const Skeleton = styled("div", {
  position: "relative",
  overflow: "hidden",

  bg: "$bgDark",
  borderRadius: "inherit",
  animationName: `${pulse}`,
  animationDuration: ".75s",
  animationDirection: "alternate",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",

  variants: {
    variant: {
      avatarSm: {
        size: "$md",
        borderRadius: "$round",
      },
      avatarMd: {
        size: "$lg",
        borderRadius: "$round",
      },
      avatarLg: {
        size: "$xl",
        borderRadius: "$round",
      },
      avatarXl: {
        size: "$xxl",
        borderRadius: "$round",
      },
      text: {
        height: "$sm",
        borderRadius: "$sm",
      },
      heading: {
        height: "$lg",
        borderRadius: "$lg",
      },
      title: {
        height: "$xl",
        borderRadius: "$lg",
      },
      buttonSm: {
        height: "$lg",
        width: "112px",
        borderRadius: "$lg",
      },
      buttonLg: {
        height: "40px",
        width: "112px",
        borderRadius: "$xl",
      },
      card: {
        height: "192px",
        width: "320px",
        borderRadius: "$xl",
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});
