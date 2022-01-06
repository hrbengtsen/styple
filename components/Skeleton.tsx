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
        size: "$xxl",
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
        width: "$xxxl",
        borderRadius: "$lg",
      },
      buttonMd: {
        height: "40px",
        width: "$xxxl",
        borderRadius: "$xl",
      },
      buttonLg: {
        height: "46px",
        width: "$xxxl",
        borderRadius: "$xxl",
      },
      badgeSm: {
        height: "$md",
        width: "$xxl",
        borderRadius: "$pill",
      },
      badgeLg: {
        height: "$lg",
        width: "$xxl",
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
