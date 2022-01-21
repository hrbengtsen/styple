import { styled, keyframes } from "../stitches.config";

const pulse = keyframes({
  "0%": { opacity: ".5" },
  "100%": { opacity: "1" },
});

export const Skeleton = styled("div", {
  position: "relative",
  overflow: "hidden",

  bg: "$bg300",
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
        size: "$2xl",
        borderRadius: "$round",
      },
      text: {
        height: "$md",
        borderRadius: "$md",
      },
      heading: {
        height: "60px",
        borderRadius: "$lg",
      },
      title: {
        height: "72px",
        borderRadius: "$lg",
      },
      buttonSm: {
        height: "$lg",
        width: "$3xl",
        borderRadius: "$lg",
      },
      buttonMd: {
        height: "40px",
        width: "$3xl",
        borderRadius: "$xl",
      },
      buttonLg: {
        height: "46px",
        width: "$3xl",
        borderRadius: "$2xl",
      },
      badgeSm: {
        height: "$md",
        width: "$2xl",
        borderRadius: "$pill",
      },
      badgeLg: {
        height: "$lg",
        width: "$2xl",
        borderRadius: "$pill",
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
